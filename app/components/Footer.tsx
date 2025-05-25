import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} NEOLYF. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-blue-400 transition duration-200">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/terms" className="hover:text-blue-400 transition duration-200">
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/contact" className="hover:text-blue-400 transition duration-200">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}