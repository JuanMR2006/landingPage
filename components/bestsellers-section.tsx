import Image from "next/image"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const bestsellers = [
  {
    id: 1,
    name: "Rich Chocolate Truffle Truffle Cake",
    price: 500,
    originalPrice: null,
    discount: "5% off select",
    rating: 5,
    reviews: 508,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/primeraabajo-2j6n31JT0mYdO503wHbAAQ7bQUKBbK.jpeg",
  },
  {
    id: 2,
    name: "Choco Chip Truffle Cake Cake",
    price: 599,
    originalPrice: null,
    discount: "5% off select",
    rating: 4.5,
    reviews: 506,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/segundaabajo-pw6pKbJg4B5wlhiz0NMYEoWur99xmW.jpeg",
  },
  {
    id: 3,
    name: "Tropical Fruit N Almond Cake Cake",
    price: 509,
    originalPrice: null,
    discount: "5% off select",
    rating: 4,
    reviews: 108,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/terceraabajo-QsfJqutrk8oSsWVJdz1ckuk8abOroF.jpeg",
  },
  {
    id: 4,
    name: "Rich Butterscotch Crunch Carrie Cake",
    price: 399,
    originalPrice: null,
    discount: "Yes/No sale!",
    rating: 3.5,
    reviews: 308,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cuartaabajo-4vBPhJePLwKUUT7M5ydT27W0ZtwTir.jpeg",
  },
]

export default function BestsellersSection() {
  return (
    <section className="py-4">
      <div>
        <h3 className="text-xl font-bold text-[#a83032] mb-6">
          Bestsellers from Across the Country
        </h3>
        
        <div className="flex gap-4 justify-between">
          {bestsellers.map((cake) => (
            <div 
              key={cake.id} 
              className="bg-white rounded-2xl p-3 shadow-sm flex-1 max-w-[220px] relative"
            >
              {/* Heart icon */}
              <button className="absolute top-4 left-4 z-10">
                <Heart className="w-5 h-5 text-[#a83032] fill-[#a83032]/20" />
              </button>
              
              {/* Cake image */}
              <div className="relative w-full aspect-square mb-3 bg-[#fef9f5] rounded-xl overflow-hidden">
                <Image
                  src={cake.image}
                  alt={cake.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Cake info */}
              <h4 className="text-sm font-semibold text-[#a83032] mb-1 line-clamp-2">
                {cake.name}
              </h4>
              
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#a83032] font-bold">₹{cake.price}</span>
                <span className="text-xs text-[#a83032]/60">{cake.discount}</span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < Math.floor(cake.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#a83032]/60">{cake.reviews}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All button */}
        <div className="flex justify-end mt-6">
          <Button className="bg-[#a83032] hover:bg-[#8a2729] text-white rounded-full px-8">
            VIEW ALL
          </Button>
        </div>
      </div>
    </section>
  )
}

