"use client"
import React from 'react';
import { Instagram, Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Crown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-indigo-950 to-gray-900 text-gray-100 border-t-4 border-amber-500">
      {/* Decorative Crown Element */}
      <div className="relative">
        <div className="absolute left-1/2 -top-8 transform -translate-x-1/2 bg-amber-500 rounded-full p-3 shadow-lg">
          <Crown className="h-6 w-6 text-indigo-950" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-14 w-auto p-1 rounded bg-gradient-to-r from-amber-400 to-amber-600 shadow-lg">
                <img src="/logo.png" alt="NeoLyf Solutions Logo" className="h-12 w-auto bg-white p-1 rounded" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-200">NeoLyf Solutions</h3>
                <div className="h-0.5 w-full bg-gradient-to-r from-amber-500 to-transparent"></div>
              </div>
            </div>
            <p className="text-gray-300">
              Elevating everyday living with premium smart home equipment and innovative solutions for sophisticated modern homes.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://instagram.com/neolyfsolutions" className="bg-indigo-900 hover:bg-amber-500 p-2 rounded-full transition duration-300 group">
                <Instagram className="h-5 w-5 group-hover:text-indigo-900" />
              </a>
              <a href="#" className="bg-indigo-900 hover:bg-amber-500 p-2 rounded-full transition duration-300 group">
                <Facebook className="h-5 w-5 group-hover:text-indigo-900" />
              </a>
              <a href="#" className="bg-indigo-900 hover:bg-amber-500 p-2 rounded-full transition duration-300 group">
                <Twitter className="h-5 w-5 group-hover:text-indigo-900" />
              </a>
              <a href="#" className="bg-indigo-900 hover:bg-amber-500 p-2 rounded-full transition duration-300 group">
                <Linkedin className="h-5 w-5 group-hover:text-indigo-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-bold mb-4 border-b border-amber-500/30 pb-2 flex items-center">
              <span className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-200">Royal Links</span>
              <div className="h-px flex-grow bg-gradient-to-r from-amber-500/50 to-transparent"></div>
            </h3>
            <a href="/smart-home" className="text-gray-300 hover:text-amber-300 flex items-center group transition-all duration-300">
              <div className="w-6 h-6 flex justify-center items-center">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-amber-400" />
              </div>
              <span className="border-b border-transparent group-hover:border-amber-500/50 py-1">Smart Home</span>
            </a>
            <a href="/products" className="text-gray-300 hover:text-amber-300 flex items-center group transition-all duration-300">
              <div className="w-6 h-6 flex justify-center items-center">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-amber-400" />
              </div>
              <span className="border-b border-transparent group-hover:border-amber-500/50 py-1">Products</span>
            </a>
            <a href="/shop" className="text-gray-300 hover:text-amber-300 flex items-center group transition-all duration-300">
              <div className="w-6 h-6 flex justify-center items-center">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-amber-400" />
              </div>
              <span className="border-b border-transparent group-hover:border-amber-500/50 py-1">Shop</span>
            </a>
            <a href="/blog" className="text-gray-300 hover:text-amber-300 flex items-center group transition-all duration-300">
              <div className="w-6 h-6 flex justify-center items-center">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-amber-400" />
              </div>
              <span className="border-b border-transparent group-hover:border-amber-500/50 py-1">Blog</span>
            </a>
            <a href="/contact" className="text-gray-300 hover:text-amber-300 flex items-center group transition-all duration-300">
              <div className="w-6 h-6 flex justify-center items-center">
                <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-amber-400" />
              </div>
              <span className="border-b border-transparent group-hover:border-amber-500/50 py-1">Contact Us</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold mb-4 border-b border-amber-500/30 pb-2 flex items-center">
              <span className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-200">Royal Court</span>
              <div className="h-px flex-grow bg-gradient-to-r from-amber-500/50 to-transparent"></div>
            </h3>
            <div className="flex items-start space-x-3 group">
              <div className="p-2 bg-indigo-900 rounded-full group-hover:bg-amber-500 transition duration-300">
                <Mail className="h-4 w-4 text-amber-400 group-hover:text-indigo-900 transition duration-300" />
              </div>
              <a href="mailto:neolyfsolutions@gmail.com" className="text-gray-300 hover:text-amber-300 transition duration-300 group-hover:border-b group-hover:border-amber-500/50">
                neolyfsolutions@gmail.com
              </a>
            </div>
            <div className="flex items-start space-x-3 group">
              <div className="p-2 bg-indigo-900 rounded-full group-hover:bg-amber-500 transition duration-300">
                <Phone className="h-4 w-4 text-amber-400 group-hover:text-indigo-900 transition duration-300" />
              </div>
              <span className="text-gray-300 group-hover:text-amber-300 transition duration-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-start space-x-3 group">
              <div className="p-2 bg-indigo-900 rounded-full group-hover:bg-amber-500 transition duration-300">
                <MapPin className="h-4 w-4 text-amber-400 group-hover:text-indigo-900 transition duration-300" />
              </div>
              <span className="text-gray-300 group-hover:text-amber-300 transition duration-300">
                123 Smart Home Avenue, Tech City, TC 10101
              </span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold mb-4 border-b border-amber-500/30 pb-2 flex items-center">
              <span className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-200">Royal Dispatch</span>
              <div className="h-px flex-grow bg-gradient-to-r from-amber-500/50 to-transparent"></div>
            </h3>
            <p className="text-sm text-gray-300">
              Subscribe to our royal newsletter for the latest product updates, smart home tips and exclusive offers fit for nobility.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-indigo-900/50 border-indigo-800 focus:border-amber-500 text-white placeholder:text-gray-400 pl-4 pr-10 py-2 rounded-lg"
                />
                <div className="absolute right-2 top-0 bottom-0 flex items-center text-amber-500 pointer-events-none">
                  <Crown className="h-4 w-4" />
                </div>
              </div>
              <Button className="bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300 text-indigo-950 font-bold w-full transition duration-300 shadow-lg border border-amber-600/50">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-amber-500/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-amber-200/60">
              &copy; {new Date().getFullYear()} <span className="text-amber-300">NeoLyf Solutions</span>. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-amber-200/60">
              <Link href="/privacy" className="hover:text-amber-300 transition duration-300">Privacy Policy</Link>
              <span className="text-amber-500/30">|</span>
              <a href="/terms" className="hover:text-amber-300 transition duration-300">Terms of Service</a>
              <span className="text-amber-500/30">|</span>
              <a href="/faq" className="hover:text-amber-300 transition duration-300">FAQ</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
    </footer>
  );
}