import { Fragment } from "react"
import { Shield } from "lucide-react"

export default function RegistrationHeader({ currentStep }) {
  return (
    <div className="mb-12 text-center">
      <div className="mb-6 flex justify-center">
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full">
          <Shield className="w-5 h-5 text-white" />
        </div>
      </div>

      <h1 className="mb-2 text-3xl font-bold text-red-600">Register</h1>
      <p className="mb-8 text-gray-500">Welcome</p>

      {/* Step Indicator */}
      <div className="mb-8 flex items-center justify-center gap-2">
        {[1, 2, 3, 4].map((step) => (
          <Fragment key={step}>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                step < currentStep
                  ? "bg-red-600 text-white"
                  : step === currentStep
                    ? "bg-red-600 text-white"
                    : "border-2 border-red-600 text-red-600"
              }`}
            >
              {step < currentStep ? "✓" : step}
            </div>
            {step < 4 && <div className={`h-1 w-8 ${step < currentStep ? "bg-red-600" : "bg-gray-300"}`}></div>}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
