import Image from "next/image"

export default function HowToEatSection() {
  return (
    <section className="px-8 py-24 bg-[#FFE196] relative overflow-hidden">
      {/* Wavy background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFE196] to-[#FFF7D5]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Image src="/egg-icon.png" alt="Egg Icon" width={80} height={80} className="mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-[#341514]">How Do I Eat Crack'd Up?</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-xl text-[#341514] leading-relaxed">
              Scramble it up like you normally would, but don't expect normal eggs. In just 3 minutes on the stove,
              you'll have rich, fluffy eggs bursting with bold, unexpected flavor. Put it in a breakfast burrito, on a
              bagel, or eat it straight off the plate.
            </p>
          </div>

          <div className="lg:w-1/2">
            <Image
              src="/steps-combined.png"
              alt="How to eat Crack'd Up - 4 simple steps: Shake, Pour, Cook, Feast"
              width={600}
              height={400}
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
