export default function RegistrationHeader({ currentStep }) {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2m0 0l4-4m-4 4l-4-4m4 4v6m0 0v2m0-2v-2m0 2h2m-2 0h-2"
            />
          </svg>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-red-600 mb-2">Register</h1>
      <p className="text-gray-500 mb-8">Welcome</p>

      {/* Step Indicator */}
      <div className="flex justify-center items-center gap-2 mb-8">
        {[1, 2, 3, 4].map((step) => (
          <div key={step}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step < currentStep
                  ? "bg-red-600 text-white"
                  : step === currentStep
                    ? "bg-red-600 text-white"
                    : "border-2 border-red-600 text-red-600"
              }`}
            >
              {step < currentStep ? "✓" : step}
            </div>
            {step < 4 && <div className={`w-8 h-1 ${step < currentStep ? "bg-red-600" : "bg-gray-300"}`}></div>}
          </div>
        ))}
      </div>
    </div>
  )
}
