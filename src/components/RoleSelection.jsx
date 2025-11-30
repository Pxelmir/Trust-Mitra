"use client"
import { Users, Briefcase, Shield } from "lucide-react"

export default function RoleSelection({ onRoleSelect, onBack }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Logo */}
      <div className="flex justify-center pt-8">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-red-600">Trust Mitra</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-2 text-4xl font-bold">Choose what you want?</h1>
            <p className="text-gray-600">Select how you want to join out platform</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Worker Card */}
            <div
              className="rounded-3xl border-2 border-gray-300 p-8 cursor-pointer transition-shadow hover:shadow-lg bg-white"
              onClick={() => onRoleSelect("worker")}
            >
              <div className="mb-6 flex justify-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full">
                  <Briefcase className="w-10 h-10 text-gray-800" />
                </div>
              </div>

              <h2 className="mb-2 text-center text-2xl font-bold">Join as a Worker</h2>
              <p className="mb-6 text-center text-gray-600">Offer your services to customers</p>

              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="font-bold text-red-600">✓</span>
                  <span className="text-gray-700">Get hired for projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-red-600">✓</span>
                  <span className="text-gray-700">Build your reputation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-red-600">✓</span>
                  <span className="text-gray-700">Flexible work schedule</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-red-600">✓</span>
                  <span className="text-gray-700">Grow your business</span>
                </li>
              </ul>

              <button
                onClick={() => onRoleSelect("worker")}
                className="w-full bg-red-600 py-6 text-base font-semibold text-white hover:bg-red-700 rounded-lg transition-colors"
              >
                Signup as Worker
              </button>
            </div>

            {/* Recruiter Card */}
            <div
              className="rounded-3xl border-2 border-gray-300 p-8 cursor-pointer transition-shadow hover:shadow-lg bg-white"
              onClick={() => onRoleSelect("recruiter")}
            >
              <div className="mb-6 flex justify-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full">
                  <Users className="w-10 h-10 text-gray-800" />
                </div>
              </div>

              <h2 className="mb-2 text-center text-2xl font-bold">Join as a Recruiter</h2>
              <p className="mb-6 text-center text-gray-600">Find and hire skilled workers</p>

              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="font-bold text-red-600">✓</span>
                  <span className="text-gray-700">Access verified workers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-red-600">✓</span>
                  <span className="text-gray-700">Quick service requests</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-red-600">✓</span>
                  <span className="text-gray-700">Safe and secure</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-red-600">✓</span>
                  <span className="text-gray-700">Rate and review</span>
                </li>
              </ul>

              <button
                onClick={() => onRoleSelect("recruiter")}
                className="w-full bg-red-600 py-6 text-base font-semibold text-white hover:bg-red-700 rounded-lg transition-colors"
              >
                Signup as Recruiter
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button onClick={onBack} className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
