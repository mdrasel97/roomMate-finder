import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to find your roommate?
        </h2>
        <p className="text-lg mb-8">
          Join hundreds of happy users and find your perfect match today!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/signup"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-100 transition"
          >
            Sign Up
          </a>
          <button className="bg-indigo-800 text-white font-semibold px-6 py-3 rounded-2xl shadow hover:bg-indigo-900 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
