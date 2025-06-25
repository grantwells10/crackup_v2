import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="px-8 py-20 bg-[#FFE196] min-h-[calc(80vh-88px)]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-3/5 mb-12 lg:mb-0 lg:pr-12">
          <div className="mb-4">
            <Image
              src="/headline-text.png"
              alt="Eggs Finally Got Their Flavor"
              width={800}
              height={300}
              className="w-full max-w-4xl h-auto"
              priority
            />
          </div>
          <h2 className="text-3xl lg:text-4xl text-[#f2b41c] font-bold mb-4">Break Your Breakfast Dilemma</h2>
          <div className="mb-6">
            <p className="text-[#f2b41c] text-lg font-medium">Your first order</p>
            <p className="text-[#f2b41c] text-lg font-medium">on us :)</p>
          </div>
          <Button className="bg-[#f2b41c] hover:bg-[#e6a617] text-[#341514] font-bold px-10 py-4 rounded-full text-xl shadow-xl transform hover:scale-105 transition-all duration-200">
            Try Now For Free!
          </Button>
        </div>

        <div className="lg:w-2/5 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl scale-125 sm:scale-150"></div>
            <Image
              src="/product-main-transparent.png"
              alt="Crack'd Up Buttermilk Whole Eggs"
              width={400}
              height={500}
              className="transform rotate-[15deg] hover:rotate-[8deg] transition-transform duration-300"
              style={{
                boxShadow: "-25px 4px 4px 0px #00000040",
                filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
