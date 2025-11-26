import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#606060] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-white">SUPRAK</span>
              <span className="text-[#fcee21]"> TECHNOLOGIES</span>
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Purity in Technology
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Specializing in Robotics Automation, Special Purpose Machines, IoT & Traceability, Vision Systems, and Packaging Solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#fcee21]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-[#fcee21] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-gray-300 hover:text-[#fcee21] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-sm text-gray-300 hover:text-[#fcee21] transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-sm text-gray-300 hover:text-[#fcee21] transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-300 hover:text-[#fcee21] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm text-gray-300 hover:text-[#fcee21] transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#fcee21]">Our Locations</h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white mb-1">Nashik Office</p>
                <p className="leading-relaxed">S.No 29 Nr Highschool, Vilholi Shiwar, Vilholi, Nashik 422010</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Pune Office 1</p>
                <p className="leading-relaxed">Plot No 7, Ganesh Nagar, Telco Road, MIDC Bhosari, Pune 411026</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Pune Office 2</p>
                <p className="leading-relaxed">No.16 Highway Towers, Kalbhornagar, Chinchwad, Pune 411019</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#fcee21]">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <span className="font-medium text-white">Phone:</span>
                <div className="mt-1">
                  <a href="tel:02066301188" className="block hover:text-[#fcee21] transition-colors">
                    020 66301188
                  </a>
                  <a href="tel:+919370252525" className="block hover:text-[#fcee21] transition-colors">
                    +91 9370252525
                  </a>
                </div>
              </li>
              <li>
                <span className="font-medium text-white">Email:</span>
                <div className="mt-1">
                  <a href="mailto:sales@supraktechnologies.com" className="block hover:text-[#fcee21] transition-colors">
                    sales@supraktechnologies.com
                  </a>
                  <a href="mailto:info@supraktechnologies.com" className="block hover:text-[#fcee21] transition-colors">
                    info@supraktechnologies.com
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#fcee21] transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#fcee21] transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#fcee21] transition-colors" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#fcee21] transition-colors" aria-label="WhatsApp">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Suprak Technologies. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-[#fcee21] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#fcee21] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
