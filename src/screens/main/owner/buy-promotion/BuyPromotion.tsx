import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { RiShieldStarFill } from "react-icons/ri";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import ContentWrapper from "../../../../components/ui/ContentWrapper";
import useUserQuery from "../../../../hooks/useUserQuery";
import useCartStore from "../../../../stores/cart.store";

const BuyPromotion = () => {
  const params = useParams<{ shopId: string }>();
  const user = useUserQuery();
  const [selectedOption, setSelectedOption] = useState<7 | 31 | null>();
  const setCurrentShopId = useCartStore((s) => s.setCurrentShopId);
  const navigate = useNavigate();

  if (!params.shopId) return <Navigate to="/" replace />;

  const onPromoCheckout = () => {
    setCurrentShopId(+params.shopId!);

    if (!user?.verified) return navigate(`/verify-account`);

    return navigate(`/${params.shopId}/${selectedOption}/checkout`);
  };

  return (
    <ContentWrapper>
      <Helmet>
        <title>Promotion | Litee Snack🍔</title>
      </Helmet>

      <section>
        <div className="text-center">
          <h2 className=" font-bold text-2xl md:text-4xl lg:text-6xl">
            Get your shop promoted!
          </h2>
          <p className="mt-6 lg:text-lg">
            Select one option below and let's get started:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-12 px-4 md:px-0">
          <article
            className={`bg-white py-8 px-8 md:px-12 cursor-pointer rounded-sm text-center w-full md:w-auto ${
              selectedOption === 7 && "scale-110"
            }`}
            onClick={() => setSelectedOption(7)}
          >
            <h3 className="text-2xl font-medium">Basic</h3>
            <div className="flex items-end gap-2 mt-4">
              <p className="font-bold text-3xl">29.99&#36;</p>
              <p>for</p>
              <p className="font-bold text-3xl">7 days</p>
            </div>
          </article>
          <article
            className={`bg-rusty-red text-white  py-8 px-8 md:px-12 cursor-pointer rounded-sm  text-center w-full md:w-auto ${
              selectedOption === 31 && "scale-110"
            }`}
            onClick={() => setSelectedOption(31)}
          >
            <h3 className="flex items-center gap-1 justify-center text-2xl font-medium">
              <RiShieldStarFill size={20} /> Premium
            </h3>
            <div className="flex items-end gap-2 mt-4">
              <p className="font-bold text-3xl">99.99&#36;</p>
              <p>for</p>
              <p className="font-bold text-3xl">31 days</p>
            </div>
          </article>
        </div>

        {selectedOption && (
          <p
            className=" text-white bg-night-black px-4 py-2 rounded-sm font-bold cursor-pointer text-center w-44 mx-auto mt-8"
            onClick={onPromoCheckout}
          >
            Go to checkout &rarr;
          </p>
        )}
      </section>
    </ContentWrapper>
  );
};

export default BuyPromotion;
