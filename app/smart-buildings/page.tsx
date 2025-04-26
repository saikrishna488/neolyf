"use client"
import React, { useState } from 'react';
import { 
  Building, 
  ShieldCheck, 
  Fan, 
  Lightbulb, 
  Lock, 
  Thermometer, 
  Wifi, 
  Sun, 
  Clock, 
  Check, 
  ChevronRight, 
  Crown,
  Eye,
  Radio,
  Users
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SmartBuilding() {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Featured products
  const featuredProducts = [
    {
      title: "Guard Security System",
      description: "Enterprise-grade security system with facial recognition, motion sensors, and 24/7 monitoring",
      icon: <ShieldCheck size={40} className="text-amber-500" />,
      image: "https://cdn.pixabay.com/photo/2022/06/17/09/50/cctv-surveillance-camera-7267551_1280.jpg"
    },
    {
      title: "Climate Monarch Controller",
      description: "Advanced HVAC automation with AI-powered climate optimization and zone control",
      icon: <Thermometer size={40} className="text-amber-500" />,
      image: "https://cdn.pixabay.com/photo/2013/02/06/09/50/energy-crisis-78445_1280.jpg"
    },
    {
      title: "Sovereign Lighting Network",
      description: "Intelligent lighting system with occupancy detection and circadian rhythm optimization",
      icon: <Lightbulb size={40} className="text-amber-500" />,
      image: "https://cdn.pixabay.com/photo/2021/12/15/17/16/technology-6873012_1280.jpg"
    },
    {
      title: "Imperial Access Control",
      description: "NFC and biometric entry systems with role-based permissions and visitor management",
      icon: <Lock size={40} className="text-amber-500" />,
      image: "https://cdn.pixabay.com/photo/2019/10/24/23/47/access-card-4575613_1280.jpg"
    }
  ];
  
  // Building management systems
  const buildingManagementSystems = [
    {
      title: "Integrated Building Management System",
      description: "Centralized control system that monitors and manages all building systems from a single dashboard",
      features: [
        "Real-time monitoring of all building systems",
        "Predictive maintenance alerts",
        "Energy consumption analytics",
        "Remote management capabilities",
        "Custom automation scenarios"
      ]
    },
    {
      title: "Energy Management System",
      description: "Optimize energy consumption across your building with AI-powered load balancing and peak demand management",
      features: [
        "Energy usage monitoring and analytics",
        "Load balancing and demand response",
        "Integration with renewable energy sources",
        "Automatic power factor correction",
        "Return on investment tracking"
      ]
    },
    {
      title: "Occupancy Management System",
      description: "Track and optimize space utilization with anonymous occupancy sensors and heat mapping technology",
      features: [
        "Real-time occupancy monitoring",
        "Space utilization analytics",
        "Traffic flow optimization",
        "Occupancy-based HVAC control",
        "Social distancing monitoring capabilities"
      ]
    }
  ];
  
  // Case studies
  const caseStudies = [
    {
      title: "Grand Tower",
      description: "A 50-story commercial building reduced energy costs by 37% while increasing tenant satisfaction by 42% through our integrated smart building solution.",
      image: "https://cdn.pixabay.com/photo/2020/01/29/02/23/bed-4801454_1280.jpg",
      stats: {
        "Energy Savings": "37%",
        "ROI Timeframe": "18 months",
        "CO₂ Reduction": "1,250 tons/year"
      }
    },
    {
      title: "Imperial Office Complex",
      description: "This 12-building campus implemented our security and access control systems, reducing security incidents by 78% and streamlining visitor management.",
      image: "https://cdn.pixabay.com/photo/2015/10/25/18/02/office-1006107_1280.jpg",
      stats: {
        "Security Incidents": "-78%",
        "Visitor Processing": "90% faster",
        "Staff Efficiency": "+25%"
      }
    },
    {
      title: "Crown Hospital Center",
      description: "Our smart building system helped maintain optimal conditions for medical equipment and patient comfort while reducing operational costs.",
      image: "https://cdn.pixabay.com/photo/2021/02/03/23/09/hallway-5979689_1280.jpg",
      stats: {
        "Maintenance Costs": "-42%",
        "Equipment Uptime": "99.97%",
        "Patient Satisfaction": "+31%"
      }
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-indigo-950/60 z-10"></div>
        <img 
          src="https://cdn.pixabay.com/photo/2018/09/04/10/36/smart-home-3653454_1280.jpg" 
          alt="Smart Building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
          <div className="mb-6 relative">
            <Crown className="h-12 w-12 text-amber-500 mb-4 mx-auto" />
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
            Smart Building <span className="text-amber-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Enterprise-grade building automation systems fit for modern architectural needs
          </p>
        </div>
        
        {/* Decorative Corner Elements */}
        <div className="absolute top-4 left-4 h-16 w-16 border-t-2 border-l-2 border-amber-500/70 z-20"></div>
        <div className="absolute top-4 right-4 h-16 w-16 border-t-2 border-r-2 border-amber-500/70 z-20"></div>
        <div className="absolute bottom-4 left-4 h-16 w-16 border-b-2 border-l-2 border-amber-500/70 z-20"></div>
        <div className="absolute bottom-4 right-4 h-16 w-16 border-b-2 border-r-2 border-amber-500/70 z-20"></div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-amber-100 rounded-lg mb-4">
              <Building size={32} className="text-amber-600" />
            </div>
            <h2 className="text-4xl font-bold text-indigo-950 mb-4">Elevate Your Building's Intelligence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-indigo-900/70 max-w-3xl mx-auto">
              Our integrated smart building solutions create efficient, secure, and sustainable environments that reduce costs and enhance occupant experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-lg border border-indigo-100 hover:border-amber-300 transition-all duration-300 group">
              <div className="p-4 bg-indigo-900 rounded-lg inline-block mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <Fan className="h-8 w-8 text-amber-400 group-hover:text-indigo-900" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-4">Energy Efficiency</h3>
              <p className="text-indigo-900/70 mb-6">
                Reduce energy consumption by up to 40% with AI-powered HVAC control, smart lighting, and automated energy management.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-lg border border-indigo-100 hover:border-amber-300 transition-all duration-300 group">
              <div className="p-4 bg-indigo-900 rounded-lg inline-block mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <ShieldCheck className="h-8 w-8 text-amber-400 group-hover:text-indigo-900" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-4">Enhanced Security</h3>
              <p className="text-indigo-900/70 mb-6">
                Protect your assets with integrated access control, video surveillance, intrusion detection, and emergency response systems.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-lg border border-indigo-100 hover:border-amber-300 transition-all duration-300 group">
              <div className="p-4 bg-indigo-900 rounded-lg inline-block mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <Users className="h-8 w-8 text-amber-400 group-hover:text-indigo-900" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-4">Occupant Experience</h3>
              <p className="text-indigo-900/70 mb-6">
                Create personalized environments that improve comfort, productivity, and well-being for everyone in your building.
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl"></div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-100/50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-amber-100 rounded-lg mb-4">
              <Crown size={32} className="text-amber-600" />
            </div>
            <h2 className="text-4xl font-bold text-indigo-950 mb-4">Building Equipment</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-indigo-900/70 max-w-3xl mx-auto">
              Premium smart building systems designed for enterprise-level performance, reliability, and integration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {featuredProducts.map((product, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-indigo-100 hover:border-amber-300 transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    {product.icon}
                  </div>
                  <div>
                    <p className="text-indigo-900/70 mb-4">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Building Management Systems Section */}
      <section className="py-20 px-4 bg-indigo-950 text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-amber-500/20 rounded-lg mb-4">
              <Wifi size={32} className="text-amber-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Intelligent Management Systems</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive building management solutions that integrate all your systems into a unified control platform.
            </p>
          </div>
          
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="flex justify-center mb-12 bg-transparent border-b border-indigo-800">
              {buildingManagementSystems.map((system, index) => (
                <TabsTrigger 
                  key={index}
                  value={system.title.toLowerCase().replace(/\s+/g, '-')}
                  className={`px-6 py-3 border-b-2 transition-colors duration-300 ${
                    activeTab === system.title.toLowerCase().replace(/\s+/g, '-') 
                      ? "border-amber-500 text-amber-400" 
                      : "border-transparent text-gray-400 hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab(system.title.toLowerCase().replace(/\s+/g, '-'))}
                >
                  {system.title.split(' ').slice(-2).join(' ')}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {buildingManagementSystems.map((system, index) => (
              <TabsContent 
                key={index}
                value={system.title.toLowerCase().replace(/\s+/g, '-')}
                className="focus:outline-none"
              >
                <div className="bg-indigo-900 rounded-xl p-8 md:p-12 shadow-xl border border-indigo-800">
                  <h3 className="text-3xl font-bold text-white mb-4">{system.title}</h3>
                  <p className="text-gray-300 text-lg mb-8">{system.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-amber-400 mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {system.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative">
                      <div className="aspect-video rounded-lg overflow-hidden bg-indigo-800/50 flex items-center justify-center">
                        <Eye size={48} className="text-amber-500 opacity-30" />
                        <span className="absolute text-sm text-amber-300 font-medium">System Preview</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
          <div className="absolute top-0 left-0 w-full h-64 bg-repeating-pattern"></div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-amber-100 rounded-lg mb-4">
              <Building size={32} className="text-amber-600" />
            </div>
            <h2 className="text-4xl font-bold text-indigo-950 mb-4">Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-indigo-900/70 max-w-3xl mx-auto">
              See how our solutions have transformed buildings around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-indigo-50 to-white rounded-xl overflow-hidden shadow-lg border border-indigo-100 hover:border-amber-300 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4">
                    <div className="p-1 bg-amber-500 rounded-full">
                      <Crown className="h-4 w-4 text-indigo-900" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-indigo-950 mb-2">{study.title}</h3>
                  <p className="text-indigo-900/70 mb-6">{study.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(study.stats).map(([label, value], idx) => (
                      <div key={idx} className="text-center p-2 bg-indigo-50 rounded-lg">
                        <div className="text-amber-600 font-bold text-lg">{value}</div>
                        <div className="text-xs text-indigo-900/70">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
}