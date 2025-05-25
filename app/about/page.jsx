import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">Neolyf</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Where innovation meets intelligence to redefine possibilities. We are a next-generation 
              technology company dedicated to providing smart, sustainable, and tailored solutions 
              that transform how businesses and individuals interact with the world around them.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Who We Are Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create a smarter, more connected world where technology empowers growth, 
                simplifies complexity, and drives sustainable progress.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At the heart of Neolyf is a team of visionaries, technologists, and problem solvers 
                who thrive on creating value through cutting-edge technologies like Artificial Intelligence (AI), 
                Internet of Things (IoT), and automation. With a deep commitment to excellence, innovation, 
                and integrity, we focus on delivering solutions that meet the evolving needs of our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialise in crafting intelligent systems and strategies to unlock your full potential
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Solutions</h3>
              <p className="text-gray-600">
                Seamlessly integrate AI, IoT, and data analytics into your business to improve 
                efficiency and decision-making
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automation Made Simple</h3>
              <p className="text-gray-600">
                Streamline your workflows with innovative tools to save time and resources
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer-Centric Design</h3>
              <p className="text-gray-600">
                Every solution we create is personalised to fit your unique requirements
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability First</h3>
              <p className="text-gray-600">
                Helping you achieve success while caring for the planet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Neolyf Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Neolyf</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tailored Expertise</h3>
              <p className="text-gray-600">
                We understand your challenges and create custom solutions
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Future-Ready Innovation</h3>
              <p className="text-gray-600">
                Stay ahead with technology designed for tomorrow
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Impact</h3>
              <p className="text-gray-600">
                Delivering growth without compromising the environment
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Unmatched Support</h3>
              <p className="text-gray-600">
                Your success is our priority, every step of the way
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Neolyf Smart Home</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Neolyf Smart Home is a leading name in wireless smart home automation, blending modern design, 
              state-of-the-art technology, and luxury to redefine living spaces. Our mission is to elevate 
              everyday living by bringing intelligence, convenience, and sophistication to modern Indian homes.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Leaders</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-300">AM</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Amdala Manikanta</h3>
              <p className="text-blue-400 text-lg">Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-300">KS</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Karthikeya Sajjala</h3>
              <p className="text-blue-400 text-lg">Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join us in creating a smarter, more connected world. Let's build the future together.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
            Get Started Today
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;