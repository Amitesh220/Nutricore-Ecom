import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We'd love to hear from you! Get in touch with us for any queries or feedback.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600">You can reach us at: <a href="mailto:amiteshmishra2202@gmail.com" className="text-blue-600">{'amiteshmishra2202@gmail.com'}</a></p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600">Call us at: <a href="tel:+916388010617" className="text-blue-600">{'+91 638-801-0617'}</a></p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Address</h3>
            <p className="text-gray-600">We are locsted at delhi ncr</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
