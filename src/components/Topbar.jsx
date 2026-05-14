function Topbar() {

  const storedUser = localStorage.getItem('user');

  const user = storedUser
    ? JSON.parse(storedUser)
    : null;

  const displayName = user?.name || 'User';

  const displayEmail = user?.email || 'Login again to refresh profile';

  const avatarLetter =
    displayName.charAt(0).toUpperCase();

  return (
    <div className="glass-card relative z-[100] rounded-2xl px-6 py-4 mb-8 flex items-center justify-between border border-white/5">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-gray-400 mt-1">
          Welcome back, {displayName} {"\uD83D\uDC4B"}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group z-[110]">

          <button className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg">

            {avatarLetter}

          </button>

          <div className="absolute right-0 top-12 z-[120] w-56 rounded-2xl bg-[#080d1a] p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-white/10 shadow-2xl shadow-black/40">

            <p className="font-semibold mb-1">
              {displayName}
            </p>

            <p className="text-sm text-gray-400 mb-4 break-all">
              {displayEmail}
            </p>

            <button
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = '/';
              }}
              className="w-full bg-red-500/10 hover:bg-red-500/20 transition rounded-xl py-2 text-red-400"
            >
              Logout
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Topbar;
