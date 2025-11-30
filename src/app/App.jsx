"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import RoleSelection from "@/components/RoleSelection"
import RegistrationFlow from "@/components/RegistrationFlow"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [userRole, setUserRole] = useState(null)

  const handleGetStarted = () => {
    setCurrentPage("roles")
  }

  const handleRoleSelect = (role) => {
    setUserRole(role)
    setCurrentPage("register")
  }

  const handleBackToHome = () => {
    setCurrentPage("home")
    setUserRole(null)
  }

  return (
    <main className="min-h-screen bg-white">
      {currentPage === "home" && (
        <>
          <Header onGetStarted={handleGetStarted} />
          <Hero onGetStarted={handleGetStarted} />
        </>
      )}
      {currentPage === "roles" && <RoleSelection onRoleSelect={handleRoleSelect} onBack={handleBackToHome} />}
      {currentPage === "register" && userRole && <RegistrationFlow role={userRole} onBack={handleBackToHome} />}
    </main>
  )
}
