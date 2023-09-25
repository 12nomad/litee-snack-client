import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Spinner } from "flowbite-react";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { IPaymentState } from "../../interfaces/IPaymentState.interface";
import useCartStore from "../../stores/cart.store";
import { useNavigate } from "react-router-dom";

interface ICheckoutForm {
  paymentState: IPaymentState;
  setPaymentState: Dispatch<SetStateAction<IPaymentState>>;
}

const CheckoutForm = ({ paymentState, setPaymentState }: ICheckoutForm) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const setStripePaymentIntent = useCartStore((s) => s.setStripePaymentIntent);
  const clearCurrentOrderArr = useCartStore((s) => s.clearCurrentOrderArr);
  const setCurrentOrderId = useCartStore((s) => s.setCurrentOrderId);
  const setCurrentShopId = useCartStore((s) => s.setCurrentShopId);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setPaymentState({
      paymentLoading: true,
      paymentError: null,
      paymentSuccess: false,
    });
    stripe
      .confirmPayment({ elements, redirect: "if_required" })
      .then((res) => {
        if (res.error)
          return setPaymentState({
            paymentLoading: false,
            paymentError: res.error,
            paymentSuccess: false,
          });

        clearCurrentOrderArr();
        setCurrentOrderId(0);
        setCurrentShopId(0);
        setStripePaymentIntent("");
        return navigate("/checkout-success", { replace: true });
      })
      .catch((error) => {
        return setPaymentState({
          paymentLoading: false,
          paymentError: error,
          paymentSuccess: false,
        });
      });
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="my-6">
      <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
      <button
        type="submit"
        disabled={paymentState.paymentLoading || !stripe || !elements}
        className="w-full text-slate-50 bg-rusty-red hover:bg-rusty-red-shade focus:ring-4 focus:outline-none focus:ring-rusty-red-tint font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
      >
        {paymentState.paymentLoading ? <Spinner color="failure" /> : "Pay Now"}
      </button>
      {paymentState.paymentError && (
        <p className="text-red-700">
          <sup>*</sup>
          {paymentState.paymentError.message}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
