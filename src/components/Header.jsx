"use client"
import { Shield } from "lucide-react"

export default function Header({ onGetStarted }) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-red-600">Trust Mitra</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="font-medium text-gray-700 transition-colors hover:text-gray-900">
            Services
          </a>
          <a href="#about" className="font-medium text-gray-700 transition-colors hover:text-gray-900">
            About Us
          </a>
          <a href="#contact" className="font-medium text-gray-700 transition-colors hover:text-gray-900">
            Contact Us
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 bg-transparent rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Login
          </button>
          <button
            onClick={onGetStarted}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Signup
          </button>
        </div>
      </div>
    </header>
  )
}
