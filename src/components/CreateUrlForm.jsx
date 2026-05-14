import { useState } from 'react';

import toast from 'react-hot-toast';

import api from '../api/axios';

function CreateUrlForm({ fetchUrls }) {

  const [formData, setFormData] = useState({
    originalUrl: '',
    customCode: ''
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

      await api.post(
        '/url/shorten',
        formData
      );

      await fetchUrls();
      
      toast.success('Short URL created');

      setFormData({
        originalUrl: '',
        customCode: ''
      });

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        'Something went wrong'
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="glass-card rounded-3xl p-6 mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Create Short URL
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <div>

          <label className="text-sm text-gray-300 block mb-2">
            Original URL
          </label>

          <input
            type="text"
            name="originalUrl"
            placeholder="https://example.com"
            value={formData.originalUrl}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
          />

        </div>

        <div>

          <label className="text-sm text-gray-300 block mb-2">
            Custom Code (optional)
          </label>

          <input
            type="text"
            name="customCode"
            placeholder="my-link"
            value={formData.customCode}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
          />

        </div>

        <button
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
        >

          {loading
            ? 'Creating...'
            : 'Create URL'}

        </button>

      </form>

    </div>
  );
}

export default CreateUrlForm;