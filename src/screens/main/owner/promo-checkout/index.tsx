import usePromoCheckout from "./hooks/usePromoCheckout";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { Badge } from "flowbite-react";
import { FaRegCreditCard } from "react-icons/fa";
import { useState } from "react";
import { IPaymentState } from "../../../../interfaces/IPaymentState.interface";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../../components/stripe/CheckoutForm";
import ErrorHandler from "../../../../components/ui/ErrorHandler";
import Loading from "../../../../components/ui/Loading";
import StripeTestMode from "../../../../components/stripe/StripeTestMode";
import queryService from "../../../../services/query.service";
import ContentWrapper from "../../../../components/ui/ContentWrapper";

const PromoCheckout = () => {
  const params = useParams<{ shopId: string; promoDuration: string }>();
  const [paymentState, setPaymentState] = useState<IPaymentState>({
    paymentLoading: false,
    paymentSuccess: false,
    paymentError: null,
  });
  const { data, error, isLoading } = queryService.ownerShopDetails({
    getOwnerIndividualShopInput: { id: params.shopId ? +params.shopId : 0 },
  });
  const { promoCheckoutError, promoCheckoutLoading, stripePromise, options } =
    usePromoCheckout({
      promoDuration: params.promoDuration ? +params.promoDuration : 0,
      shopId: params.shopId ? +params.shopId : 0,
    });

  if (isLoading) return <Loading />;
  if (error) {
    return <ErrorHandler error={error} />;
  }

  if (promoCheckoutLoading) return <Loading />;
  if (promoCheckoutError) {
    return <ErrorHandler error={promoCheckoutError} />;
  }

  return (
    <ContentWrapper>
      <Helmet>
        <title>Promotion Checkout | Litee Snack🍔</title>
      </Helmet>

      <section>
        <div className="relative">
          <h2 className="text-2xl font-bold mb-3 flex  gap-1 ">
            <FaRegCreditCard size={25} /> <span>Checkout</span>
          </h2>
          <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-600"></div>
        </div>

        <div className="mt-3">
          <h4 className="text-lg mb-2">Shop to be promoted:</h4>
          <div className="flex gap-2 items-center border-sm relative">
            <div>
              <img
                src={
                  data.getOwnerIndividualShop.data?.image ||
                  "https://placehold.co/600x400"
                }
                alt={data.getOwnerIndividualShop.data?.name}
                className="object-cover w-28 h-28 md:w-24 md:h-24 rounded-sm"
              />
            </div>
            <div>
              <h2 className="font-medium text-xl cursor-pointer">
                {data.getOwnerIndividualShop.data?.name}
              </h2>
              <div className="flex items-center gap-1 w-full mt-1 mb-3">
                {data.getOwnerIndividualShop.data?.categories?.map(
                  (category) => (
                    <Badge
                      key={category.id}
                      className="bg-slate-200 text-night-black"
                    >
                      {category.slug}
                    </Badge>
                  )
                )}
              </div>
              <p className="font-normal text-gray-700 flex items-center">
                <MdOutlineLocationOn size={17} />{" "}
                <span>{data.getOwnerIndividualShop.data?.address}</span>
              </p>
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-400"></div>
          </div>

          <h4 className="mt-4">
            <span className="text-lg">Total:</span>{" "}
            <span className="font-medium">
              {params.promoDuration && +params.promoDuration === 7
                ? 29.99
                : 99.99}
              &#36;
            </span>{" "}
            for {params.promoDuration} days promotion
          </h4>
        </div>
      </section>

      {options && (
        <section>
          <div className="max-w-xl mx-auto py-4 px-8 bg-white mt-8 rounded-md border">
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

export default PromoCheckout;
