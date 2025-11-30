"use client"

import { Users, Briefcase, Shield } from "lucide-react"

export default function RoleSelection({ onRoleSelect, onBack }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Logo */}
      <div className="flex justify-center pt-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-red-600">Trust Mitra</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">Choose what you want?</h1>
            <p className="text-gray-600">Select how you want to join our platform</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Worker Card */}
            <div
              className="border-2 border-gray-300 p-8 rounded-3xl hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onRoleSelect("worker")}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <Briefcase className="w-10 h-10 text-gray-800" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center mb-2">Join as a Worker</h2>
              <p className="text-gray-600 text-center mb-6">Offer your services to customers</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span className="text-gray-700">Get hired for projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span className="text-gray-700">Build your reputation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span className="text-gray-700">Flexible work schedule</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span className="text-gray-700">Grow your business</span>
                </li>
              </ul>

              <button
                onClick={() => onRoleSelect("worker")}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-base font-semibold rounded-md transition-colors"
              >
                Signup as Worker
              </button>
            </div>

            {/* Recruiter Card */}
            <div
              className="border-2 border-gray-300 p-8 rounded-3xl hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onRoleSelect("recruiter")}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-gray-800" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center mb-2">Join as a Recruiter</h2>
              <p className="text-gray-600 text-center mb-6">Find and hire skilled workers</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span className="text-gray-700">Access verified workers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span className="text-gray-700">Quick service requests</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span className="text-gray-700">Safe and secure</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span className="text-gray-700">Rate and review</span>
                </li>
              </ul>

              <button
                onClick={() => onRoleSelect("recruiter")}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-base font-semibold rounded-md transition-colors"
              >
                Signup as Recruiter
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <button onClick={onBack} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
