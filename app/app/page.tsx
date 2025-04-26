import React from 'react';
import { 
  Smartphone, 
  Zap, 
  Shield, 
  Bell, 
  Home, 
  Fingerprint, 
  Clock, 
  Activity,
  Search,
  MessageSquare,
  Share2,
  Check
} from 'lucide-react';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-800 opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                NEOLYF Smart Home
                <span className="block text-purple-300 mt-2">Now in Your Pocket</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
                Our revolutionary smart home experience is coming to mobile. Control your entire home ecosystem from anywhere with our new mobile application.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center justify-center px-5 py-3 bg-purple-600 text-white rounded-lg shadow-lg">
                  <p className="font-semibold">Coming Soon</p>
                </div>
                <div className="flex items-center justify-center px-5 py-3 border border-white/30 text-white rounded-lg shadow-lg">
                  <p>Get Early Access</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-56 sm:w-64 md:w-72">
                <div className="absolute -top-6 -left-6 w-full h-full bg-purple-400 rounded-3xl transform rotate-6"></div>
                <div className="absolute -top-3 -left-3 w-full h-full bg-purple-600 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-black rounded-3xl p-3 shadow-2xl">
                  <div className="rounded-2xl overflow-hidden border-4 border-gray-800">
                    <img 
                      src="https://cdn.pixabay.com/photo/2015/03/16/21/05/iphone-676726_1280.jpg" 
                      alt="NEOLYF Mobile App" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">COMING SOON</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Mobile Features You'll Love</h2>
            <div className="w-20 h-1 bg-purple-700 mx-auto"></div>
            <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Take your smart home experience to the next level with our feature-rich mobile application
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-purple-100 rounded-full w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mb-4 sm:mb-5">
                <Zap size={24} className="text-purple-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Real-Time Control</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Instantly adjust lighting, temperature, security settings, and more with responsive touch controls from anywhere in the world.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-purple-100 rounded-full w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mb-4 sm:mb-5">
                <Shield size={24} className="text-purple-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Advanced Security</h3>
              <p className="text-sm sm:text-base text-gray-600">
                View live security camera feeds, receive instant alerts, and control access permissions all from your mobile device.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-purple-100 rounded-full w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mb-4 sm:mb-5">
                <Bell size={24} className="text-purple-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Smart Notifications</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Customizable alerts keep you informed about important events at home, from security alerts to energy usage warnings.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-purple-100 rounded-full w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mb-4 sm:mb-5">
                <Home size={24} className="text-purple-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Scene Creator</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Design and save custom home settings for different scenarios—movie night, dinner party, or morning routine—activated with a single tap.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-purple-100 rounded-full w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mb-4 sm:mb-5">
                <Fingerprint size={24} className="text-purple-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Biometric Security</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Secure access to your home controls with fingerprint or facial recognition, ensuring only authorized users can make changes.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-purple-100 rounded-full w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mb-4 sm:mb-5">
                <Activity size={24} className="text-purple-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Energy Analytics</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Detailed charts and statistics help you monitor and optimize your home's energy consumption and reduce utility bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">APP PREVIEW</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Designed For Intuitive Control</h2>
            <div className="w-20 h-1 bg-purple-700 mx-auto"></div>
            <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Our sleek and user-friendly interface puts complete home control at your fingertips
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
              <div className="relative mx-auto w-56 sm:w-64">
                <div className="absolute -top-3 -left-3 w-full h-full bg-purple-200 rounded-3xl transform -rotate-3"></div>
                <div className="absolute -top-1.5 -left-1.5 w-full h-full bg-purple-400 rounded-3xl transform -rotate-1.5"></div>
                <div className="relative bg-black rounded-3xl p-3 shadow-2xl">
                  <div className="rounded-2xl overflow-hidden border-4 border-gray-800">
                    <img 
                      src="https://cdn.pixabay.com/photo/2015/03/16/21/05/iphone-676726_1280.jpg" 
                      alt="NEOLYF Dashboard" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 lg:pl-6 xl:pl-12">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start">
                  <div className="p-2 bg-purple-100 rounded-full mr-4 flex-shrink-0">
                    <Search size={20} className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Unified Dashboard</h3>
                    <p className="text-sm sm:text-base text-gray-600">All your smart devices accessible from a single, clean dashboard that shows status at a glance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-purple-100 rounded-full mr-4 flex-shrink-0">
                    <MessageSquare size={20} className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Voice Commands</h3>
                    <p className="text-sm sm:text-base text-gray-600">Control your home with natural voice commands through our AI assistant integration.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-purple-100 rounded-full mr-4 flex-shrink-0">
                    <Clock size={20} className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Scheduling</h3>
                    <p className="text-sm sm:text-base text-gray-600">Set advanced schedules for all your devices to automate your home throughout the day.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-purple-100 rounded-full mr-4 flex-shrink-0">
                    <Share2 size={20} className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Family Sharing</h3>
                    <p className="text-sm sm:text-base text-gray-600">Share access with family members with customizable permission levels for each user.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-purple-900 to-indigo-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Be The First To Experience NEOLYF Mobile</h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Join our exclusive early access program and help shape the future of smart home control
          </p>
          
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Register for Early Access</h3>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
              />
              <div className="bg-purple-700 text-white px-6 py-3 rounded-lg font-medium text-center">
                Join Waitlist
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-8 text-sm text-gray-600">
              <div className="flex items-center justify-center sm:justify-start">
                <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                <span>Early App Access</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                <span>Exclusive Features</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                <span>Priority Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Release Timeline */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">ROADMAP</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Launch Timeline</h2>
            <div className="w-20 h-1 bg-purple-700 mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 h-full w-1 bg-purple-200"></div>
            
            {/* Timeline Items */}
            <div className="relative space-y-8 sm:space-y-12">
              {/* Item 1 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <div className="flex flex-col items-start sm:items-end sm:w-1/2 sm:pr-8 pl-12 sm:pl-0 pb-5 sm:pb-0">
                  <div className="text-left sm:text-right">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Beta Testing</h3>
                    <p className="text-gray-600">May 2025</p>
                    <p className="mt-2 text-sm sm:text-base text-gray-600">Limited release to select users for feedback and testing.</p>
                  </div>
                </div>
                <div className="absolute left-4 top-0 sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 flex items-center justify-center">
                  <div className="bg-purple-700 w-6 h-6 rounded-full border-4 border-purple-100"></div>
                </div>
                <div className="sm:w-1/2 sm:pl-8 hidden sm:block"></div>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <div className="sm:w-1/2 sm:pr-8 hidden sm:block"></div>
                <div className="absolute left-4 top-0 sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 flex items-center justify-center">
                  <div className="bg-purple-700 w-6 h-6 rounded-full border-4 border-purple-100"></div>
                </div>
                <div className="flex flex-col items-start sm:w-1/2 sm:pl-8 pl-12 pt-5 sm:pt-0">
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Early Access</h3>
                    <p className="text-gray-600">July 2025</p>
                    <p className="mt-2 text-sm sm:text-base text-gray-600">Premium features unlocked for waitlist subscribers.</p>
                  </div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <div className="flex flex-col items-start sm:items-end sm:w-1/2 sm:pr-8 pl-12 sm:pl-0 pb-5 sm:pb-0">
                  <div className="text-left sm:text-right">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Public Launch</h3>
                    <p className="text-gray-600">September 2025</p>
                    <p className="mt-2 text-sm sm:text-base text-gray-600">Global release on all app stores with complete feature set.</p>
                  </div>
                </div>
                <div className="absolute left-4 top-0 sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 flex items-center justify-center">
                  <div className="bg-purple-700 w-6 h-6 rounded-full border-4 border-purple-100"></div>
                </div>
                <div className="sm:w-1/2 sm:pl-8 hidden sm:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}