import { Navigate, Outlet, useLocation } from "react-router-dom";

import useAuthStore from "../../stores/auth.store";
import Splash from "../../assets/splash.png";

const Auth = () => {
  const auth = useAuthStore((s) => s.auth);
  const location = useLocation();

  if (auth) return <Navigate to="/" replace />;

  return (
    <div
      className={`min-h-screen grid place-items-center text-center bg-gradient-to-r from-rusty-red to-[#ef9ea5]`}
    >
      <div className="flex-row xl:flex items-center justify-center gap-64">
        <div className="m-auto order-last xl:order-none">
          <h2 className="flex items-center justify-center gap-1 text-4xl text-slate-50">
            <span className="font-lobster">Litee Snack.</span>{" "}
          </h2>
          <p className="mb-6 mt-2 text-slate-50">
            Delicious meals delivered to your doorstep...
          </p>
          <Outlet />
        </div>
        <div
          className={`m-auto hidden xl:block ${
            location.pathname === "/auth/password-reset" && "hidden"
          }`}
        >
          <img src={Splash} alt="splash" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
