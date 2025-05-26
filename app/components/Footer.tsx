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
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 text-sm text-gray-400">
              <div className='flex justify-center'>
                <Link href="/privacy" className="hover:text-blue-400 transition duration-200">
                  Privacy Policy
                </Link>
              </div>
              <div className='flex justify-center'>
                <Link href="/terms" className="hover:text-blue-400 transition duration-200">
                  Terms of Service
                </Link>
              </div>
             <div className='flex justify-center'>
               <Link href="/contact" className="hover:text-blue-400 transition duration-200">
                Contact
              </Link>
             </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}