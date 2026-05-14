import {
  Outlet
} from 'react-router-dom';

import {
  useEffect,
  useState
} from 'react';

import Sidebar from '../components/Sidebar';

import BackgroundGlow from '../components/BackgroundGlow';

import Topbar from '../components/Topbar';

import api from '../api/axios';

function Dashboard() {

  const [urls, setUrls] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState('');

  const fetchUrls = async () => {

    try {

      setLoading(true);

      const response =
        await api.get('/url');

      const formattedUrls =
        response.data.data.map((url) => ({
          ...url,
          shortUrl:
            `https://url-shortener-api-5gn9.onrender.com/api/url/${url.short_code}`
        }));

      setUrls(formattedUrls);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };

  useEffect(() => {

    fetchUrls();

  }, []);

  return (

    <div className="min-h-screen bg-[#030712] text-white flex relative overflow-hidden">

      <BackgroundGlow />

      <Sidebar />

      <div className="flex-1 p-4 md:p-8 overflow-visible">

        <Topbar />

        <Outlet
          context={{
            urls,
            fetchUrls,
            loading,
            search,
            setSearch
          }}
        />

      </div>

    </div>
  );
}

export default Dashboard;
