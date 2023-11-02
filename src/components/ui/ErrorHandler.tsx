import { useNavigate } from "react-router-dom";
import { ClientError } from "graphql-request";
import { useEffect } from "react";
import useAuthStore from "../../stores/auth.store";
import useCartStore from "../../stores/cart.store";
import getErrorMessage from "../../utils/get-error-message.util";

interface IError {
  error: ClientError | undefined;
}

const ErrorHandler = ({ error }: IError) => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const setStripePaymentIntent = useCartStore((s) => s.setStripePaymentIntent);
  const clearCurrentOrderArr = useCartStore((s) => s.clearCurrentOrderArr);
  const setCurrentOrderId = useCartStore((s) => s.setCurrentOrderId);
  const setCurrentShopId = useCartStore((s) => s.setCurrentShopId);
  const nestError = getErrorMessage(error?.response.errors);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      nestError &&
      nestError.statusCode === 401 &&
      nestError.message === "Unauthorized"
    ) {
      setAuth(false);
      setStripePaymentIntent("");
      clearCurrentOrderArr();
      setCurrentOrderId(0);
      setCurrentShopId(0);

      navigate("/landing", { replace: true });
    }
  }, [nestError.message]);

  // FIXME: connection lost
  if (error?.message === "Network request failed")
    return (
      <h1 className="text-xl text-center font-medium">
        Please check your internet connection then try again...
      </h1>
    );

  return (
    <p
      role="alert"
      className="text-xs text-rose-700 mt-2 font-bold mx-[12px] md:mx-[32px] lg:mx-[60px] py-6"
    >
      <sup>*</sup> {nestError?.message || error?.message}
    </p>
  );
};

export default ErrorHandler;
