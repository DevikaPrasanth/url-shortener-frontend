import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
