'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function InquiryForm() {
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    mobile: '',
    purpose: '',
    depth: '',
    budget: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `
*New Inquiry — NGE Drillsol Website*

Name: ${formData.name}
Country: ${formData.country}
Mobile: ${formData.mobile}
Purpose: ${formData.purpose}
Required Depth: ${formData.depth || 'Not specified'}
Budget: ${formData.budget || 'Not specified'}
Message: ${formData.message || 'No message'}
    `

    const phoneNumber = '919106360907'

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      '_blank'
    )
  }

  return (
    <form
  onSubmit={(e) => {
  e.preventDefault()

  if (step < 3) {
    setStep(step + 1)
    return
  }

  handleSubmit(e)
}}
  className="bg-[#141414] border border-[#1E1E1E] rounded-xl overflow-hidden"
>
      {/* Steps */}
      <div className="grid grid-cols-3 border-b border-[#1E1E1E] text-center">
        <div
          className={`py-4 text-sm ${
            step === 1 ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-500'
          }`}
        >
          1 Contact
        </div>

        <div
          className={`py-4 text-sm ${
            step === 2 ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-500'
          }`}
        >
          2 Purpose
        </div>

        <div
          className={`py-4 text-sm ${
            step === 3 ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-500'
          }`}
        >
          3 Details
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* STEP 1 */}
        {step === 1 && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] p-4 text-white"
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] p-4 text-white"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="WhatsApp / Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] p-4 text-white"
            />
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] p-4 text-white"
            >
              <option value="">Select Purpose</option>
              <option>Waterwell</option>
              <option>DTH Drilling</option>
              <option>Core Drilling</option>
              <option>Piling</option>
              <option>Mining</option>
              <option>Workover</option>
            </select>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <input
              type="text"
              name="depth"
              placeholder="Required Depth (Optional)"
              value={formData.depth}
              onChange={handleChange}
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] p-4 text-white"
            />

            <input
              type="text"
              name="budget"
              placeholder="Budget (Optional)"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] p-4 text-white"
            />

            <textarea
              name="message"
              placeholder="Additional Details"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] p-4 text-white"
            />
          </>
        )}

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-5 py-3 border border-[#2A2A2A] text-white flex items-center gap-2"
            >
              <ChevronLeft size={18} />
              Back
            </button>
          )}

          {step < 3 ? (
            <button
type="submit"
              className="flex-1 bg-yellow-500 text-black font-semibold py-3 flex justify-center items-center gap-2"
            >
              Continue
              <ChevronRight size={18} />
            </button>
          ) : (
            <button
              type="submit"
              className="flex-1 bg-yellow-500 text-black font-semibold py-3"
            >
              Send via WhatsApp
            </button>
          )}
        </div>

        <p className="text-center text-gray-500 text-sm">
          Your inquiry opens directly in WhatsApp for fastest response
        </p>
      </div>
    </form>
  )
}