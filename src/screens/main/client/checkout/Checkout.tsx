import { Elements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRegCreditCard } from 'react-icons/fa';
import { Navigate, useParams } from 'react-router-dom';

import useCheckout from './hooks/useCheckout';
import { IPaymentState } from '../../../../interfaces/IPaymentState.interface';
import useCartStore from '../../../../stores/cart.store';
import CheckoutForm from '../../../../components/stripe/CheckoutForm';
import ErrorHandler from '../../../../components/ui/ErrorHandler';
import Loading from '../../../../components/ui/Loading';
import StripeTestMode from '../../../../components/stripe/StripeTestMode';
import ContentWrapper from '../../../../components/ui/ContentWrapper';

const Checkout = () => {
  const clearCurrentOrderArr = useCartStore((s) => s.clearCurrentOrderArr);
  const params = useParams<{ shopId: string; promoDuration: string }>();

  if (!params.shopId || !Boolean(parseInt(params.shopId))) {
    clearCurrentOrderArr();
    return <Navigate to="/" replace />;
  }

  const [paymentState, setPaymentState] = useState<IPaymentState>({
    paymentLoading: false,
    paymentSuccess: false,
    paymentError: null,
  });
  const totalPrice = useCartStore((s) => s.totalPrice);
  const onSuccess = () => {};
  const { checkoutError, checkoutLoading, stripePromise, options } =
    useCheckout(onSuccess);

  if (checkoutLoading) return <Loading />;
  if (checkoutError) return <ErrorHandler error={checkoutError} />;

  return (
    <ContentWrapper>
      <Helmet>
        <title>Checkout | Litee Snack🍔</title>
      </Helmet>

      <section>
        <div className="relative">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-1 ">
            <FaRegCreditCard size={25} /> <span>Checkout</span>
          </h2>
          <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-600"></div>
        </div>

        <p className="text-lg mt-4">
          <span className="font-bold">Total:</span> {totalPrice().toFixed(2)}
          &#36;
        </p>
      </section>

      {options && (
        <section>
          <div className="max-w-xl mx-auto py-4 px-8 bg-white mt-8 rounded-sm">
            <StripeTestMode />
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm
                paymentState={paymentState}
                setPaymentState={setPaymentState}
              />
            </Elements>
          </div>
        </section>
      )}
    </ContentWrapper>
  );
};

export default Checkout;
