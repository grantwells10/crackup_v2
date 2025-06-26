"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function FlavorsSection() {
  return (
    <section id="flavors" className="px-8 py-24 bg-[#FFF7D5] lg:scroll-mt-11 scroll-mt-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-bold text-[#341514] text-center mb-16">The Flavors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Coming Soon - Left */}
          <div className="text-center order-2 md:order-1">
            <div
              className="rounded-2xl p-8 mb-6 h-80 flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: "#C07029" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-yellow-200/20 rounded-full blur-2xl scale-150"></div>
                <Image
                  src="/product-blurred-1.png"
                  alt="Coming Soon Flavor"
                  width={250}
                  height={375}
                  className="opacity-60 relative z-10"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.3))",
                  }}
                />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-[#341514] mb-3">Coming Soon</h3>
            <p className="text-[#341514] text-lg mb-4">Message us to be the first to try</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="cursor-pointer"
              >
                <Mail className="w-12 h-12 text-[#341514] hover:text-[#f2b41c] transition-colors" />
              </button>
              <a
                href="https://instagram.com/eatcrackdup"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <Image src="/instagram.svg" alt="Instagram" width={48} height={48} className="w-12 h-12" />
              </a>
            </div>
          </div>

          {/* Buttermilk - Center */}
          <div className="text-center order-1 md:order-2">
            <div className="bg-[#FFE196] rounded-2xl p-8 mb-6 h-80 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl scale-150"></div>
                <Image
                  src="/product-main-transparent.png"
                  alt="Buttermilk Flavor"
                  width={250}
                  height={375}
                  className="transform hover:scale-105 transition-transform duration-300 relative z-10"
                  style={{
                    filter: "drop-shadow(0 0 40px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.4))",
                  }}
                />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-[#341514] mb-3">Buttermilk</h3>
            <p className="text-[#341514] text-lg mb-2">Sweet like candy, smooth like butter.</p>
            <p className="text-[#341514] text-lg mb-6">
              Tastes like a stack of buttermilk pancakes
              <br />
              -- but still eggs
            </p>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScMaWzO7vhZP0LOXSN2OaopSaE4nHFOfuajGIS80Irz19sefQ/viewform" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#f2b41c] hover:bg-[#e6a617] text-[#341514] font-bold px-8 py-3 rounded-full text-lg shadow-lg text-white">
                Try Now!
              </Button>
            </Link>
          </div>

          {/* Coming Soon - Right */}
          <div className="text-center order-3 md:order-3">
            <div
              className="rounded-2xl p-8 mb-6 h-80 flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: "#C95C5A" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-red-200/20 rounded-full blur-2xl scale-150"></div>
                <Image
                  src="/product-blurred-2.png"
                  alt="Coming Soon Flavor"
                  width={250}
                  height={375}
                  className="opacity-60 relative z-10"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.3))",
                  }}
                />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-[#341514] mb-3">Coming Soon</h3>
            <p className="text-[#341514] text-lg mb-4">Message us to be the first to try</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="cursor-pointer"
              >
                <Mail className="w-12 h-12 text-[#341514] hover:text-[#f2b41c] transition-colors" />
              </button>
              <a
                href="https://instagram.com/eatcrackdup"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <Image src="/instagram.svg" alt="Instagram" width={48} height={48} className="w-12 h-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
