"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Instagram, MenuIcon, XIcon, ChevronDown, ChevronUp } from "lucide-react"

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

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSocialsMenuOpen, setIsSocialsMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const toggleSocialsMenu = () => setIsSocialsMenuOpen(!isSocialsMenuOpen)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsSocialsMenuOpen(false)
  }

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/crackdupfoods", Icon: Instagram },
    { name: "TikTok", href: "https://tiktok.com/@crackdupfoods", Icon: () => <TikTokIcon size={18} /> },
  ]

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-8 py-6 bg-[#FFF7D5] border-b-2 border-[#341515] sticky top-0 z-50">
        <div className="flex items-center space-x-12">
          <Image src="/logo-brown.png" alt="Crack'd Up Logo" width={180} height={60} className="h-12 sm:h-16 w-auto" />
          <nav className="hidden md:flex space-x-8">
            <Link href="#flavors" className="text-[#341514] text-lg font-medium hover:text-[#f2b41c] transition-colors">
              Flavors
            </Link>
            <Link href="#about" className="text-[#341514] text-lg font-medium hover:text-[#f2b41c] transition-colors">
              About Us
            </Link>
          </nav>
        </div>
        <Button className="hidden md:flex bg-[#f2b41c] hover:bg-[#e6a617] text-[#341514] font-semibold px-8 py-3 rounded-full text-lg shadow-lg items-center justify-center">
          Try Now
        </Button>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-[#341514] p-2">
            {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[88px] bg-[#FFF7D5] z-40 p-8 space-y-6 overflow-y-auto">
          <Link
            href="#flavors"
            onClick={closeMobileMenu}
            className="block text-[#341514] text-xl font-medium hover:text-[#f2b41c] transition-colors py-2"
          >
            Flavors
          </Link>
          <Link
            href="#about"
            onClick={closeMobileMenu}
            className="block text-[#341514] text-xl font-medium hover:text-[#f2b41c] transition-colors py-2"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            onClick={closeMobileMenu}
            className="block text-[#341514] text-xl font-medium hover:text-[#f2b41c] transition-colors py-2"
          >
            Send Us A Message
          </Link>
          <div>
            <button
              onClick={toggleSocialsMenu}
              className="flex items-center justify-between w-full text-[#341514] text-xl font-medium hover:text-[#f2b41c] transition-colors py-2"
            >
              Socials
              {isSocialsMenuOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
            {isSocialsMenuOpen && (
              <div className="pl-4 mt-2 space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3 text-[#341514] text-lg hover:text-[#f2b41c] transition-colors py-1"
                  >
                    <social.Icon />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href="https://forms.gle/your-google-form-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="block bg-[#f2b41c] hover:bg-[#e6a617] text-[#341514] text-center font-semibold px-8 py-4 rounded-full text-xl shadow-lg"
          >
            Order Now
          </a>
        </div>
      )}
    </>
  )
}
