"use client"

import { Shield } from "lucide-react"

export default function Header({ onGetStarted }) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-red-600">Trust Mitra</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            About Us
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Contact Us
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent rounded-md font-medium transition-colors">
            Login
          </button>
          <button
            onClick={onGetStarted}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition-colors"
          >
            Signup
          </button>
        </div>
      </div>
    </header>
  )
}
