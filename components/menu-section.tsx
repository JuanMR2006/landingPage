"use client"

import { Cake, Gift, IceCream, Cookie } from "lucide-react"

const categories = [
  { name: "CLASSIC", icon: Cake },
  { name: "GOURMET", icon: Gift },
  { name: "DESSERTS", icon: IceCream },
  { name: "COOKIES", icon: Cookie },
]

export default function MenuSection() {
  return (
    <div className="flex items-center justify-between">
      {/* Left side - Menu title and icons */}
      <div>
        <h2 className="text-2xl font-bold text-[#a83032] mb-1">Menu</h2>
        <p className="text-sm text-[#a83032]/70 mb-4">What will you wish for?</p>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-[#fef9f5] flex items-center justify-center">
            <Cake className="w-5 h-5 text-[#a83032]" />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#fef9f5] flex items-center justify-center">
            <Gift className="w-5 h-5 text-[#a83032]" />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#fef9f5] flex items-center justify-center">
            <IceCream className="w-5 h-5 text-[#a83032]" />
          </button>
        </div>
      </div>

      {/* Right side - Category cards */}
      <div className="flex gap-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl border-2 border-[#f5e0de] hover:border-[#a83032] transition-colors bg-white"
          >
            <div className="w-12 h-12 rounded-xl bg-[#fef9f5] flex items-center justify-center mb-2">
              <category.icon className="w-6 h-6 text-[#a83032]" />
            </div>
            <span className="text-xs font-medium text-[#a83032]">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
