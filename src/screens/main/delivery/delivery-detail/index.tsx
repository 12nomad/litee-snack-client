import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";

import ContentWrapper from "../../../../components/ui/ContentWrapper";
import queryService from "../../../../services/query.service";
import Loading from "../../../../components/ui/Loading";
import ErrorHandler from "../../../../components/ui/ErrorHandler";
import mutationService from "../../../../services/mutation.service";
import { OrderStatus } from "../../../../gql/generated/graphql";
import getErrorMessage from "../../../../utils/get-error-message.util";

const DeliveryDetail = () => {
  const params = useParams<{ orderId: string }>();

  if (!params.orderId) return <Navigate to="/" replace />;

  const { data, isLoading, error } = queryService.deliveryOrderDetail({
    deliveryOrderDetailInput: { id: +params.orderId },
  });
  const {
    mutate,
    isLoading: editOrderLoading,
    error: editOrderError,
  } = mutationService.editOrder(
    data?.deliveryOrderDetail.data?.status,
    undefined,
    { deliveryOrderDetailInput: { id: +params.orderId } }
  );

  if (isLoading) return <Loading />;

  if (error) return <ErrorHandler error={error} />;

  const onOrderStatusChange = (val: OrderStatus) => {
    if (window.confirm("Are you sure?"))
      mutate({ editOrderInput: { id: +params.orderId!, status: val } });
  };

  return (
    <ContentWrapper>
      <Helmet>
        <title>Delivery Detail | Litee Snack🍔</title>
      </Helmet>

      <div className="border border-night-black rounded-sm max-w-md mx-auto">
        <h4 className="bg-night-black text-white text-lg text-center py-4 font-bold">
          Order #{data.deliveryOrderDetail.data?.id}
        </h4>

        <div className="m-4">
          <div className="relative">
            <p className="mt-4">
              <span className="font-medium">Shop:</span>{" "}
              {data.deliveryOrderDetail.data?.shop?.name}
            </p>
            <p>
              <span className="font-medium">Customer:</span>{" "}
              {data.deliveryOrderDetail.data?.customer?.name}
            </p>
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-400"></div>
          </div>

          <div className="mt-6">
            {data.deliveryOrderDetail.data?.status === OrderStatus.Ready && (
              <button
                className="py-2 mx-auto rounded-md bg-night-black text-white w-full inline-block font-bold"
                onClick={() => onOrderStatusChange(OrderStatus.Picked)}
              >
                {editOrderLoading ? <Spinner color="failure" /> : "Pick Order"}
              </button>
            )}
            {data.deliveryOrderDetail.data?.status === OrderStatus.Picked && (
              <button
                className="py-2 mx-auto rounded-md bg-rusty-red text-white w-full inline-block font-bold"
                onClick={() => onOrderStatusChange(OrderStatus.Delivered)}
              >
                {editOrderLoading ? (
                  <Spinner color="failure" />
                ) : (
                  "Order Delivered"
                )}
              </button>
            )}
            {data.deliveryOrderDetail.data?.status ===
              OrderStatus.Delivered && (
              <p className="py-2 text-center font-bold">
                Order delivered &#x2713;
              </p>
            )}
            {editOrderError && (
              <p role="alert" className="text-xs text-rose-700 mt-2 font-bold">
                <sup>*</sup>{" "}
                {getErrorMessage(editOrderError.response.errors).message}
              </p>
            )}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default DeliveryDetail;
