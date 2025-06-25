"use client"

import Header from "./components/header"
import HeroSection from "./components/hero-section"
import WhatIsSection from "./components/what-is-section"
import FlavorsSection from "./components/flavors-section"
import HowToEatSection from "./components/how-to-eat-section"
import AboutSection from "./components/about-section"
import Footer from "./components/footer"

export default function App() {
  return (
    <div className="min-h-screen font-inika">
      <Header />
      <HeroSection />
      <WhatIsSection />
      <FlavorsSection />
      <HowToEatSection />
      <AboutSection />
      <Footer />
    </div>
  )
}
