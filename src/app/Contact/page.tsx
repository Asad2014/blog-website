import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-bold text-indigo-700 mb-4 transform hover:scale-105 transition-transform duration-500">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700">
            If you have any questions, suggestions, or just want to say hello, feel free to reach out to me using the form below. I&apos;m always happy to connect!
          </p>
        </div>

        <div className="flex justify-center mt-20">
          <div className="bg-white p-8 rounded-lg shadow-xl w-[500px]">
            <h3 className="text-4xl font-bold mb-6  text-center">Contact Form</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg text-gray-800 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-lg text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-lg text-gray-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;