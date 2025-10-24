"use client"

import type React from "react"
import { createContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  password: string
}

interface AuthContextType {
  user: Omit<User, "password"> | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

/**
 * DEMO CONFIG
 * Set AUTO_LOGIN = true if you want the demo user to be signed in automatically on load.
 * Otherwise, the demo account will only be pre-seeded and can be used to log in manually.
 */
const DEMO_USER = { id: "1", email: "test@example.com", password: "Password123!" }
const AUTO_LOGIN = false // <-- set to true for automatic demo sign-in

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Omit<User, "password"> | null>(null)

  // Load session
  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session")
    if (session) {
      try {
        setUser(JSON.parse(session))
      } catch {
        localStorage.removeItem("ticketapp_session")
      }
    }
  }, [])

  // Simulated local "database" helpers
  const getUsers = (): User[] => JSON.parse(localStorage.getItem("ticketapp_users") || "[]")
  const saveUsers = (users: User[]) => localStorage.setItem("ticketapp_users", JSON.stringify(users))

  // Pre-seed demo user on first load. Does not overwrite existing users.
  useEffect(() => {
    const users = getUsers()
    if (!users.find((u) => u.email === DEMO_USER.email)) {
      saveUsers([...users, DEMO_USER])
    }

    // Optional: automatically create a session for the demo user (auto-login).
    if (AUTO_LOGIN) {
      const session = localStorage.getItem("ticketapp_session")
      if (!session) {
        const sessionUser = { id: DEMO_USER.id, email: DEMO_USER.email }
        localStorage.setItem("ticketapp_session", JSON.stringify(sessionUser))
        // update state so components reflect the logged-in user immediately
        setUser(sessionUser)
      }
    }
  }, [])

  const login = async (email: string, password: string) => {
    const users = getUsers()
    const existingUser = users.find((u) => u.email === email)

    if (!existingUser) {
      throw new Error("No account found with this email.")
    }

    if (existingUser.password !== password) {
      throw new Error("Invalid password. Please try again.")
    }

    const sessionUser = { id: existingUser.id, email: existingUser.email }
    setUser(sessionUser)
    localStorage.setItem("ticketapp_session", JSON.stringify(sessionUser))
  }

  const signup = async (email: string, password: string) => {
    const users = getUsers()
    const existingUser = users.find((u) => u.email === email)

    if (existingUser) {
      throw new Error("This email is already registered.")
    }

    const newUser: User = { id: Date.now().toString(), email, password }
    const updatedUsers = [...users, newUser]
    saveUsers(updatedUsers)

    const sessionUser = { id: newUser.id, email: newUser.email }
    setUser(sessionUser)
    localStorage.setItem("ticketapp_session", JSON.stringify(sessionUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("ticketapp_session")
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
