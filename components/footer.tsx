import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Instagram } from "lucide-react"

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
  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/crackdupfoods" },
    { name: "TikTok", href: "https://tiktok.com/@crackdupfoods" },
  ]

  return (
    <footer id="contact" className="px-8 py-16 bg-[#FFE196] border-t-2 border-[#341514]">
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
                <Instagram className="w-6 h-6 text-white" />
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
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-6 py-4 rounded-full border-2 border-[#341514] bg-transparent text-[#341514] placeholder-[#341514] text-lg focus:outline-none focus:ring-2 focus:ring-[#f2b41c]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 rounded-full border-2 border-[#341514] bg-transparent text-[#341514] placeholder-[#341514] text-lg focus:outline-none focus:ring-2 focus:ring-[#f2b41c]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-full border-2 border-[#341514] bg-transparent text-[#341514] placeholder-[#341514] text-lg focus:outline-none focus:ring-2 focus:ring-[#f2b41c]"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-6 py-4 rounded-3xl border-2 border-[#341514] bg-transparent text-[#341514] placeholder-[#341514] text-lg focus:outline-none focus:ring-2 focus:ring-[#f2b41c] resize-none"
              ></textarea>
              <Button className="bg-[#341514] hover:bg-[#2a1010] text-white font-bold px-12 py-4 rounded-full text-lg shadow-lg">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
