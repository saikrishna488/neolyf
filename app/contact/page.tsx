"use client"
import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Home, Shield, Hotel, Award, Users, Settings } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Get In Touch With
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Neolyf Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transform your space with cutting-edge smart technology solutions. 
              Our expert team is ready to bring your vision to life.
            </p>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Contact Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ready to start your smart technology journey? Reach out to us through any of the channels below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Office Address</h3>
                <p className="text-slate-600 leading-relaxed">
                  N-Heights<br />
                  Siddique nagar<br />
                  Hitech City
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone Number</h3>
                <a href="tel:6309616723" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                  6309616723
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Address</h3>
                <a href="mailto:neolyfsolutions@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                  neolyfsolutions@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Office Hours</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Mon-Fri: 9AM-7PM<br />
                  Sat: 10AM-5PM<br />
                  Sun: 12PM-4PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive smart technology solutions tailored to your specific needs and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Homes</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Transform your living space with integrated lighting, climate control, security, 
                  and entertainment systems that adapt to your lifestyle.
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white">
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Security Solutions</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Protect what matters most with advanced cameras, smart locks, alarm systems, 
                  and comprehensive 24/7 monitoring services.
                </p>
                <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Hotel className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Hotels</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Enhance guest experiences with automated check-in, room controls, 
                  and personalized environment settings for hospitality excellence.
                </p>
                <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find answers to common questions about our smart technology solutions and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="smartHome" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-100 p-1 rounded-xl">
                <TabsTrigger value="smartHome" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Smart Homes</TabsTrigger>
                <TabsTrigger value="security" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Security</TabsTrigger>
                <TabsTrigger value="hotels" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Smart Hotels</TabsTrigger>
              </TabsList>
              
              <TabsContent value="smartHome" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-slate-900">What is a smart home system?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      A smart home system is a network of connected devices that automate and control various aspects 
                      of your home, including lighting, climate, entertainment, and security. These systems can be 
                      controlled remotely via smartphone apps or voice commands.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-slate-900">Can I integrate existing devices with a new smart home system?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      Yes, many existing devices can be integrated with our smart home systems. During our initial 
                      consultation, we'll assess your current setup and recommend compatible solutions. We specialize 
                      in creating unified systems that bring together various brands and technologies.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-slate-900">What security solutions do you offer?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      Our comprehensive security solutions include smart cameras with AI detection, doorbell cameras, 
                      smart locks, motion sensors, window/door sensors, alarm systems, and 24/7 monitoring services. 
                      All components can be monitored and controlled through a single app.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-slate-900">Do your security systems work during power outages?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      Yes, our security systems include backup power solutions that keep critical components 
                      functioning during power outages. Additionally, our cellular-based communication ensures 
                      your system stays connected even if your internet goes down.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="hotels" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-slate-900">How can smart technology improve hotel operations?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      Our smart hotel solutions enhance guest experiences through digital check-in/check-out, 
                      keyless entry, personalized room controls, and automated service requests. For operators, 
                      our systems optimize energy usage, streamline maintenance, improve staff efficiency, and 
                      provide valuable analytics on facility usage.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-slate-900">Can you retrofit existing hotel properties?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      Absolutely. We specialize in both new construction and retrofitting existing properties. 
                      Our wireless solutions minimize disruption and construction requirements, allowing hotels 
                      to implement smart technology without extensive renovations or downtime.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Neolyf Solutions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with exceptional service to deliver solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Expert Installation</h3>
              <p className="text-slate-600 leading-relaxed">
                Our certified technicians ensure flawless installation and integration of all smart technology systems.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">24/7 Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Round-the-clock technical support and maintenance services to keep your systems running smoothly.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Custom Solutions</h3>
              <p className="text-slate-600 leading-relaxed">
                Tailored smart technology solutions designed specifically for your unique needs and requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Visit Our Office</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Located in the heart of Hitech City, our office is easily accessible and equipped with the latest smart technology demonstrations.
            </p>
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="h-80 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">N-Heights, Siddique nagar, Hitech City</h3>
                <a 
                  href="https://maps.app.goo.gl/zPYoH2BduPHPZ5FA9" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
                >
                  <span>View on Google Maps</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}