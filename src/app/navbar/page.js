"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    {
      label: "Services",
      dropdown: [
        { label: "Service 1", href: "/services/1" },
        { label: "Service 2", href: "/services/2" },
        { label: "Service 3", href: "/services/3" },
        { label: "Service 4", href: "/services/4" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const navLinkClass =
    "p-4 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#0891b2] after:transition-all after:duration-300 after:origin-center hover:text-[#0891b2] hover:after:w-full";

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
          <img src="logo.png" alt="Logo" className="ml-35 h-30 w-35" />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black text-3xl mr-5"
          >
            ☰
          </button>

          <nav className="hidden md:flex mr-10">
            <ul className="flex items-center gap-6 text-sm font-semibold text-black relative mr-40">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <li key={index} className="relative">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={navLinkClass}
                    >
                      {item.label}
                    </button>
                    {servicesOpen && (
                      <ul className="absolute top-full left-0 bg-white shadow-md rounded-md mt-1 py-1 w-40 z-50">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-black hover:bg-[#0891b2] hover:text-white transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <Link href={item.href} className={navLinkClass}>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
              <li>
                <Link
                  href="/Call"
                  className="bg-[#0891b2] hover:bg-red-500 text-white px-7 py-3 text-sm rounded-full transition-colors"
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
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <li key={index}>
                    <span className="block p-3 font-bold text-[#0891b2]">
                      {item.label}
                    </span>
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block pl-6 py-2 text-sm hover:bg-[#0891b2] hover:text-white transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="block p-3 hover:bg-[#0891b2] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
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
