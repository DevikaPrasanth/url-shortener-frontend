import { useState } from 'react';

import { motion } from 'framer-motion';

import { useNavigate, Link } from 'react-router-dom';

import toast from 'react-hot-toast';

import api from '../api/axios';

import BackgroundGlow from '../components/BackgroundGlow';

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

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

      const response = await api.post(
        '/auth/login',
        formData
      );

      localStorage.setItem(
        'token',
        response.data.token
      );

      localStorage.setItem(
        'user',
        JSON.stringify(response.data.user)
      );

      toast.success('Login successful');

      navigate('/dashboard');

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        'Login failed'
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4 relative overflow-hidden">

      <BackgroundGlow />

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.5 }}

        className="glass-card glow relative z-10 w-full max-w-md rounded-3xl p-8"

      >

        <h1 className="text-4xl font-bold text-center mb-2 gradient-text">
          URL Shortener
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Welcome back
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
            />

          </div>

          <button
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition rounded-xl py-3 font-semibold disabled:opacity-50"
          >

            {loading ? 'Logging in...' : 'Login'}

          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">

          Don’t have an account?

          <Link
            to="/signup"
            className="text-indigo-400 ml-2 hover:underline"
          >
            Signup
          </Link>

        </p>

      </motion.div>

    </div>
  );
}

export default Login;
