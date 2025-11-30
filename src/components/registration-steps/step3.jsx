"use client"

import { useState } from "react"

export default function Step3({ data, onChange, onNext, onBack }) {
  const [documentPreview, setDocumentPreview] = useState(null)
  const isValid = data.panNumber && data.idDocument

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      onChange({ ...data, idDocument: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setDocumentPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="p-8 border-2 border-gray-300 rounded-2xl bg-white">
      <div className="space-y-6">
        {/* PAN Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">PAN Number</label>
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
              placeholder="Enter PAN number"
              value={data.panNumber}
              onChange={(e) => onChange({ ...data, panNumber: e.target.value.toUpperCase() })}
              maxLength={10}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">*Format: ABCDEI2345</p>
        </div>

        {/* ID Documents */}
        <div>
          <label className="block text-gray-700 font-medium mb-3">Choose ID Documents</label>
          <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition">
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            {documentPreview ? (
              <div className="space-y-2">
                <img
                  src={documentPreview || "/placeholder.svg"}
                  alt="Document preview"
                  className="w-20 h-20 mx-auto object-cover rounded"
                />
                <p className="text-sm text-gray-600">{data.idDocument?.name}</p>
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
          <p className="text-xs text-gray-500 mt-2">*Upload Citizenship, Licence, or any government id (max 5 mb)</p>
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
