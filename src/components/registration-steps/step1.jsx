"use client"

export default function Step1({ data, onChange, onNext, onBack }) {
  const isValid = data.fullName && data.phone && data.dob && data.gender

  return (
    <div className="p-8 border-2 border-gray-300 rounded-2xl bg-white">
      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Full name</label>
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
              placeholder="Enter your full name"
              value={data.fullName}
              onChange={(e) => onChange({ ...data, fullName: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Phone</label>
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 00-.684.949v.028c.005.049.002.097 0 .147a7 7 0 1113.738 1.684A1 1 0 0021 12a9 9 0 01-9 9h-.5a.5.5 0 00-.5.5v.5a2 2 0 01-2 2 2 2 0 01-2-2v-.444a2 2 0 00-2-2H5a2 2 0 01-2-2v-1"
              />
            </svg>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={data.phone}
              onChange={(e) => onChange({ ...data, phone: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">DoB</label>
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <input
              type="date"
              value={data.dob}
              onChange={(e) => onChange({ ...data, dob: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-gray-700 font-medium mb-3">Gender</label>
          <div className="flex gap-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={data.gender === "male"}
                onChange={(e) => onChange({ ...data, gender: e.target.value })}
                className="w-4 h-4 text-red-600 cursor-pointer"
              />
              <span className="text-gray-700">Male</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={data.gender === "female"}
                onChange={(e) => onChange({ ...data, gender: e.target.value })}
                className="w-4 h-4 text-red-600 cursor-pointer"
              />
              <span className="text-gray-700">Female</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="others"
                checked={data.gender === "others"}
                onChange={(e) => onChange({ ...data, gender: e.target.value })}
                className="w-4 h-4 text-red-600 cursor-pointer"
              />
              <span className="text-gray-700">Others</span>
            </label>
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
