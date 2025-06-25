import Image from "next/image"

export default function WhatIsSection() {
  return (
    <section className="px-8 pt-28 pb-12 bg-gradient-to-b from-[#FFE196] from-5% to-[#FFF7D5] to-15%">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-2/5">
          <h3 className="text-5xl lg:text-6xl font-bold text-[#341514] mb-6">What is</h3>
          <Image src="/logo-brown-final.svg" alt="Crack'd Up Logo" width={300} height={100} className="pl-8"/>
        </div>
        <div className="lg:w-3/5">
          <p className="text-2xl lg:text-3xl text-[#341514] leading-relaxed">
            <span className="font-bold">The first line of flavor-infused whole liquid eggs.</span> We take real, whole
            eggs and mix them with bold, breakfast-inspired flavors. The convenience and nutrition of eggs, now with
            real flavor.
          </p>
        </div>
      </div>
    </section>
  )
}
