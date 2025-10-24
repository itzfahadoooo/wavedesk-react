"use client"

import type { Ticket } from "../contexts/TicketContext"
import { Edit2, Trash2 } from "lucide-react"

interface TicketCardProps {
  ticket: Ticket
  onEdit: (ticket: Ticket) => void
  onDelete: (id: string) => void
}

export default function TicketCard({ ticket, onEdit, onDelete }: TicketCardProps) {
  const statusColors = {
    open: "bg-green-200 text-green-800",
    in_progress: "bg-amber-200 text-amber-800",
    closed: "bg-gray-200 text-gray-800",
  }

  const priorityColors = {
    low: "text-blue-600",
    medium: "text-amber-600",
    high: "text-red-600",
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">{ticket.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{ticket.description}</p>
        </div>
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => onEdit(ticket)}
            className="p-2 hover:bg-blue-50 rounded-lg transition text-blue-600 cursor-pointer"
            aria-label="Edit ticket"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(ticket.id)}
            className="p-2 hover:bg-red-50 rounded-lg transition text-red-600 cursor-pointer"
            aria-label="Delete ticket"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[ticket.status]}`}>
            {ticket.status.replace("_", " ")}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${priorityColors[ticket.priority]}`}>
            {ticket.priority}
          </span>
        </div>
        <p className="text-xs text-gray-500">{new Date(ticket.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  )
}
