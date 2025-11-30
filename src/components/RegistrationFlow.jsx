"use client"

import { useState } from "react"
import Step1 from "@/components/registration/Step1"
import Step2 from "@/components/registration/Step2"
import Step3 from "@/components/registration/Step3"
import Step4 from "@/components/registration/Step4"
import RegistrationHeader from "@/components/registration/RegistrationHeader"

export default function RegistrationFlow({ role, onBack }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    dob: "",
    gender: "",
    skill: "",
    yearsExperience: "",
    panNumber: "",
    idDocument: null,
    selfie: null,
    password: "",
    confirmPassword: "",
  })

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    } else {
      onBack()
    }
  }

  const handleSubmit = () => {
    console.log("Registration submitted:", { role, ...formData })
    alert("Registration submitted successfully!")
    onBack()
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <RegistrationHeader currentStep={currentStep} />

      <div className="mx-auto max-w-2xl">
        {currentStep === 1 && <Step1 data={formData} onChange={setFormData} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 2 && <Step2 data={formData} onChange={setFormData} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 3 && <Step3 data={formData} onChange={setFormData} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 4 && (
          <Step4 data={formData} onChange={setFormData} onSubmit={handleSubmit} onBack={handleBack} />
        )}
      </div>
    </div>
  )
}
