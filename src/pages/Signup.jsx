import { useState } from 'react';

import { motion } from 'framer-motion';

import {
  Link,
  useNavigate
} from 'react-router-dom';

import toast from 'react-hot-toast';

import api from '../api/axios';

import BackgroundGlow from '../components/BackgroundGlow';

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await api.post(
        '/auth/register',
        formData
      );

      toast.success(
        'Account created successfully'
      );

      navigate('/');

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        'Signup failed'
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4 relative overflow-hidden">

      <BackgroundGlow />

      <motion.div

        initial={{
          opacity: 0,
          y: 30
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.5
        }}

        className="glass-card glow relative z-10 w-full max-w-md rounded-3xl p-8"

      >

        <h1 className="text-4xl font-bold text-center mb-2 gradient-text">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Start shortening smarter
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="text-sm text-gray-300 block mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
            />

          </div>

          <div>

            <label className="text-sm text-gray-300 block mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
            />

          </div>

          <div>

            <label className="text-sm text-gray-300 block mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
            />

          </div>

          <button
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition rounded-xl py-3 font-semibold disabled:opacity-50"
          >

            {loading
              ? 'Creating account...'
              : 'Create Account'}

          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">

          Already have an account?

          <Link
            to="/"
            className="text-indigo-400 ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </motion.div>

    </div>
  );
}

export default Signup;