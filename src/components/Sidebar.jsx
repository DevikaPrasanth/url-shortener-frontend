import {
  LayoutDashboard,
  Link2,
  BarChart3,
  LogOut,
  Menu
} from 'lucide-react';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {

  const [open, setOpen] = useState(false);

  const handleLogout = () => {

    localStorage.removeItem('token');

    window.location.href = '/';
  };

  return (

    <>

      {/* Mobile Top Button */}

      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-5 left-5 z-50 bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-xl"
      >

        <Menu size={22} />

      </button>

      {/* Overlay */}

      {open && (

        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />

      )}

      {/* Sidebar */}

      <div className={`
        fixed md:static z-50 top-0 left-0
        w-[260px] min-h-screen glass-card border-r border-white/5 p-6
        flex flex-col justify-between
        transform transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>

        <div>

          <h1 className="text-3xl font-bold gradient-text mb-12">
            Shortly
          </h1>

          <div className="space-y-3">

            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? 'bg-indigo-600/20 border border-indigo-500/20 text-indigo-300'
                    : 'hover:bg-white/5 text-gray-300'
                }`
              }
            >

              <LayoutDashboard size={20} />

              Dashboard

            </NavLink>

            <NavLink
              to="/dashboard/urls"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? 'bg-indigo-600/20 border border-indigo-500/20 text-indigo-300'
                    : 'hover:bg-white/5 text-gray-300'
                }`
              }
            >

              <Link2 size={20} />

              URLs

            </NavLink>

            <NavLink
              to="/dashboard/analytics"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? 'bg-indigo-600/20 border border-indigo-500/20 text-indigo-300'
                    : 'hover:bg-white/5 text-gray-300'
                }`
              }
            >

              <BarChart3 size={20} />

              Analytics

            </NavLink>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-400 transition"
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </>
  );
}

export default Sidebar;
