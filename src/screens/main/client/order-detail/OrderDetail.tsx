import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import useOrderStatusSubscription from "./hooks/useOrderStatusSubscription";
import Loading from "../../../../components/ui/Loading";
import ErrorHandler from "../../../../components/ui/ErrorHandler";
import queryService from "../../../../services/query.service";
import ContentWrapper from "../../../../components/ui/ContentWrapper";

const OrderDetail = () => {
  const params = useParams<{ orderId: string }>();

  const { data, isLoading, error } = queryService.orderDetail({
    getOrderInput: { id: params.orderId ? +params.orderId : 0 },
  });
  const { newStatusSub } = useOrderStatusSubscription({
    orderStatusInput: { id: params.orderId ? +params.orderId : 0 },
  });

  if (isLoading) return <Loading />;

  if (error) return <ErrorHandler error={error} />;

  return (
    <section>
      <Helmet>
        <title>Order | Litee Snack🍔</title>
      </Helmet>

      <ContentWrapper>
        <div className="border border-night-black rounded-sm max-w-md mx-auto">
          <h4 className="bg-night-black text-white text-lg text-center py-4 font-bold">
            Order #{data.getOrder.data?.id}
          </h4>
          <h5 className="text-lg text-center my-6">
            <span className="font-medium">
              {data.getOrder.data?.total}&#36;
            </span>
          </h5>
          <div className="m-4">
            <div className="relative">
              <p>
                <span className="font-medium">From:</span>{" "}
                {data.getOrder.data?.shop?.name}
              </p>
              <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-400"></div>
            </div>

            <div className="relative">
              <p className="mt-4">
                <span className="font-medium">To:</span>{" "}
                {data.getOrder.data?.customer?.name}
              </p>
              <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-400"></div>
            </div>

            <div className="relative">
              <p className="mt-4">
                <span className="font-medium">Driver:</span>{" "}
                {newStatusSub
                  ? newStatusSub.orderStatus.driver?.name
                  : data.getOrder.data?.driver?.name
                  ? data.getOrder.data?.driver?.name
                  : "no assigned driver yet"}
              </p>
              <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-400"></div>
            </div>
          </div>
          <p className="mt-6 text-center text-xl">
            <span className="font-medium underline">Status:</span>{" "}
            {newStatusSub
              ? newStatusSub.orderStatus.status
              : data.getOrder.data?.status}
          </p>
          <p className="text-sm text-center mb-6 mt-2">
            <sup>*</sup>
            get live update on your order here
          </p>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default OrderDetail;
