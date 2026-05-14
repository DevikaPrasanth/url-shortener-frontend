import { useOutletContext } from 'react-router-dom';

import AnalyticsChart from '../components/AnalyticsChart';

function AnalyticsPage() {

  const { urls } = useOutletContext();

  return (

    <div>

      <AnalyticsChart urls={urls} />

    </div>
  );
}

export default AnalyticsPage;
