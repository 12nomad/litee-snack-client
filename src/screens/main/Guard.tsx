import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import useAuthStore from "../../stores/auth.store";
import ErrorHandler from "../../components/ui/ErrorHandler";
import Loading from "../../components/ui/Loading";
import queryService from "../../services/query.service";

const Guard = () => {
  const { isSuccess, error, isLoading } = queryService.authUser();
  const setAuth = useAuthStore((s) => s.setAuth);

  useEffect(() => {
    setAuth(true);
  }, [isSuccess]);

  if (isLoading) return <Loading />;

  if (!isSuccess && error) {
    return <ErrorHandler error={error} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default Guard;
