import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import OverviewPage from '../pages/OverviewPage';
import UrlsPage from '../pages/UrlsPage';
import AnalyticsPage from '../pages/AnalyticsPage';

import ProtectedRoute from './ProtectedRoute';

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >

          <Route
            index
            element={<OverviewPage />}
          />

          <Route
            path="urls"
            element={<UrlsPage />}
          />

          <Route
            path="analytics"
            element={<AnalyticsPage />}
          />

        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;
