"use client";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Zap, Shield, Users } from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Create and manage tickets instantly with our intuitive interface",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security to keep your data safe and protected",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with real-time updates and notifications",
    },
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-40 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute inset-0 w-full h-full -z-10"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="1" />
              <stop offset="100%" stopColor="#9fc8ff" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q360,100 720,200 T1440,200 L1440,0 L0,0 Z"
            fill="url(#waveGradient)"
          />
        </svg>

        <div className="absolute bottom-30  right-10 w-72 h-72 bg-blue-400 opacity-20 rounded-full -z-10" />
        <div className="absolute top-60 left-20 w-96 h-96 bg-black rounded-full opacity-15 -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <div className="flex flex-row items-center space-x-2 text-sm font-semibold text-blue-600">
                <Ticket className="w-4 h-4 inline-block" />
                <span className="inline-block">Welcome to TicketHub</span>
              </div>
            </div> */}

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight text-balance">
              Manage Tickets with{" "}
              <span className="text-blue-600">Confidence</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
              A modern ticket management system designed for teams that want to
              organize, track, and resolve issues efficiently without the
              complexity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/auth/signup"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Get Started Free
              </Link>
              <Link
                to="/auth/login"
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold text-lg"
              >
                Sign In
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose TicketHub?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage tickets effectively in one beautiful
              platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mb-4 inline-block p-3 bg-blue-100 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-400 to-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className=" rounded-3xl p-12 shadow-2xl border-t border-white border-opacity-10">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of teams already using TicketHub to manage their
                tickets efficiently.
              </p>
              <Link
                to="/auth/signup"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Start Your Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
