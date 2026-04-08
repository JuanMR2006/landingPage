import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MenuSection from "@/components/menu-section"
import BestsellersSection from "@/components/bestsellers-section"
import PromiseSection from "@/components/promise-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdefee]">
      <Header />
      <HeroSection />
      
      {/* White rounded container for Menu, Bestsellers, and Promise */}
      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-8">
        <section className="bg-white rounded-3xl shadow-xl">
          <div className="px-6 py-8">
            {/* Menu Section */}
            <MenuSection />
            
            {/* Bestsellers Section */}
            <div className="mt-8">
              <BestsellersSection />
            </div>
            
            {/* Our Promise Section */}
            <div className="mt-8">
              <PromiseSection />
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
