import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { TicketProvider } from "./contexts/TicketContext"
import { ToastProvider } from "./contexts/ToastContext"
import ToastContainer from "./components/Toast"
import ProtectedRoute from "./routes/ProtectedRoute"
import Landing from "./pages/Landing"
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"
import Dashboard from "./pages/Dashboard"
import Tickets from "./pages/Tickets"

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <TicketProvider>
          <ToastProvider>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/signup" element={<Signup />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/tickets"
                element={
                  <ProtectedRoute>
                    <Tickets />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            {/* 👇 this makes the toast actually appear */}
            <ToastContainer />
          </ToastProvider>
        </TicketProvider>
      </AuthProvider>
    </Router>
  )
}
