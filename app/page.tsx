"use client"
import React, { useState, useEffect } from 'react';
import { Shield, Zap, Home, Sun, Clock, Smartphone, LineChart, Router, Radio, Wand2 } from 'lucide-react';

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel slides
  const slides = [
    {
      image: "https://cdn.pixabay.com/photo/2018/10/28/17/35/smart-home-3779361_1280.jpg",
      title: "Transform Your Home Into A Smart Haven",
      subtitle: "Experience the future of modern living with our cutting-edge smart home solutions"
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_1280.jpg",
      title: "Effortless Control At Your Fingertips",
      subtitle: "Control every aspect of your home with a simple touch or voice command"
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg",
      title: "Security That Never Sleeps",
      subtitle: "Keep your family and property safe with our 24/7 smart monitoring systems"
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg",
      title: "Energy Efficient Living",
      subtitle: "Reduce your carbon footprint and save on utility bills with intelligent energy management"
    }
  ];

  // Feature cards
  const featureCards = [
    {
      icon: <Shield size={48} className="text-purple-700" />,
      title: "Security",
      description: "Military-grade protection systems that keep your home secure around the clock with real-time alerts and monitoring.",
      gif: "https://cdn.pixabay.com/photo/2020/10/10/06/14/security-camera-5642120_1280.jpg"
    },
    {
      icon: <Zap size={48} className="text-purple-700" />,
      title: "Energy Efficiency",
      description: "Intelligent systems that optimize your energy usage, reducing bills while helping the environment.",
      gif: "https://cdn.pixabay.com/photo/2018/07/13/10/32/light-bulb-3535435_1280.jpg"
    },
    {
      icon: <Home size={48} className="text-purple-700" />,
      title: "Convenience",
      description: "Seamless automation that simplifies your daily routines and saves you precious time throughout the day.",
      gif: "https://cdn.pixabay.com/photo/2016/12/22/17/27/hand-1925875_1280.png"
    },
    {
      icon: <Sun size={48} className="text-purple-700" />,
      title: "Futuristic Comfort",
      description: "Experience tomorrow's living standards today with adaptive environments that respond to your needs.",
      gif: "https://cdn.pixabay.com/photo/2014/12/21/23/39/chair-575775_1280.png"
    }
  ];

  // Alternating feature rows
  const featureRows = [
    {
      image: "https://cdn.pixabay.com/photo/2017/09/20/16/53/smart-home-2769210_1280.jpg",
      icon: <Smartphone size={36} className="text-purple-700" />,
      title: "Smart Control From Any Location",
      description: "Control your entire home system remotely from anywhere in the world. Adjust lighting, temperature, security settings and more with just a few taps on your smartphone.",
      imageRight: false
    },
    {
      image: "https://cdn.pixabay.com/photo/2018/01/26/22/24/lock-3109958_1280.jpg",
      icon: <Shield size={36} className="text-purple-700" />,
      title: "Safety. With No Compromises",
      description: "Our multi-layered security systems include facial recognition, motion detection, and encrypted communication channels to ensure your family's safety is never compromised.",
      imageRight: true
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg",
      icon: <LineChart size={36} className="text-purple-700" />,
      title: "Detailed Power Stats At Your Fingertips",
      description: "Monitor your energy consumption in real-time with detailed analytics that help you optimize usage patterns and reduce utility bills by up to 30%.",
      imageRight: false
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/09/05/14/16/remote-control-2717777_1280.jpg",
      icon: <Router size={36} className="text-purple-700" />,
      title: "Universal Remote Control",
      description: "One device to rule them all. Our universal control system integrates with thousands of smart and traditional devices, creating a seamless ecosystem throughout your home.",
      imageRight: true
    },
    {
      image: "https://cdn.pixabay.com/photo/2019/12/17/14/04/sony-4701716_1280.jpg",
      icon: <Radio size={36} className="text-purple-700" />,
      title: "Intelligent Sensors For Smarter Tracking",
      description: "Advanced sensor technology monitors air quality, humidity, temperature, and occupancy to create the perfect living environment tailored to your preferences.",
      imageRight: false
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/12/01/00/01/dance-2989824_1280.jpg",
      icon: <Clock size={36} className="text-purple-700" />,
      title: "Scenes For Any Occasion",
      description: "Pre-program customized settings for any scenario—movie night, dinner party, morning routine, or vacation mode—all activated with a single command.",
      imageRight: true
    },
    {
      image: "https://cdn.pixabay.com/photo/2024/03/26/11/57/network-8656639_1280.jpg",
      icon: <Wand2 size={36} className="text-purple-700" />,
      title: "Touch Switch",
      description: "Elegant, responsive touch panels that blend seamlessly with your decor while providing intuitive control over your entire smart home ecosystem.",
      imageRight: false
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Carousel Section */}
      <section className="relative h-screen max-h-96 md:max-h-[92vh] overflow-hidden">
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`absolute h-full w-full transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <img 
                src={slide.image} 
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">{slide.title}</h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Slide ${index + 1} indicator`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Home Smart Home</h2>
            <div className="w-20 h-1 bg-purple-700 mx-auto"></div>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
              Transform your living space into an intelligent ecosystem that enhances your lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-6">
                  <img src={card.gif} alt={card.title} className="w-full h-48 object-cover rounded-lg mb-6" />
                  <div className="flex items-center mb-4">
                    {card.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{card.title}</h3>
                  </div>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience The Difference</h2>
            <div className="w-20 h-1 bg-purple-700 mx-auto"></div>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
              Our intelligent home systems are designed to enhance every aspect of your daily life
            </p>
          </div>
          
          <div className="space-y-20">
            {featureRows.map((feature, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${feature.imageRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}
              >
                <div className="w-full md:w-1/2">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-auto rounded-xl shadow-lg object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="inline-block p-3 bg-purple-100 rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-xl text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Image Section */}
      <section className="relative h-96 md:h-screen overflow-hidden">
        <img 
          src="https://cdn.pixabay.com/photo/2015/08/25/14/16/small-wooden-house-906912_1280.jpg" 
          alt="Smart Home Living"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
            The Future Is Here. Welcome Home.
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Step into a world where technology and comfort combine to create the perfect living environment
          </p>
        </div>
      </section>
    </div>
  );
}