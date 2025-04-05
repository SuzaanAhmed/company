"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <header className="bg-[#0891b2] flex flex-row p-4 gap-6 justify-between items-center text-lg">
  <div className="flex flex-row gap-5 items-center ml-20">
    <img src="instagram.png" alt="Instagram" className="h-5 w-5" />
    <img src="facebook.png" alt="Facebook" className="h-5 w-5" />
    <img src="linkedin.png" alt="LinkedIn" className="h-5 w-5" />
  </div>

  <div className="flex flex-row gap-4 text-black text-base text-md items-center mr-20">
    <span>+91 1234567890</span>
    <span className="text-xl">|</span>
    <span>myEmail@subdomain.domain</span>
  </div>
</header>


            <div className="flex items-center justify-between bg-white p-2 shadow-md">
                <div className="flex items-center">
                    <img src="logo.png" alt="Logo" className="ml-35 h-30 w-35" />
                </div>

                <nav>
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
        </div>
    );
}
