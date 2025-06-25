import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Mail, Instagram } from "lucide-react"

export default function FlavorsSection() {
  return (
    <section id="flavors" className="px-8 py-24 bg-[#FFF7D5] scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-[#341514] text-center mb-16">The Flavors</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Coming Soon - Left */}
          <div className="text-center">
            <div
              className="rounded-2xl p-8 mb-6 h-80 flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: "#C07029" }}
            >
              <Image
                src="/product-blurred-1.png"
                alt="Coming Soon Flavor"
                width={200}
                height={300}
                className="opacity-60"
              />
            </div>
            <h3 className="text-3xl font-bold text-[#341514] mb-3">Coming Soon</h3>
            <p className="text-[#341514] text-lg mb-4">Message us to be the first to try</p>
            <div className="flex justify-center space-x-4">
              <Mail className="w-8 h-8 text-[#341514] hover:text-[#f2b41c] cursor-pointer transition-colors" />
              <Instagram className="w-8 h-8 text-[#f2b41c] hover:text-[#341514] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Buttermilk - Center */}
          <div className="text-center">
            <div className="bg-[#FFE196] rounded-2xl p-8 mb-6 h-80 flex items-center justify-center">
              <Image
                src="/product-main-transparent.png"
                alt="Buttermilk Flavor"
                width={200}
                height={300}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-3xl font-bold text-[#341514] mb-3">Buttermilk</h3>
            <p className="text-[#341514] text-lg mb-2">Sweet like candy, smooth like butter.</p>
            <p className="text-[#341514] text-lg mb-6">
              Tastes like a stack of buttermilk pancakes
              <br />
              -- but still eggs
            </p>
            <Button className="bg-[#f2b41c] hover:bg-[#e6a617] text-[#341514] font-bold px-8 py-3 rounded-full text-lg shadow-lg">
              Try Now!
            </Button>
          </div>

          {/* Coming Soon - Right */}
          <div className="text-center">
            <div
              className="rounded-2xl p-8 mb-6 h-80 flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: "#C95C5A" }}
            >
              <Image
                src="/product-blurred-2.png"
                alt="Coming Soon Flavor"
                width={200}
                height={300}
                className="opacity-60"
              />
            </div>
            <h3 className="text-3xl font-bold text-[#341514] mb-3">Coming Soon</h3>
            <p className="text-[#341514] text-lg mb-4">Message us to be the first to try</p>
            <div className="flex justify-center space-x-4">
              <Mail className="w-8 h-8 text-[#341514] hover:text-[#f2b41c] cursor-pointer transition-colors" />
              <Instagram className="w-8 h-8 text-[#f2b41c] hover:text-[#341514] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
