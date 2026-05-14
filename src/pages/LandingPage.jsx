import { Link } from 'react-router-dom';

import {
  ArrowRight,
  Link2,
  BarChart3,
  ShieldCheck
} from 'lucide-react';

import { motion } from 'framer-motion';

import BackgroundGlow from '../components/BackgroundGlow';

function LandingPage() {

  return (

    <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden">

      <BackgroundGlow />

      {/* Navbar */}

      <nav className="flex items-center justify-between px-6 md:px-12 py-6 relative z-10">

        <h1 className="text-3xl font-bold gradient-text">
          Shortly
        </h1>

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-gray-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-indigo-600 hover:bg-indigo-500 transition px-5 py-2 rounded-xl font-medium"
          >
            Get Started
          </Link>

        </div>

      </nav>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-24 relative z-10">

        <motion.div

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.7
          }}

          className="text-center"

        >

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 mb-8">

            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

            Live analytics powered URL shortener

          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl mx-auto">

            Shorten URLs with

            <span className="gradient-text">
              {' '}powerful analytics
            </span>

          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed">

            Create beautiful short links,
            track clicks in real-time,
            generate QR codes,
            and manage everything
            from one modern dashboard.

          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">

            <Link
              to="/signup"
              className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 shadow-2xl shadow-indigo-500/20"
            >

              Start Free

              <ArrowRight size={20} />

            </Link>

            <Link
              to="/login"
              className="bg-white/5 hover:bg-white/10 border border-white/10 transition px-8 py-4 rounded-2xl font-semibold"
            >
              Login
            </Link>

          </div>

        </motion.div>

        {/* Dashboard Preview */}

        <motion.div

          initial={{
            opacity: 0,
            y: 50
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            delay: 0.2,
            duration: 0.7
          }}

          className="mt-24 glass-card rounded-[32px] p-6 border border-white/10 shadow-2xl shadow-indigo-500/10"

        >

          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Dashboard Preview"
            className="rounded-2xl w-full h-[400px] object-cover opacity-90"
          />

        </motion.div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 relative z-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="glass-card rounded-3xl p-8 border border-white/5">

            <Link2
              size={40}
              className="text-indigo-400 mb-5"
            />

            <h2 className="text-2xl font-bold mb-3">
              Smart URL Shortening
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Create clean and memorable
              short links instantly with
              custom aliases.
            </p>

          </div>

          <div className="glass-card rounded-3xl p-8 border border-white/5">

            <BarChart3
              size={40}
              className="text-cyan-400 mb-5"
            />

            <h2 className="text-2xl font-bold mb-3">
              Real-Time Analytics
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Track clicks, engagement,
              and link performance through
              interactive dashboards.
            </p>

          </div>

          <div className="glass-card rounded-3xl p-8 border border-white/5">

            <ShieldCheck
              size={40}
              className="text-green-400 mb-5"
            />

            <h2 className="text-2xl font-bold mb-3">
              Secure & Fast
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Built with modern backend
              architecture using Redis,
              PostgreSQL, and JWT auth.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default LandingPage;