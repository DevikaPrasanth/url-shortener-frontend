import { useOutletContext } from 'react-router-dom';

import SkeletonCard from '../components/SkeletonCard';

import StatsCard from '../components/StatsCard';

function OverviewPage() {

  const {
    urls,
    loading
  } = useOutletContext();

  if (loading) {

    return (

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />

      </div>
    );
  }

  return (

    <div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

        <StatsCard
          title="Total URLs"
          value={urls.length}
        />

        <StatsCard
          title="Total Clicks"
          value={
            urls.reduce(
              (acc, url) =>
                acc + url.click_count,
              0
            )
          }
        />

        <StatsCard
          title="Active Links"
          value={urls.length}
        />

      </div>

    </div>
  );
}

export default OverviewPage;
