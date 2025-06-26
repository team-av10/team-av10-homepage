'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { MenuIcon, X } from 'lucide-react'
import { useOutsideClick } from '@/hooks/use-outside-click'

type Props = {}

const Navbar = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useOutsideClick(() => setIsMobileMenuOpen(false))

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
        <aside className="flex items-center gap-[2px]">
          {/* <p className="text-3xl font-bold">AV10</p> */}
          <Link href="/" onClick={closeMobileMenu}>
            <Image
              src="/av10-logo.png"
              width={80}
              height={80}
              alt="AV10"
              className="shadow-sm"
            />
          </Link>
        </aside>
        
        <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
          <ul className="flex items-center gap-4 list-none">
            <li>
              <Link href="/">English</Link>
            </li>
            <li>
              <Link href="/hi">हिन्दी</Link>
            </li>
            <li>
              <Link href="/ta">தமிழ்</Link>
            </li>
            <li>
              <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition-colors">Blog</Link>
            </li>
          </ul>
        </nav>
        
        <aside className="flex items-center gap-4">
          <Link
            href="https://dashboard.av10.co.in"
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Dashboard
            </span>
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </aside>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99] md:hidden">
          <div 
            ref={mobileMenuRef}
            className="fixed top-0 right-0 h-full w-64 bg-slate-900/95 backdrop-blur-lg border-l border-neutral-800 transform transition-transform duration-300 ease-in-out"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-800">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-white hover:text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <nav className="flex-1 p-6">
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="/"
                      onClick={closeMobileMenu}
                      className="block text-lg text-white hover:text-purple-400 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2"
                    >
                      English
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hi"
                      onClick={closeMobileMenu}
                      className="block text-lg text-white hover:text-purple-400 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2"
                    >
                      हिन्दी
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ta"
                      onClick={closeMobileMenu}
                      className="block text-lg text-white hover:text-purple-400 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2"
                    >
                      தமிழ்
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      onClick={closeMobileMenu}
                      className="block text-lg text-purple-400 hover:text-purple-300 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-neutral-800">
                <Link
                  href="https://dashboard.av10.co.in"
                  onClick={closeMobileMenu}
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                    Dashboard
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar