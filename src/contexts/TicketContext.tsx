"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"
import { useAuth } from "@/hooks/useAuth"

export interface Ticket {
  id: string
  title: string
  description: string
  status: "open" | "in_progress" | "closed"
  priority: "low" | "medium" | "high"
  createdAt: string
  updatedAt: string
}

export interface TicketContextType {
  tickets: Ticket[]
  addTicket: (ticket: Omit<Ticket, "id" | "createdAt" | "updatedAt">) => void
  updateTicket: (id: string, ticket: Partial<Ticket>) => void
  deleteTicket: (id: string) => void
  getStats: () => { total: number; open: number; closed: number }
}

// eslint-disable-next-line react-refresh/only-export-components
export const TicketContext = createContext<TicketContextType | undefined>(undefined)

export function TicketProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [tickets, setTickets] = useState<Ticket[]>([])

  // Load tickets for the logged-in user
  useEffect(() => {
    if (!user) return

    const stored = localStorage.getItem(`ticketapp_tickets_${user.id}`)
    if (stored) {
      try {
        setTickets(JSON.parse(stored))
      } catch {
        setTickets([])
      }
    } else {
      setTickets([])
    }
  }, [user])

  // Save tickets per user
  useEffect(() => {
    if (!user) return
    localStorage.setItem(`ticketapp_tickets_${user.id}`, JSON.stringify(tickets))
  }, [tickets, user])

  const addTicket = (ticket: Omit<Ticket, "id" | "createdAt" | "updatedAt">) => {
    const newTicket: Ticket = {
      ...ticket,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setTickets((prev) => [newTicket, ...prev])
  }

  const updateTicket = (id: string, updates: Partial<Ticket>) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, ...updates, updatedAt: new Date().toISOString() } : t,
      ),
    )
  }

  const deleteTicket = (id: string) => {
    setTickets((prev) => prev.filter((t) => t.id !== id))
  }

  const getStats = () => ({
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  })

  return (
    <TicketContext.Provider value={{ tickets, addTicket, updateTicket, deleteTicket, getStats }}>
      {children}
    </TicketContext.Provider>
  )
}
