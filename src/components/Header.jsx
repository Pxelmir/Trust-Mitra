"use client";
import { Shield } from "lucide-react";

export default function Header({ onGetStarted }) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full">
            <img src="/Home/logo.jpeg" alt="logo" />
          </div>
          <span className="text-xl font-bold text-red-600">Trust Mitra</span>
        </div>

        {/* Right: Search Bar and Buttons */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search jobs, workers..."
              className="w-64 rounded-full border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Buttons */}
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
      <nav className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-center space-x-8">
          <a
            href="#"
            className="text-lg font-medium text-gray-800 hover:text-red-600"
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg font-medium text-gray-800 hover:text-red-600"
          >
            Services
          </a>
          <a
            href="#"
            className="text-lg font-medium text-gray-800 hover:text-red-600"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-lg font-medium text-gray-800 hover:text-red-600"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
