"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CheckCircle, X } from "lucide-react"

const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.83a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.26z"
      fill="#ff0050"
    />
    <path
      d="M17.5 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 20.1a6.34 6.34 0 0 0 10.86-4.43V7.83a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.26z"
      fill="#00f2ea"
    />
  </svg>
)

export default function Footer() {
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult("Sending....")
    
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    formData.append("access_key", "2e87e554-3dbc-4d87-9288-f91009b14c89")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json())

      if (res.success) {
        console.log("Success", res)
        setResult("Message sent successfully!")
        setIsSuccess(true)
        setShowModal(true)
        form.reset() // Clear the form
      } else {
        console.log("Error", res)
        setResult("Failed to send message. Please try again.")
        setIsSuccess(false)
        setShowModal(true)
      }
    } catch (error) {
      console.log("Network error", error)
      setResult("Network error. Please try again.")
      setIsSuccess(false)
      setShowModal(true)
    }
    
    setIsSubmitting(false)
  }

  const closeModal = () => {
    setShowModal(false)
    setResult("")
  }

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/eatcrackdup" },
    { name: "TikTok", href: "https://tiktok.com/@eatcrackdup" },
  ]

  return (
    <footer id="contact" className="px-8 py-16 bg-[#FFE196] border-t-2 border-[#341514] scroll-mt-16 md:scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left side - Logo and Social */}
          <div className="lg:w-1/3">
          <Image src="/logo-brown-final.svg" alt="Crack'd Up Logo" width={300} height={100} className="py-6"/>
            <div className="flex space-x-4">
              <a
                href={socialLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              >
                <Image src="/instagram.svg" alt="Instagram" width={48} height={48} className="w-12 h-12" />
              </a>
              <a
                href={socialLinks[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
              >
                <TikTokIcon size={24} />
              </a>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-bold text-[#341514] mb-8">Talk to the Founders!</h3>
            <form onSubmit={onSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-6 py-4 rounded-full border-2 border-[#341514] bg-transparent text-[#341514] placeholder-[#341514] text-lg focus:outline-none focus:ring-2 focus:ring-[#f2b41c]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-6 py-4 rounded-full border-2 border-[#341514] bg-transparent text-[#341514] placeholder-[#341514] text-lg focus:outline-none focus:ring-2 focus:ring-[#f2b41c]"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-6 py-4 rounded-full border-2 border-[#341514] bg-transparent text-[#341514] placeholder-[#341514] text-lg focus:outline-none focus:ring-2 focus:ring-[#f2b41c]"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                required
                className="w-full px-6 py-4 rounded-3xl border-2 border-[#341514] bg-transparent text-[#341514] placeholder-[#341514] text-lg focus:outline-none focus:ring-2 focus:ring-[#f2b41c] resize-none"
              ></textarea>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-[#341514] hover:bg-[#2a1010] text-white font-bold px-12 py-4 rounded-full text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Success/Error Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative animate-in fade-in duration-200">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            
            <div className="text-center">
              {isSuccess ? (
                <div className="mb-4">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#341514] mb-2">Message Sent!</h3>
                  <p className="text-[#341514]">
                    Thanks for reaching out! We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <div className="mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <X className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#341514] mb-2">Oops!</h3>
                  <p className="text-[#341514]">
                    {result || "Something went wrong. Please try again."}
                  </p>
                </div>
              )}
              
              <Button
                onClick={closeModal}
                className="bg-[#f2b41c] hover:bg-[#e6a617] text-white font-bold px-8 py-3 rounded-full"
              >
                {isSuccess ? "Awesome!" : "Try Again"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
