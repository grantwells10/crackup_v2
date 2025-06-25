import Image from "next/image"

export default function WhatIsSection() {
  return (
    <section className="px-8 py-24 bg-gradient-to-b from-[#FFE196] from-5% to-[#FFF7D5] to-15%">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        <div className="lg:w-1/3">
          <h3 className="text-4xl lg:text-5xl font-bold text-[#341514] mb-4">What is</h3>
          <Image src="/logo-brown-final.png" alt="Crack'd Up Logo" width={280} height={120} className="h-20 w-auto" />
        </div>
        <div className="lg:w-2/3">
          <p className="text-xl text-[#341514] leading-relaxed">
            <span className="font-bold">The first line of flavor-infused whole liquid eggs.</span> We take real, whole
            eggs and mix them with bold, breakfast-inspired flavors. The convenience and nutrition of eggs, now with
            real flavor.
          </p>
        </div>
      </div>
    </section>
  )
}
