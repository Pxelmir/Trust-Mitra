"use client"

import { useState } from "react"
import { User, Clock, X } from "lucide-react"

const skills = ["Plumber", "Driver", "Carpenter", "Nurse", "Electrician", "Labor", "Mechanic", "Painter"]

export default function Step2({ data, onChange, onNext, onBack }) {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const isValid = data.skill && data.yearsExperience

  return (
    <div className="rounded-2xl border-2 border-gray-300 p-8 bg-white">
      <div className="space-y-6">
        {/* Skill */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">Skill</label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Select your skill"
              value={data.skill}
              onChange={(e) => onChange({ ...data, skill: e.target.value })}
              onFocus={() => setShowSuggestions(true)}
              className="w-full rounded-lg bg-gray-100 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {showSuggestions && (
            <div className="absolute left-0 right-0 top-full z-10 mt-2 border-2 border-gray-300 bg-white p-4 rounded-lg shadow-lg">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium text-gray-700">Suggestion</span>
                <button onClick={() => setShowSuggestions(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-5 w-5" />
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
                    className="rounded-lg border border-gray-300 px-3 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
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
          <label className="mb-2 block font-medium text-gray-700">Years of Experience</label>
          <div className="relative">
            <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
            <select
              value={data.yearsExperience}
              onChange={(e) => onChange({ ...data, yearsExperience: e.target.value })}
              className="w-full rounded-lg bg-gray-100 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
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
