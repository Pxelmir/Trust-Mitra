"use client"

import { useState } from "react"

export default function Step4({ data, onChange, onSubmit, onBack }) {
  const [selfiePreview, setSelfiePreview] = useState(null)

  const isValid = data.selfie && data.password && data.confirmPassword && data.password === data.confirmPassword

  const handleSelfieChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      onChange({ ...data, selfie: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelfiePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="p-8 border-2 border-gray-300 rounded-2xl bg-white">
      <div className="space-y-6">
        {/* Upload Selfie */}
        <div>
          <label className="block text-gray-700 font-medium mb-3">Upload Selfie</label>
          <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition">
            <input type="file" accept="image/*" onChange={handleSelfieChange} className="hidden" />
            {selfiePreview ? (
              <div className="space-y-2">
                <img
                  src={selfiePreview || "/placeholder.svg"}
                  alt="Selfie preview"
                  className="w-20 h-20 mx-auto object-cover rounded-full"
                />
                <p className="text-sm text-gray-600">{data.selfie?.name}</p>
              </div>
            ) : (
              <div className="space-y-2">
                <svg className="w-10 h-10 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-600">Choose Image</p>
              </div>
            )}
          </label>
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Enter Password</label>
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <input
              type="password"
              placeholder="Enter password"
              value={data.password}
              onChange={(e) => onChange({ ...data, password: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <input
              type="password"
              placeholder="Confirm password"
              value={data.confirmPassword}
              onChange={(e) => onChange({ ...data, confirmPassword: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          {data.password && data.confirmPassword && data.password !== data.confirmPassword && (
            <p className="text-xs text-red-600 mt-1">Passwords do not match</p>
          )}
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
            onClick={onSubmit}
            disabled={!isValid}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-6 text-base font-semibold rounded-lg disabled:opacity-50"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
