"use client"
import React, { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetFooter
} from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useAtom } from "jotai";
import { productAtom } from "../states/globalstates";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const path = usePathname();
    const router = useRouter();
    const [cart, setCart] = useAtom(productAtom);

    const navItems = [
        {
            title: "Home",
            dropdown: [
                { title: "Smart Buildings", href: "/smart-buildings" },
                { title: "Smart Hotels", href: "/smart-hotels" }
            ]
        },
        { title: "Smart Home", href: "/" },
        { title: "App", href: "/app" },
        { title: "Contact Us", href: "/contact" },
        { title: "Blog", href: "/blog" },
        { title: "Shop", href: "/shop" },
    ];

    const handlePlusQuantity = (id:any) => {
        setCart((prev:any) => prev.map((item:any) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    };

    const handleMinusQuantity = (id:any) => {
        setCart((prev:any) => prev.map((item:any) => {
            if (item.id === id) {
                return { 
                    ...item, 
                    quantity: item.quantity > 0 ? item.quantity - 1 : 0 
                };
            }
            return item;
        }));
    };

    // Calculate cart total
    const cartTotal = cart.reduce((total:any, item:any) => total + (item.price * item.quantity), 0);

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
                    <NavigationMenu>
                        <NavigationMenuList className="flex space-x-2">
                            {navItems.map((item, index) => {
                                // Item with dropdown
                                if (item.dropdown) {
                                    return (
                                        <NavigationMenuItem key={index}>
                                            <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-48 gap-1 p-2">
                                                    {item.dropdown.map((dropdownItem, idx) => (
                                                        <li key={idx}>
                                                            <Link href={dropdownItem.href} legacyBehavior passHref>
                                                                <NavigationMenuLink className="block select-none rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100">
                                                                    {dropdownItem.title}
                                                                </NavigationMenuLink>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    );
                                }

                                // Regular menu item
                                return (
                                    <NavigationMenuItem key={index}>
                                        <Link href={item.href} legacyBehavior passHref>
                                            <NavigationMenuLink className="block select-none rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100">
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                );
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Cart Icon (for both mobile and desktop) */}
                <div className="flex items-center">
                    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
                        <SheetTrigger aria-label="Cart" className="p-2 relative">
                            <ShoppingCart className="h-6 w-6" />
                            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cart.reduce((total:any, item:any) => total + item.quantity, 0)}
                            </span>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-96">
                            <SheetHeader>
                                <SheetTitle>Your Cart</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col p-4 gap-4 py-4">
                                {cart.length === 0 ? (
                                    <p className="text-center text-gray-500">Your cart is empty</p>
                                ) : (
                                    cart.map((item:any) => (
                                        <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                                            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border">
                                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-sm font-medium">{item.name}</h3>
                                                <p className="text-sm text-gray-500">
                                                    ${item.price.toFixed(2)} x {item.quantity}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button 
                                                    onClick={() => handleMinusQuantity(item.id)} 
                                                    variant="outline" 
                                                    size="icon" 
                                                    className="h-6 w-6"
                                                    aria-label="Decrease quantity"
                                                >
                                                    -
                                                </Button>
                                                <span className="w-6 text-center">{item.quantity}</span>
                                                <Button 
                                                    onClick={() => handlePlusQuantity(item.id)} 
                                                    variant="outline" 
                                                    size="icon" 
                                                    className="h-6 w-6"
                                                    aria-label="Increase quantity"
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <SheetFooter className="flex-col items-stretch sm:flex-row sm:justify-between border-t pt-4">
                                <div className="flex justify-between mb-4 sm:mb-0">
                                    <span className="text-lg font-medium">Total:</span>
                                    <span className="text-lg font-bold">${cartTotal.toFixed(2)}</span>
                                </div>
                                <Button className="w-full sm:w-auto">Checkout</Button>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>

                    {/* Mobile Navigation Menu */}
                    <div className="ml-4 lg:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger aria-label="Menu" className="p-2">
                                <Menu className="h-6 w-6" />
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Navigation Menu</SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col gap-4 p-4 pt-4">
                                    {navItems.map((item, index) => {
                                        if (item.dropdown) {
                                            return (
                                                <div key={index} className="flex flex-col">
                                                    <div className="mb-2 font-medium">{item.title}</div>
                                                    <div className="ml-4 flex flex-col gap-2">
                                                        {item.dropdown.map((dropdownItem, idx) => (
                                                            <Link
                                                                key={idx}
                                                                href={dropdownItem.href}
                                                                className="text-sm text-gray-600 hover:text-blue-600"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                {dropdownItem.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return (
                                            <Link
                                                key={index}
                                                href={item.href}
                                                className="font-medium hover:text-blue-600"
                                                onClick={() => setOpen(false)}
                                            >
                                                {item.title}
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}