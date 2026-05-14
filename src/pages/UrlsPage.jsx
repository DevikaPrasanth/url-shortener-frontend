import { useOutletContext } from 'react-router-dom';

import CreateUrlForm from '../components/CreateUrlForm';

import SkeletonUrlCard from '../components/SkeletonUrlCard';

import UrlList from '../components/UrlList';

function UrlsPage() {

  const {
    urls,
    fetchUrls,
    loading,
    search,
    setSearch
  } = useOutletContext();

  if (loading) {

    return (

      <div className="space-y-4 mt-8">

        <SkeletonUrlCard />
        <SkeletonUrlCard />
        <SkeletonUrlCard />

      </div>
    );
  }

  const filteredUrls =
    urls.filter((url) =>
      url.original_url
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      url.short_code
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const hasNoResults =
    search &&
    filteredUrls.length === 0;

  return (

    <div>

      <h2 className="text-2xl font-bold mb-4 mt-8">
        Create New URL
      </h2>

      <CreateUrlForm
        fetchUrls={fetchUrls}
      />

      <div className="h-px bg-white/5 my-10" />

      <h2 className="text-2xl font-bold mb-4 mt-10">
        Manage URLs
      </h2>

      <div className="glass-card rounded-2xl p-4 mb-6 border border-white/5 flex items-center gap-3">

        <input
          type="text"
          placeholder="Search URLs..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
        />

        {search && (

          <button
            onClick={() => setSearch('')}
            className="text-gray-400 hover:text-white transition text-lg"
          >
            ✕
          </button>

        )}

      </div>

      {hasNoResults ? (

        <div className="glass-card rounded-3xl p-12 mt-8 text-center">

          <div className="text-6xl mb-4">
            🔍
          </div>

          <h2 className="text-2xl font-bold mb-3">
            No Matching URLs
          </h2>

          <p className="text-gray-400">
            Try searching with another keyword.
          </p>

        </div>

      ) : (

        <UrlList urls={filteredUrls} />

      )}

    </div>
  );
}

export default UrlsPage;
