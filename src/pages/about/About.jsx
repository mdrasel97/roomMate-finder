import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
      {/* Hero Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary">About</h1>
        <p className="text-sm md:text-md  max-w-2xl mx-auto">
          A modern platform to help you find verified, compatible roommates
          based on lifestyle, location, and trust. Whether you're moving to a
          new city or starting university, we make shared living easier.
        </p>
      </motion.section>

      {/* Why RoomMate Finder */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-primary">
            Why RoomMate Finder?
          </h2>
          <p className="text-md">
            Finding a roommate can be stressful — scams, miscommunication, and
            mismatches happen too often. RoomMate Finder solves these problems
            with:
          </p>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>Verified users and real profiles</li>
            <li>Search by lifestyle, budget, or location</li>
            <li>Safe in-app messaging system</li>
          </ul>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3094/3094856.png"
          alt="Why Roommate Finder"
          className="w-64 md:w-80 mx-auto"
        />
      </motion.section>

      {/* How It Works */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-base-200 rounded-xl p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          {[
            {
              step: "Create Profile",
              desc: "Sign up and tell us about your preferences.",
            },
            {
              step: "Browse Matches",
              desc: "Explore verified users and listings.",
            },
            {
              step: "Connect & Move",
              desc: "Chat securely and finalize your match.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className="card bg-base-100 shadow-lg w-full"
            >
              <div className="card-body">
                <h3 className="card-title">{item.step}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Key Features
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "🔒 Verified Profiles",
              desc: "All users are verified through email & phone for your safety.",
            },
            {
              title: "💬 Secure Chat",
              desc: "Built-in chat system to get to know your future roommate.",
            },
            {
              title: "🎯 Smart Filtering",
              desc: "Search roommates by interests, budget, and more.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="card bg-base-100 border shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-2">
          Ready to Find Your Perfect Roommate?
        </h2>
        <p className="mb-4 text-gray-600">
          Join thousands of happy users — start your journey today.
        </p>
        <button className="btn btn-primary">Get Started Now</button>
        <p className="text-sm text-gray-500 mt-4">
          Need help? Email us: support@roommatefinder.com
        </p>
      </motion.section>
    </div>
  );
};

export default About;
