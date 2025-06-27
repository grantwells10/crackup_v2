import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="px-8 pt-12 pb-32 bg-[#FFE196] min-h-[calc(80vh-88px)]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-3/5 mb-12 lg:mb-0 lg:pr-2 lg:-mr-16">
          <div className="mb-8">
            <h1 className="font-gabarito text-5xl lg:text-7xl font-black text-[#341514] leading-tight">
              EGGS FINALLY GOT<br />
              THEIR <span className="cursor-pointer inline-block bg-gradient-to-r from-[#341514] to-[#341514] bg-clip-text text-transparent md:hover:from-[#f2b41c] md:hover:via-[#ffd700] md:hover:to-[#ff6b35] md:hover:bg-[length:200%_100%] md:transition-all md:duration-500 md:hover:[animation:shimmer_1s_ease-in-out_infinite]" style={{ backgroundPosition: '0% 50%' }}>FLAVOR</span>
            </h1>
          </div>
          <div className="text-left">
            <h2 className="font-gabarito text-3xl lg:text-4xl text-[#f2b41c] font-bold mb-8">Break Your Breakfast Dilemma</h2>
            
            {/* Button and "Your first order" layout */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScMaWzO7vhZP0LOXSN2OaopSaE4nHFOfuajGIS80Irz19sefQ/viewform" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#f2b41c] hover:bg-[#e6a617] text-white font-bold px-16 py-6 rounded-full text-2xl shadow-xl md:transform md:hover:scale-105 md:transition-all md:duration-200 mb-4 lg:mb-0">
                  Try Now For Free!
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 flex justify-center lg:justify-center lg:-ml-8">
          <div className="relative scale-105 lg:scale-110">
            <div className="relative">
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl scale-150"></div>
              <Image
                src="/product-main-transparent.png"
                alt="Crack'd Up Buttermilk Whole Eggs"
                width={450}
                height={580}
                className="md:transform md:rotate-[8deg] md:hover:rotate-[4deg] md:transition-transform md:duration-300 relative z-10 hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
