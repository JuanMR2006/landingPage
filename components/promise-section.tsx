import Image from "next/image"
import { Clock, Palette, Users, Sparkles } from "lucide-react"

const features = [
  { icon: Clock, label: "ON TIME", sublabel: "DELIVERY" },
  { icon: Palette, label: "5100+", sublabel: "DESIGNS" },
  { icon: Users, label: "2 CR+", sublabel: "ORDERS" },
  { icon: Sparkles, label: "BAKED", sublabel: "FRESH" },
]

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/primeraarribaizquierda-bQUHCLcFygiZ3YE53k0CQKhzHf19Z8.jpeg",
    alt: "Elegant white and gold cake",
    label: "Royaalla",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/primeraarribaderecha-VfDCmEOb87xH7iEqqKKXF3AVrU1aTN.jpeg",
    alt: "Girl with chocolate cake",
    label: "Raiasbi",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/primeramedioizquierda-n3hHnob3U3uxt4QUg8JaI3tOjvvvHN.jpeg",
    alt: "Birthday celebration cake",
    label: "Ishta Missudo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/segundamedioderecha-RwJIU8TzpzR6k9bT3t3GSC5YIqtCVr.jpeg",
    alt: "Chefs decorating cake",
    label: "Chestda colsegnoi",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/primeramedioizquierda-n3hHnob3U3uxt4QUg8JaI3tOjvvvHN.jpeg",
    alt: "Special cake creation",
    label: "Steagi oby",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/terceraabajoderecha-eqO2pQqNhzI45yqQKEW9QFWmwSTuVF.jpeg",
    alt: "Unique cake creations",
    label: "GENIRA Court unique creations",
  },
]

const socialAvatars = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cara1.jpeg-VMjls2Sv0zpk3axMYJwu3e4hAL6z1i.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cara2.jpeg-41oRw489zoq4CRiRGFfE60gMHp0mMd.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cara3.jpeg-TXF2GZjhJspUgATGXjCHpoHLSKWuO9.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cara4.jpeg-oNPNJy32MuCI5GuZEH4UpMBujLREqv.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cara5.jpeg-JVC60NleqdbnjvHWh5JVPYlzofvjHu.webp",
]

export default function PromiseSection() {
  return (
    <section className="py-8">
      <div>
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#a83032] mb-2">Our Promise</h2>
        <p className="text-[#a83032]/70 mb-6">{"There's no secret spell – only honest the wark!"}</p>

        <div className="flex gap-6">
          {/* Left Column */}
          <div className="w-80 flex flex-col gap-4">
            {/* Features Box */}
            <div className="bg-[#fef9f5] rounded-2xl p-4">
              <p className="text-sm text-[#a83032] mb-4">{"A glimpse into secret spell – only hocial world!"}</p>
              <div className="flex justify-between">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-1">
                      <feature.icon className="w-5 h-5 text-[#a83032]" />
                    </div>
                    <span className="text-xs font-bold text-[#a83032]">{feature.label}</span>
                    <span className="text-[10px] text-[#a83032]/60">{feature.sublabel}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Magical Ticket Box - with image on left */}
            <div className="bg-[#fef9f5] rounded-2xl p-4 flex items-center gap-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagenticketizquierda-OGOJBjg6Uvm40T1yWQbuLflcsBjNcx.jpeg"
                  alt="Magical Ticket"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#a83032] text-lg">THE MAGICAL TICKET</h3>
                <p className="text-sm text-[#a83032]/70 mb-2">
                  Add 3 reminders in your account.<br />
                  Win offers worth Rs. 750
                </p>
                <button className="bg-[#a83032] text-white px-4 py-2 rounded-full text-sm font-medium">
                  UNLOCK NOW
                </button>
              </div>
            </div>

            {/* Social Follow Box - with real avatars */}
            <div className="bg-[#fef9f5] rounded-2xl p-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                {socialAvatars.map((avatar, index) => (
                  <div key={index} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image 
                      src={avatar} 
                      alt="User avatar" 
                      width={40} 
                      height={40} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-[#a83032]">Follow us on social!</span>
            </div>
          </div>

          {/* Right Column - Image Gallery 2x3 */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden h-48">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                {image.label && (
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-sm font-medium drop-shadow-lg">{image.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
