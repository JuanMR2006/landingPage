"use client"

import { Search, ShoppingCart, Mic } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navLinks = [
  { name: "Cakes", href: "/cakes" },
  { name: "Theme Cakes", href: "/theme-cakes" },
  { name: "Desserts", href: "/desserts" },
  { name: "Birthday", href: "/birthday" },
  { name: "Hampers", href: "/hampers" },
  { name: "Anniversary", href: "/anniversary" },
  { name: "Occasions", href: "/occasions" },
]

export default function Header() {
  return (
    <header className="w-full bg-[#fdefee]">
      {/* Top bar - Logo left, Search + Login right */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-[#a83032] tracking-tight">
              Dakingo
            </h1>
          </Link>

          {/* Right side - Search + Login */}
          <div className="flex items-center gap-4">
            {/* Search bar */}
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a83032]/60" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-10 pr-10 bg-white border-[#f5e0de] rounded-md h-9"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="w-5 h-5 rounded-full bg-[#a83032] flex items-center justify-center">
                  <Mic className="w-3 h-3 text-white" />
                </div>
              </button>
            </div>

            {/* Cart + Login/Signup */}
            <Link 
              href="/login" 
              className="flex items-center gap-2 text-[#a83032] hover:text-[#8a2729] transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="text-sm font-medium">Login/Signup</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation bar - same background with ORDER NOW */}
      <nav className="bg-[#fdefee]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Nav links */}
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#a83032] text-sm font-medium hover:text-[#8a2729] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ORDER NOW button */}
            <Button 
              className="bg-[#a83032] hover:bg-[#8a2729] text-white rounded-full px-6 font-semibold text-sm"
            >
              ORDER NOW
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
