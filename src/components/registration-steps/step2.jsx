"use client"

import { useState } from "react"

const skills = ["Plumber", "Driver", "Carpenter", "Nurse", "Electrician", "Labor", "Mechanic", "Painter"]

export default function Step2({ data, onChange, onNext, onBack }) {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const isValid = data.skill && data.yearsExperience

  return (
    <div className="p-8 border-2 border-gray-300 rounded-2xl bg-white">
      <div className="space-y-6">
        {/* Skill */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Skill</label>
          <div className="relative">
            <svg
              className="absolute left-3 top-3 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <input
              type="text"
              placeholder="Select your skill"
              value={data.skill}
              onChange={(e) => onChange({ ...data, skill: e.target.value })}
              onFocus={() => setShowSuggestions(true)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && (
            <div className="absolute top-full left-0 right-0 mt-2 p-4 border-2 border-gray-300 rounded-lg bg-white z-10">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-gray-700">Suggestion</span>
                <button onClick={() => setShowSuggestions(false)} className="text-gray-500 hover:text-gray-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => {
                      onChange({ ...data, skill })
                      setShowSuggestions(false)
                    }}
                    className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-left text-sm"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Years of Experience */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Years of Experience</label>
          <div className="relative">
            <svg
              className="absolute left-3 top-3 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <select
              value={data.yearsExperience}
              onChange={(e) => onChange({ ...data, yearsExperience: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Select experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-6">
          <button
            onClick={onBack}
            className="flex-1 py-6 text-base font-semibold border-2 border-gray-300 bg-transparent rounded-lg hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={onNext}
            disabled={!isValid}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-6 text-base font-semibold rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
