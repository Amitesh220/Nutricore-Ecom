import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to NutriCore! We are dedicated to providing high-quality nutritional products to support your health and fitness goals.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Mission</h2>
        <p className="text-gray-600">
          At NutriCore, our mission is to empower individuals to achieve optimal health and wellness through scientifically formulated products.
        </p>
      </section>
    </div>
  );
};

export default About;
