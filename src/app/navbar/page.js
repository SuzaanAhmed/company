"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-[#0891b2] flex flex-col md:flex-row px-4 py-2 gap-4 md:gap-6 justify-between items-center text-lg">
        <div className="flex flex-row gap-5 items-center lg:ml-35 md:ml-20">
          <img src="instagram.png" alt="Instagram" className="h-5 w-5" />
          <img src="facebook.png" alt="Facebook" className="h-5 w-5" />
          <img src="linkedin.png" alt="LinkedIn" className="h-5 w-5" />
        </div>

        <div className="flex flex-row gap-4 text-black text-base text-md items-center mr-0 md:mr-20">
          <span>+91 1234567890</span>
          <span className="text-xl">|</span>
          <span>myEmail@subdomain.domain</span>
        </div>
      </header>

      <div className="bg-white p-2 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="ml-35 h-30 w-35" />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black text-3xl mr-5"
          >
            ☰
          </button>

          <nav className="hidden md:block">
            <ul className="flex gap-6 text-sm font-semibold text-black mr-50">
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="p-4 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#0891b2] after:transition-all after:duration-300 hover:text-[#0891b2] hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/Call"
                  className="bg-[#0891b2] hover:bg-red-500 text-white px-6 py-4 text-sm rounded-full transition-colors"
                >
                  Call Us Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {menuOpen && (
          <nav className="md:hidden mt-2">
            <ul className="flex flex-col gap-2 text-sm font-semibold text-black">
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block p-3 hover:bg-[#0891b2] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/Call"
                  className="block bg-[#0891b2] hover:bg-red-500 text-white text-center px-6 py-3 text-sm rounded-full transition-colors"
                >
                  Call Us Now
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
