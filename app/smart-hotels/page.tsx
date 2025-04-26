"use client"
import React, { useState } from 'react';
import { 
  Bed, 
  Wifi, 
  Coffee, 
  ShieldCheck, 
  Thermometer, 
  Key, 
  Smartphone, 
  Clock, 
  Speaker, 
  ChevronDown,
  PanelLeft,
  Lightbulb,
  Leaf,
  Activity,
  Zap
} from 'lucide-react';

export default function SmartHotels() {
  const [activeFeature, setActiveFeature] = useState('smart-room');
  const [expanded, setExpanded] = useState(null);

  const features = [
    {
      id: 'smart-room',
      title: 'Smart Room Control',
      icon: <Thermometer size={28} className="text-teal-500" />,
      description: 'Intelligent room features that adapt to guest preferences',
      detailed: 'Smart rooms utilize advanced sensors to automatically adjust lighting, temperature, and ambiance based on guest preferences and time of day. Voice-activated systems allow control of everything from curtains to entertainment systems.',
      stats: {
        'Energy Efficiency': '40% improved',
        'Guest Satisfaction': '92% approval',
        'Setup Time': 'Under 3 minutes'
      },
      image: "https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg"
    },
    {
      id: 'seamless-check-in',
      title: 'Seamless Check-in',
      icon: <Key size={28} className="text-teal-500" />,
      description: 'Frictionless arrival experience with digital key access',
      detailed: 'Our contactless check-in system allows guests to bypass the front desk entirely. Digital keys are delivered directly to smartphones, enabling secure room access, elevator control, and amenity access throughout the property.',
      stats: {
        'Check-in Time': 'Under 60 seconds',
        'Paper Reduction': '100% paperless',
        'Security Level': 'Bank-grade encryption'
      },
      image: "https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_1280.jpg"
    },
    {
      id: 'ai-concierge',
      title: 'AI Concierge',
      icon: <Smartphone size={28} className="text-teal-500" />,
      description: 'Virtual assistant providing 24/7 personalized support',
      detailed: 'Our AI-powered concierge delivers instant responses to guest inquiries, restaurant recommendations, local attractions, and in-room requests. Machine learning allows the system to remember preferences and anticipate needs for repeat guests.',
      stats: {
        'Response Time': 'Immediate',
        'Languages': '42 supported',
        'Request Fulfillment': '94% without human intervention'
      },
      image: "https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330850_1280.jpg"
    },
    {
      id: 'smart-security',
      title: 'Smart Security',
      icon: <ShieldCheck size={28} className="text-teal-500" />,
      description: 'Advanced safety systems with unobtrusive monitoring',
      detailed: 'Cutting-edge security systems include biometric access control, AI-enhanced surveillance, and automated safety protocols. Privacy-focused design ensures guest comfort while maintaining the highest safety standards.',
      stats: {
        'Security Incidents': '76% reduction',
        'Emergency Response': '2.5 minutes average',
        'Coverage': '100% of property'
      },
      image: "https://cdn.pixabay.com/photo/2020/03/05/17/36/smart-home-4905021_1280.jpg"
    },
    {
      id: 'sustainable-systems',
      title: 'Sustainability Features',
      icon: <Leaf size={28} className="text-teal-500" />,
      description: 'Eco-friendly technologies that reduce environmental impact',
      detailed: 'Smart resource management systems optimize water usage, electricity consumption, and waste management. Solar integration, rainwater harvesting, and energy-efficient appliances minimize environmental footprint without compromising luxury.',
      stats: {
        'Water Conservation': '38% reduction',
        'Energy Savings': '45% lower consumption',
        'Carbon Offset': '27 tons yearly'
      },
      image: "https://cdn.pixabay.com/photo/2015/07/14/07/18/greece-844269_1280.jpg"
    }
  ];

  const hotelShowcases = [
    {
      name: "Horizon Smart Hotel",
      location: "Singapore",
      description: "Award-winning smart hotel featuring panoramic city views with integrated technology throughout 235 rooms",
      smartFeatures: [
        "Biometric room entry",
        "Predictive climate control",
        "Circadian lighting systems",
        "In-mirror display technology"
      ],
      image: "https://cdn.pixabay.com/photo/2014/12/21/18/51/hotel-575085_1280.jpg"
    },
    {
      name: "Azure Bay Resort",
      location: "Maldives",
      description: "Luxurious overwater bungalows with intelligent systems that blend modern technology with natural surroundings",
      smartFeatures: [
        "Voice-controlled villa automation",
        "Underwater room monitoring",
        "Smart glass privacy control",
        "Weather-adaptive experience settings"
      ],
      image: "https://cdn.pixabay.com/photo/2017/01/28/19/31/landscape-2016308_1280.jpg"
    },
    {
      name: "Metropolitan Innovation Hotel",
      location: "Tokyo, Japan",
      description: "Urban smart hotel utilizing cutting-edge Japanese technology to maximize space efficiency and guest comfort",
      smartFeatures: [
        "Robotic room service delivery",
        "Sleep quality monitoring",
        "Transforming room layouts",
        "AI-recommended local experiences"
      ],
      image: "https://cdn.pixabay.com/photo/2017/04/28/22/14/room-2269591_1280.jpg"
    }
  ];

  const testimonials = [
    {
      guest: "Alexandra T.",
      comment: "The smart room remembered my temperature preferences from my last stay six months ago. Incredibly intuitive system.",
      rating: 5,
      location: "Horizon Smart Hotel"
    },
    {
      guest: "Michael K.",
      comment: "The AI concierge recommended a local restaurant that wasn't on any tourist maps. Best dining experience of our trip.",
      rating: 5,
      location: "Metropolitan Innovation Hotel"
    },
    {
      guest: "Sophia J.",
      comment: "Seamless check-in process after a long flight was exactly what we needed. From airport to room in minutes.",
      rating: 5,
      location: "Azure Bay Resort"
    }
  ];

  const toggleExpand = (id:any) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
        <img 
          src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg"
          alt="Smart Hotel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 text-center">
          <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-6">
            <Bed className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">
            The Future of Hospitality <span className="text-teal-400">Is Here</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Discover how smart hotels are transforming guest experiences through innovative technology and intelligent design
          </p>
          
        </div>
      </section>

      {/* Smart Features Showcase */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Smart Hotel <span className="text-teal-600">Innovations</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge technologies that are redefining modern hospitality and elevating guest experiences
            </p>
          </div>
          
          {/* Features Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {features.map((feature) => (
              <div 
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`py-3 px-5 rounded-full cursor-pointer transition-all duration-300 flex items-center gap-2 ${
                  activeFeature === feature.id 
                    ? "bg-teal-50 ring-1 ring-teal-200 shadow-sm" 
                    : "hover:bg-slate-50"
                }`}
              >
                {feature.icon}
                <span className={`font-medium ${activeFeature === feature.id ? "text-teal-700" : "text-slate-600"}`}>
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
          
          {/* Active Feature Display */}
          {features.map((feature) => (
            feature.id === activeFeature && (
              <div key={feature.id} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-sm order-2 md:order-1">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <div className="inline-flex items-center gap-3 bg-teal-50 py-2 px-4 rounded-full">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-slate-800">{feature.title}</h3>
                  </div>
                  
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {feature.detailed}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {Object.entries(feature.stats).map(([label, value], idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                        <p className="text-sm text-slate-500 mb-1">{label}</p>
                        <p className="text-lg font-semibold text-teal-700">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>
      
      {/* Hotel Showcase Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-100 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Leading Smart <span className="text-teal-600">Properties</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Exemplary hotels embracing transformative technologies to create unforgettable stays
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelShowcases.map((hotel, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-52 overflow-hidden">
                  <img 
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{hotel.name}</h3>
                      <p className="text-slate-500">{hotel.location}</p>
                    </div>
                    <div className="bg-teal-50 p-1 rounded-md">
                      <PanelLeft size={20} className="text-teal-500" />
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-6">
                    {hotel.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Smart Highlights</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {hotel.smartFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 py-1">
                          <div className="h-2 w-2 rounded-full bg-teal-400"></div>
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Smart Room Elements Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Smart Room <span className="text-teal-600">Elements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The essential components creating the intelligent hotel room experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Intelligent Climate',
                icon: <Thermometer size={28} className="text-teal-500" />,
                description: 'AI-driven temperature and humidity controls that learn guest preferences and optimize comfort while reducing energy usage'
              },
              {
                title: 'Voice Assistants',
                icon: <Speaker size={28} className="text-teal-500" />,
                description: 'Multilingual voice recognition systems providing hands-free control of room features and information services'
              },
              {
                title: 'Smart Lighting',
                icon: <Lightbulb size={28} className="text-teal-500" />,
                description: 'Circadian rhythm lighting that adjusts color temperature and brightness to support natural sleep cycles and wellness'
              },
              {
                title: 'Digital Key Access',
                icon: <Key size={28} className="text-teal-500" />,
                description: 'Secure smartphone credentials providing seamless access to rooms and hotel amenities with multi-factor authentication'
              },
              {
                title: 'Occupancy Sensing',
                icon: <Activity size={28} className="text-teal-500" />,
                description: 'Unobtrusive presence detection that personalizes room response without compromising guest privacy'
              },
              {
                title: 'Energy Management',
                icon: <Zap size={28} className="text-teal-500" />,
                description: 'Automated systems that reduce energy consumption when rooms are unoccupied while maintaining comfort levels upon return'
              }
            ].map((element, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-teal-200 transition-colors duration-300"
              >
                <div className="p-3 bg-teal-50 rounded-full w-fit mb-6">
                  {element.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{element.title}</h3>
                <p className="text-slate-600">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Benefits Accordion */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">
              Smart Hotel <span className="text-teal-400">Benefits</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Value-driving outcomes that smart hotel technologies deliver for properties and their guests
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                id: 'guest-experience',
                title: 'Enhanced Guest Experience',
                content: 'Smart hotels create memorable stays by personalizing environmental settings, providing intuitive technology interfaces, and anticipating needs before they arise. Systems remember returning guest preferences and continually adapt to provide seamless and frictionless interactions throughout the property. Guests report 35% higher satisfaction rates in smart-enabled rooms compared to traditional accommodations.'
              },
              {
                id: 'operational-efficiency',
                title: 'Operational Efficiency',
                content: 'Intelligent automation reduces staff workload for routine tasks, allowing team members to focus on high-value guest interactions. Predictive maintenance systems identify potential equipment failures before they impact guests, while inventory management and housekeeping optimization reduce operational costs by approximately 23% on average.'
              },
              {
                id: 'sustainability',
                title: 'Environmental Sustainability',
                content: 'Smart resource management dramatically reduces the environmental footprint of hotel operations. Occupancy-based climate control, water conservation systems, and waste reduction technologies combine to decrease energy consumption by up to 40% and water usage by 30%. These initiatives appeal to increasingly eco-conscious travelers while reducing utility costs.'
              },
              {
                id: 'data-insights',
                title: 'Data-Driven Insights',
                content: 'Connected systems generate valuable data on guest preferences, operational patterns, and resource utilization. Analytics platforms transform this information into actionable intelligence, enabling properties to refine offerings, optimize pricing strategies, and identify emerging trends before competitors. This data ecosystem creates a continuous improvement cycle that keeps smart hotels at the forefront of the industry.'
              }
            ].map((item) => (
              <div 
                key={item.id}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  expanded === item.id 
                    ? "border-teal-500 bg-slate-800"
                    : "border-slate-700 bg-slate-800/50 hover:bg-slate-800"
                }`}
              >
                <div 
                  className="flex justify-between items-center p-6 cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <ChevronDown 
                    size={20} 
                    className={`text-teal-400 transition-transform duration-300 ${
                      expanded === item.id ? "transform rotate-180" : ""
                    }`} 
                  />
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expanded === item.id 
                      ? "max-h-96 opacity-100" 
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-slate-300 leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Guest Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Guest <span className="text-teal-600">Experiences</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Authentic feedback from travelers experiencing smart hotel innovations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-4 w-4 rounded-full ${
                        i < testimonial.rating ? "bg-teal-500" : "bg-slate-200"
                      }`}
                    ></div>
                  ))}
                </div>
                <p className="italic text-slate-500 text-sm mb-4">{testimonial.location}</p>
                <p className="text-slate-700 mb-6">"{testimonial.comment}"</p>
                <p className="font-medium text-slate-900">{testimonial.guest}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
    </div>
  );
}