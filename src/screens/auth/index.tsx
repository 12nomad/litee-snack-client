import { Navigate, Outlet } from 'react-router-dom';
import { GiHamburger } from 'react-icons/gi';

import useAuthStore from '../../stores/auth.store';

const Auth = () => {
  const auth = useAuthStore((s) => s.auth);

  if (auth) return <Navigate to="/" replace />;

  return (
    <div className="grid min-h-screen w-full place-items-center text-center bg-gradient-to-r from-rusty-red to-[#ef9ea5]">
      <div>
        <h2 className="flex items-center justify-center gap-1 text-4xl my-6 text-slate-50">
          <GiHamburger />
          <span className="font-lobster underline">Litee Snack</span>{' '}
        </h2>
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
