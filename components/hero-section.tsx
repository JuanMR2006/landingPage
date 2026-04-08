import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient with decorative bubbles */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#a83032] via-[#c45a5c] to-[#e8a3a4]">
        {/* Decorative white bubbles */}
        <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-white/20"></div>
        <div className="absolute top-20 left-24 w-8 h-8 rounded-full bg-white/15"></div>
        <div className="absolute top-32 left-4 w-12 h-12 rounded-full bg-white/10"></div>
        <div className="absolute top-4 left-40 w-6 h-6 rounded-full bg-white/20"></div>
        
        <div className="absolute bottom-20 left-16 w-20 h-20 rounded-full bg-white/15"></div>
        <div className="absolute bottom-8 left-40 w-10 h-10 rounded-full bg-white/10"></div>
        <div className="absolute bottom-32 left-8 w-6 h-6 rounded-full bg-white/20"></div>
        
        <div className="absolute top-16 right-20 w-14 h-14 rounded-full bg-white/10"></div>
        <div className="absolute top-40 right-8 w-8 h-8 rounded-full bg-white/15"></div>
        <div className="absolute bottom-16 right-32 w-12 h-12 rounded-full bg-white/10"></div>
        <div className="absolute bottom-40 right-16 w-6 h-6 rounded-full bg-white/20"></div>
        
        {/* Larger decorative bubbles */}
        <div className="absolute top-1/4 left-1/3 w-24 h-24 rounded-full bg-white/5"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-white/5"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-between">
          {/* Left - Main cake image in circle with white border */}
          <div className="flex-shrink-0">
            <div className="relative w-72 h-72 rounded-full border-8 border-white overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_v12dcwv12dcwv12d-EFmTJUVnRGqXHwcIbVqz3Dl5BMLN17.png"
                alt="Decadent Chocolate Cake with berries"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Center - Text content aligned left */}
          <div className="flex-1 px-8">
            <div>
              <h2 className="text-5xl font-bold text-white leading-tight mb-2 drop-shadow-lg">
                DECADENT<br />
                CHOCOLATE<br />
                BLISS!
              </h2>
              <p className="text-white/90 text-lg mb-6 italic drop-shadow-md">
                Satify Your Sweest Cravings
              </p>
            </div>
            
            <div className="inline-block bg-[#3D1E1E] rounded-full px-6 py-2 mt-4">
              <p className="text-white text-xs">Special Offer!</p>
              <p className="text-white font-bold text-xl">SAVE 20%</p>
            </div>
          </div>

          {/* Right - Small cake images in circles with white border - BIGGER and CENTERED */}
          <div className="flex flex-col gap-6 items-center mr-8">
            <div className="w-44 h-44 rounded-full border-6 border-white overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5ac60a04-0742-4b5f-a8c6-d1520b596ed7-03vLfiTM7gEjJCBdyWdK7noVMSZXuG.jpeg"
                alt="Chocolate Lava Cake"
                width={176}
                height={176}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-44 h-44 rounded-full border-6 border-white overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5b296163-845c-40bf-a2ea-a995abc40b74-osDUajn0Cni8nLY2EbmDG5zRN5abM2.jpeg"
                alt="Chocolate Brownie Cake"
                width={176}
                height={176}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
