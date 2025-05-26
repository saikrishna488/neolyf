"use client"
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const path = usePathname();
    const router = useRouter();

    const navItems = [
        { title: "Home", href: "/" },
        { title: "Smart Hotels", href: "/smart-hotels" },
        { title: "Smart Buildings", href: "/smart-buildings" },
        { title: "About Us", href: "/about" },
        { title: "Contact Us", href: "/contact" },
    ];

    // Logo component
    const Logo = () => (
        <div className="flex h-28 w-30 items-center">
            <img src="/logo.png" className="h-full w-full object-cover" alt="Logo" />
        </div>
    );

    return (
        <header className="sticky sm:px-24 top-0 z-40 w-full border-b bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/">
                    <Logo />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                    <nav className="flex space-x-2">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`block select-none rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 ${
                                    path === item.href ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
                                }`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile Navigation Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setOpen(!open)}
                        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {open && (
                <div className="lg:hidden border-t bg-white">
                    <nav className="flex flex-col p-4 space-y-2">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`block px-3 py-2 rounded-md font-medium transition-colors hover:bg-gray-100 ${
                                    path === item.href ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
                                }`}
                                onClick={() => setOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}