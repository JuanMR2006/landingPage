import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Banner */}
      <div className="bg-[#a83032] py-4 mx-4 rounded-full mb-6">
        <div className="container mx-auto px-4">
          <p className="text-white text-center text-lg font-medium">
            Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
          </p>
        </div>
      </div>

      {/* Footer content */}
      <div className="bg-[#fdefee] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between gap-8">
            {/* Logo and links */}
            <div>
              <h2 className="text-2xl font-bold text-[#a83032] mb-4">Dakingo</h2>
              <ul className="space-y-2 text-sm text-[#a83032]">
                <li><Link href="/our-story" className="hover:text-[#8a2729]">Our Story</Link></li>
                <li><Link href="/contact" className="hover:text-[#8a2729]">Contact Us</Link></li>
                <li><Link href="/locate" className="hover:text-[#8a2729]">Locate Visits</Link></li>
                <li><Link href="/media" className="hover:text-[#8a2729]">Media</Link></li>
                <li><Link href="/careers" className="hover:text-[#8a2729]">Careers</Link></li>
              </ul>
            </div>

            {/* Know Us */}
            <div>
              <h3 className="font-bold text-[#a83032] mb-4">KNOW US</h3>
              <ul className="space-y-2 text-sm text-[#a83032]">
                <li><Link href="/contact" className="hover:text-[#8a2729]">Contact Us</Link></li>
                <li><Link href="/blog" className="hover:text-[#8a2729]">Blog</Link></li>
              </ul>
            </div>

            {/* Need Help */}
            <div>
              <h3 className="font-bold text-[#a83032] mb-4">NEED HELP</h3>
              <ul className="space-y-2 text-sm text-[#a83032]">
                <li><Link href="/cancellation" className="hover:text-[#8a2729]">Cancellation And Refund</Link></li>
                <li><Link href="/privacy" className="hover:text-[#8a2729]">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* More Info */}
            <div>
              <h3 className="font-bold text-[#a83032] mb-4">MORE INFO</h3>
              <ul className="space-y-2 text-sm text-[#a83032]">
                <li><Link href="/terms" className="hover:text-[#8a2729]">Terms And Grilly</Link></li>
                <li><Link href="/customer" className="hover:text-[#8a2729]">Customer Grievance</Link></li>
              </ul>
            </div>

            {/* More Info 2 */}
            <div>
              <h3 className="font-bold text-[#a83032] mb-4">MORE INFO</h3>
              <ul className="space-y-2 text-sm text-[#a83032]">
                <li><Link href="/coupons" className="hover:text-[#8a2729]">Coupons & Offers</Link></li>
                <li><Link href="/download" className="hover:text-[#8a2729]">Download App</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter and Help */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#f5e0de]">
            {/* Newsletter */}
            <div className="flex items-center gap-2">
              <Input 
                type="email" 
                placeholder="Enter Email Address" 
                className="w-64 bg-white border-[#f5e0de] rounded-full"
              />
              <Button className="bg-[#a83032] hover:bg-[#8a2729] text-white rounded-md px-6">
                SUBSCRIBE
              </Button>
            </div>

            {/* Help button */}
            <div className="flex items-center gap-2 text-[#a83032]">
              <HelpCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Hey, need any help?</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
