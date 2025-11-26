"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span style={{ color: '#606060' }}>SUPRAK</span>
              <span style={{ color: '#fcee21' }}> TECHNOLOGIES</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-[#fcee21] transition-colors"
              style={{ color: '#606060' }}
            >
              HOME
            </Link>

            <div className="relative group">
              <Link
                href="/about"
                className="text-sm font-medium hover:text-[#fcee21] transition-colors"
                style={{ color: '#606060' }}
              >
                ABOUT US
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/about/company" className="block px-6 py-3 text-sm hover:bg-[#fcee21]/10 transition-colors" style={{ color: '#606060' }}>
                  Company
                </Link>
                <Link href="/about/director-message" className="block px-6 py-3 text-sm hover:bg-[#fcee21]/10 transition-colors" style={{ color: '#606060' }}>
                  Director Message
                </Link>
              </div>
            </div>

            <div className="relative group">
              <Link
                href="/products"
                className="text-sm font-medium hover:text-[#fcee21] transition-colors"
                style={{ color: '#606060' }}
              >
                PRODUCTS
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/products/cobots" className="block px-6 py-3 text-sm hover:bg-[#fcee21]/10 transition-colors" style={{ color: '#606060' }}>
                  Cobots
                </Link>
                <Link href="/products/imm-traverse-robot" className="block px-6 py-3 text-sm hover:bg-[#fcee21]/10 transition-colors" style={{ color: '#606060' }}>
                  IMM Traverse Robot
                </Link>
                <Link href="/products/iml" className="block px-6 py-3 text-sm hover:bg-[#fcee21]/10 transition-colors" style={{ color: '#606060' }}>
                  IML
                </Link>
                <Link href="/products/eoat-conveyors" className="block px-6 py-3 text-sm hover:bg-[#fcee21]/10 transition-colors" style={{ color: '#606060' }}>
                  EOAT & Conveyors
                </Link>
              </div>
            </div>

            <div className="relative group">
              <Link
                href="/solutions"
                className="text-sm font-medium hover:text-[#fcee21] transition-colors"
                style={{ color: '#606060' }}
              >
                SOLUTIONS
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/solutions/robotic-automations" className="block px-6 py-3 text-sm hover:bg-[#fcee21]/10 transition-colors" style={{ color: '#606060' }}>
                  Robotic Automations
                </Link>
                <Link href="/solutions/special-purpose-machines" className="block px-6 py-3 text-sm hover:bg-[#fcee21]/10 transition-colors" style={{ color: '#606060' }}>
                  Special Purpose Machines
                </Link>
                <Link href="/solutions/vision-inspection-systems" className="block px-6 py-3 text-sm hover:bg-[#fcee21]/10 transition-colors" style={{ color: '#606060' }}>
                  Vision Inspection Systems
                </Link>
                <Link href="/solutions/iiot-traceability" className="block px-6 py-3 text-sm hover:bg-[#fcee21]/10 transition-colors" style={{ color: '#606060' }}>
                  IIoT & Traceability
                </Link>
                <Link href="/solutions/factory-automation-systems" className="block px-6 py-3 text-sm hover:bg-[#fcee21]/10 transition-colors" style={{ color: '#606060' }}>
                  Factory Automation Systems
                </Link>
              </div>
            </div>

            <Link
              href="/clients"
              className="text-sm font-medium hover:text-[#fcee21] transition-colors"
              style={{ color: '#606060' }}
            >
              CLIENTS
            </Link>

            <Link
              href="/careers"
              className="text-sm font-medium hover:text-[#fcee21] transition-colors"
              style={{ color: '#606060' }}
            >
              CAREERS
            </Link>

            <Link
              href="/blogs"
              className="text-sm font-medium hover:text-[#fcee21] transition-colors"
              style={{ color: '#606060' }}
            >
              BLOGS
            </Link>

            <Link
              href="/contact"
              className="px-6 py-2 text-sm font-medium bg-[#fcee21] hover:bg-[#e0d51e] transition-colors"
              style={{ color: '#606060' }}
            >
              CONTACT US
            </Link>
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-[#606060] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-[#606060] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-[#606060] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium hover:text-[#fcee21]" style={{ color: '#606060' }}>
                HOME
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-[#fcee21]" style={{ color: '#606060' }}>
                ABOUT US
              </Link>
              <Link href="/products" className="text-sm font-medium hover:text-[#fcee21]" style={{ color: '#606060' }}>
                PRODUCTS
              </Link>
              <Link href="/solutions" className="text-sm font-medium hover:text-[#fcee21]" style={{ color: '#606060' }}>
                SOLUTIONS
              </Link>
              <Link href="/clients" className="text-sm font-medium hover:text-[#fcee21]" style={{ color: '#606060' }}>
                CLIENTS
              </Link>
              <Link href="/careers" className="text-sm font-medium hover:text-[#fcee21]" style={{ color: '#606060' }}>
                CAREERS
              </Link>
              <Link href="/blogs" className="text-sm font-medium hover:text-[#fcee21]" style={{ color: '#606060' }}>
                BLOGS
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-[#fcee21]" style={{ color: '#606060' }}>
                CONTACT US
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
