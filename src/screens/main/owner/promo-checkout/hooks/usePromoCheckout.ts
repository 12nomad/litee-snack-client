import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../../../../stores/cart.store';
import useUserQuery from '../../../../../hooks/useUserQuery';
import { StripeElementsOptions } from '@stripe/stripe-js';
import stripePromise from '../../../../../utils/stripe-promise.util';
import mutationService from '../../../../../services/mutation.service';

const usePromoCheckout = ({
  promoDuration,
  shopId,
}: {
  shopId: number;
  promoDuration: number;
}) => {
  const [stripeClientSecret, setStripeClientSecret] = useState<string | null>(
    null,
  );
  const navigate = useNavigate();
  const user = useUserQuery();
  const stripePaymentIntent = useCartStore((s) => s.stripePaymentIntent);
  const {
    mutate,
    isLoading: promoCheckoutLoading,
    error: promoCheckoutError,
  } = mutationService.createPromoPaymentIntent(setStripeClientSecret);

  useEffect(() => {
    if (
      !shopId ||
      !Boolean(shopId) ||
      !promoDuration ||
      !Boolean(promoDuration)
    )
      return navigate('/', { replace: true });

    mutate({
      createPromotionPaymentIntentInput: {
        amount: promoDuration === 7 ? 2999 : 9999,
        promoDuration: promoDuration === 7 ? 7 : 31,
        shopId: shopId,
        stripePaymentIntentId: stripePaymentIntent || '',
        stripeCustomerId: user?.stripeCustomerId || '',
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

  return { promoCheckoutLoading, promoCheckoutError, stripePromise, options };
};

export default usePromoCheckout;
