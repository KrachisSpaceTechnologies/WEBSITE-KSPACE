import React from "react";

export default function BookDemo() {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 min-h-screen text-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full bg-opacity-80 bg-black rounded-3xl shadow-2xl p-8">
        {/* Header Section */}
        <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-purple-500 mt-16 text-center">
  Book a Demo With Us
</h1>

          <p className="text-lg text-gray-300 mt-4">
            Discover how our cutting-edge technology can redefine your future. Schedule an exclusive demo tailored just for you.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-8">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Preferred Date & Time */}
          <div>
            <label
              htmlFor="datetime"
              className="block text-sm font-medium text-gray-400"
            >
              Preferred Date & Time
            </label>
            <input
              type="datetime-local"
              id="datetime"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              rows="4"
              placeholder="Tell us about your requirements..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 w-full md:w-auto rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-transform transform hover:scale-105 text-white font-bold text-lg shadow-md"
            >
              Schedule My Demo
            </button>
          </div>
        </form>

        {/* Luxury Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Powered by{" "}
            <span className="text-blue-400 font-bold">Krachi's Space Technologies</span>. 
            Crafting the future of innovation and luxury.
          </p>
        </div>
      </div>
    </div>
  );
}
