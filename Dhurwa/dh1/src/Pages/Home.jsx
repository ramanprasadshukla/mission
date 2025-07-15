import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-400 text-white py-8 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our Website</h1>
        <p className="text-xl text-indigo-200">Your one-stop destination for amazing content</p>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Discover Something New</h2>
            <p className="text-lg text-gray-600 mb-6">Explore our features and services designed just for you.</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 bg-gray-200 rounded-xl h-64 md:h-80 flex items-center justify-center">
            <span className="text-gray-500">Hero Image Placeholder</span>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Our Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              <div className="text-indigo-600 text-2xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold mb-2">Easy to Use</h4>
              <p className="text-gray-600">Intuitive interface that anyone can master quickly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              <div className="text-indigo-600 text-2xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-2">Fast Performance</h4>
              <p className="text-gray-600">Lightning-fast responses and smooth operation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              <div className="text-indigo-600 text-2xl mb-4">🛟</div>
              <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-600">Our team is always here to help you.</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="/about" className="text-indigo-300 hover:text-white transition duration-200">About Us</a>
            <a href="/contact" className="text-indigo-300 hover:text-white transition duration-200">Contact</a>
            <a href="/privacy" className="text-indigo-300 hover:text-white transition duration-200">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;