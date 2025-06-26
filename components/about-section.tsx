import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="px-8 py-24 bg-[#FFF7D5] lg:scroll-mt-14 scroll-mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <Image
              src="/founders-photo.png"
              alt="Aiden & Nik - Founders of Crack'd Up"
              width={500}
              height={500}
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-5xl font-bold text-[#341514] mb-4">About Us</h2>
              <p className="text-3xl text-[#f2b41c] font-medium">Aiden & Nik</p>
            </div>
            <p className="text-xl text-[#341514] leading-relaxed">
              Born from two best friends who are always cracking up, Crack'd Up started in our college kitchen when we
              couldn't find a breakfast that was quick, healthy, and actually tasted good. So we made our own. Combining
              real ingredients with whole eggs to create classic yet bold flavors that are easy to cook and impossible
              to forget. From late-night snacks to early-morning scrambles, we're building something that brings the fun
              and flavor back to eggs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
