"use client"
import { User, Phone, Calendar } from "lucide-react"

export default function Step1({ data, onChange, onNext, onBack }) {
  const isValid = data.fullName && data.phone && data.dob && data.gender

  return (
    <div className="rounded-2xl border-2 border-gray-300 p-8 bg-white">
      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">Full name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Enter your full name"
              value={data.fullName}
              onChange={(e) => onChange({ ...data, fullName: e.target.value })}
              className="w-full rounded-lg bg-gray-100 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">Phone</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={data.phone}
              onChange={(e) => onChange({ ...data, phone: e.target.value })}
              className="w-full rounded-lg bg-gray-100 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">DoB</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
            <input
              type="date"
              value={data.dob}
              onChange={(e) => onChange({ ...data, dob: e.target.value })}
              className="w-full rounded-lg bg-gray-100 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="mb-3 block font-medium text-gray-700">Gender</label>
          <div className="flex gap-8">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={data.gender === "male"}
                onChange={(e) => onChange({ ...data, gender: e.target.value })}
                className="h-4 w-4 cursor-pointer text-red-600"
              />
              <span className="text-gray-700">Male</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={data.gender === "female"}
                onChange={(e) => onChange({ ...data, gender: e.target.value })}
                className="h-4 w-4 cursor-pointer text-red-600"
              />
              <span className="text-gray-700">Female</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="others"
                checked={data.gender === "others"}
                onChange={(e) => onChange({ ...data, gender: e.target.value })}
                className="h-4 w-4 cursor-pointer text-red-600"
              />
              <span className="text-gray-700">Others</span>
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-6">
          <button
            onClick={onBack}
            className="flex-1 border-2 border-gray-300 bg-transparent py-6 text-base font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={onNext}
            disabled={!isValid}
            className="flex-1 bg-red-600 py-6 text-base font-semibold text-white hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
