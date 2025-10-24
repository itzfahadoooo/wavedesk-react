import { useTickets } from "@/hooks/useTickets"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import StatCard from "../components/StatCard"
import { BarChart3, CheckCircle, AlertCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function Dashboard() {
  const { getStats } = useTickets()
  const stats = getStats()

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-blue-50 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your ticket overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <StatCard title="Total Tickets" value={stats.total} icon={<BarChart3 className="w-6 h-6" />} color="blue" />
          <StatCard title="Open Tickets" value={stats.open} icon={<AlertCircle className="w-6 h-6" />} color="amber" />
          <StatCard
            title="Resolved Tickets"
            value={stats.closed}
            icon={<CheckCircle className="w-6 h-6" />}
            color="green"
          />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/tickets"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-center"
            >
              Manage Tickets
            </Link>
            <Link
              to="/tickets"
              className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition font-medium text-center"
            >
              View All Tickets
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
