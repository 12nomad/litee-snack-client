import { useEffect, useState } from 'react';
import useCartStore from '../../../../../stores/cart.store';
import useUserQuery from '../../../../../hooks/useUserQuery';
import { StripeElementsOptions } from '@stripe/stripe-js';
import stripePromise from '../../../../../utils/stripe-promise.util';
import mutationService from '../../../../../services/mutation.service';

const useCheckout = (onSuccess: () => void) => {
  const [stripeClientSecret, setStripeClientSecret] = useState<string | null>(
    null,
  );
  const user = useUserQuery();
  const stripePaymentIntent = useCartStore((s) => s.stripePaymentIntent);
  const currentOrderId = useCartStore((s) => s.currentOrderId);
  const {
    mutate,
    isLoading: checkoutLoading,
    error: checkoutError,
  } = mutationService.createPaymentIntent(setStripeClientSecret, onSuccess);

  useEffect(() => {
    mutate({
      createPaymentIntentInput: {
        stripePaymentIntentId: stripePaymentIntent || '',
        stripeCustomerId: user?.stripeCustomerId || '',
        orderId: currentOrderId,
      },
    });
  }, []);

  let options: StripeElementsOptions | null = null;

  if (stripeClientSecret) {
    options = {
      clientSecret: stripeClientSecret!,
      appearance: { theme: 'flat' },
    };
  }

  return { checkoutLoading, checkoutError, stripePromise, options };
};

export default useCheckout;
