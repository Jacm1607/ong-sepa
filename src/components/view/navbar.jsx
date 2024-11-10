"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "./button"
import { Menu, X } from "lucide-react"

const scrollbarHideClass = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/project", label: "Proyectos" },
  { href: "/contact", label: "Contacto" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <style>{scrollbarHideClass}</style>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 text-white">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Fundación SEPA
            </Link>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-2xl py-4 hover:text-gray-300 transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}