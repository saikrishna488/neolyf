"use client"
import React, { useState } from 'react';
import { Check, MapPin, Phone, Mail, Clock, ArrowRight, Send, Home, Shield, Hotel, Lightbulb, Wifi, Lock } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Alert,
  AlertDescription, 
  AlertTitle 
} from '@/components/ui/alert';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('smart-home');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Form validation would go here
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setService('smart-home');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Connect With Neolyf</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to transform your space with smart technology? Our team of smart solution experts 
            is here to help you create the intelligent environment you've always wanted.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:px-8">
        {/* Services Showcase */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Our Smart Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <Home className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Smart Homes</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Transform your living space with integrated lighting, climate control, security, and entertainment systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Security Solutions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Protect what matters most with advanced cameras, smart locks, alarm systems, and 24/7 monitoring.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <Hotel className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Smart Hotels</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Enhance guest experiences with automated check-in, room controls, and personalized environment settings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">Request Information</CardTitle>
                <CardDescription>
                  Tell us about your smart technology needs and our specialists will get back to you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <Alert className="bg-green-50 border-green-500">
                    <Check className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">Request Received!</AlertTitle>
                    <AlertDescription className="text-green-700">
                      Thank you for your interest in Neolyf Solutions. One of our smart technology specialists will contact you within 24 hours.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          I'm interested in
                        </label>
                        <select
                          id="service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="smart-home">Smart Home Solutions</option>
                          <option value="security">Security Systems</option>
                          <option value="smart-hotel">Smart Hotel Technology</option>
                          <option value="business">Business Automation</option>
                          <option value="consultation">Technology Consultation</option>
                          <option value="other">Other Services</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Tell us about your project or questions"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md inline-flex items-center transition-colors"
                    >
                      Submit Request
                      <Send className="ml-2 h-4 w-4" />
                    </button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <Card className="shadow-lg mb-6 bg-gradient-to-br from-indigo-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        456 Smart Technology Plaza<br />
                        Innovation District<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <p className="text-gray-600">neolyfsolutions@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Showroom Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9AM - 7PM<br />
                        Saturday: 10AM - 5PM<br />
                        Sunday: 12PM - 4PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Demo Experience Card */}
            <Card className="shadow-lg mb-6 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Book a Demo Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Visit our showroom to experience our smart solutions firsthand. See how our 
                  technology can transform your space.
                </p>
                <button className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-2 px-4 rounded-md transition-colors inline-flex items-center">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.087 10.087 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0V16h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548V16z" />
                    </svg>
                  </a>
                  <a href="https://instagram.com/neolyfsolutions" className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h2>
          <Tabs defaultValue="smartHome" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="smartHome">Smart Homes</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="hotels">Smart Hotels</TabsTrigger>
            </TabsList>
            <TabsContent value="smartHome" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>What is a smart home system?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    A smart home system is a network of connected devices that automate and control various aspects 
                    of your home, including lighting, climate, entertainment, and security. These systems can be 
                    controlled remotely via smartphone apps or voice commands.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Can I integrate existing devices with a new smart home system?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes, many existing devices can be integrated with our smart home systems. During our initial 
                    consultation, we'll assess your current setup and recommend compatible solutions. We specialize 
                    in creating unified systems that bring together various brands and technologies.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>What security solutions do you offer?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our comprehensive security solutions include smart cameras with AI detection, doorbell cameras, 
                    smart locks, motion sensors, window/door sensors, alarm systems, and 24/7 monitoring services. 
                    All components can be monitored and controlled through a single app.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Do your security systems work during power outages?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes, our security systems include backup power solutions that keep critical components 
                    functioning during power outages. Additionally, our cellular-based communication ensures 
                    your system stays connected even if your internet goes down.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="hotels" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>How can smart technology improve hotel operations?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our smart hotel solutions enhance guest experiences through digital check-in/check-out, 
                    keyless entry, personalized room controls, and automated service requests. For operators, 
                    our systems optimize energy usage, streamline maintenance, improve staff efficiency, and 
                    provide valuable analytics on facility usage.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Can you retrofit existing hotel properties?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Absolutely. We specialize in both new construction and retrofitting existing properties. 
                    Our wireless solutions minimize disruption and construction requirements, allowing hotels 
                    to implement smart technology without extensive renovations or downtime.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Featured Projects */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Our Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-md overflow-hidden">
              <div className="h-48 bg-blue-200 flex items-center justify-center">
                <Home className="h-16 w-16 text-blue-600" />
              </div>
              <CardHeader>
                <CardTitle>Luxury Smart Home</CardTitle>
                <CardDescription>Hillside Estates, San Francisco</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete smart home integration featuring automated lighting, climate control, 
                  entertainment systems, and advanced security throughout a 5,000 sq ft residence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md overflow-hidden">
              <div className="h-48 bg-blue-200 flex items-center justify-center">
                <Hotel className="h-16 w-16 text-blue-600" />
              </div>
              <CardHeader>
                <CardTitle>Boutique Smart Hotel</CardTitle>
                <CardDescription>The Meridian Hotel, Downtown</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Full-property smart technology implementation including keyless entry, in-room 
                  tablets, automated climate control, and integrated guest service platforms.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md overflow-hidden">
              <div className="h-48 bg-blue-200 flex items-center justify-center">
                <Shield className="h-16 w-16 text-blue-600" />
              </div>
              <CardHeader>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>TechCorp Headquarters</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive security solution featuring access control, surveillance cameras with 
                  AI analytics, intrusion detection, and emergency response system.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="rounded-lg overflow-hidden shadow-lg h-64 bg-gray-200 flex items-center justify-center">
            {/* This would be replaced with an actual map component */}
            <div className="text-center">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-600">456 Smart Technology Plaza, Innovation District, San Francisco, CA 94105</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 mt-2 inline-flex items-center font-medium">
                View on Google Maps <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Ready to Make Your Space Smarter?</h2>
          <p className="text-lg text-blue-700 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our smart technology experts to discuss how Neolyf Solutions 
            can transform your home, hotel, or business.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center">
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Neolyf Solutions</h3>
              <p className="text-gray-400">
                Creating intelligent spaces for modern living and business.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Smart Homes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security Systems</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Smart Hotels</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Automation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Installation Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Warranty Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 Neolyf Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}