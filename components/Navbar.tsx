'use client'

import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = ['Home', 'Services', 'About', 'Contact']

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-black">
              Phamily Pharma
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black font-bold px-3 py-2"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="block w-5 h-0.5 bg-black"></span>
              <span className="block w-5 h-0.5 bg-black mt-1.5"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-4 text-black font-bold"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 