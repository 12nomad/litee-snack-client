import { Spinner } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";

import { OrderStatus } from "../../../../gql/generated/graphql";
import getErrorMessage from "../../../../utils/get-error-message.util";
import Loading from "../../../../components/ui/Loading";
import ErrorHandler from "../../../../components/ui/ErrorHandler";
import queryService from "../../../../services/query.service";
import mutationService from "../../../../services/mutation.service";
import ContentWrapper from "../../../../components/ui/ContentWrapper";

const OwnerShopOrderDetail = () => {
  const params = useParams<{ shopId: string; orderId: string }>();

  if (!params.shopId || !params.orderId) return <Navigate to="/" replace />;

  const { data, isLoading, error } = queryService.ownerShopOrderDetail({
    getShopOrderInput: { id: +params.orderId },
  });
  const {
    mutate,
    isLoading: editOrderLoading,
    error: editOrderError,
  } = mutationService.editOrder(data?.getShopOrder.data?.status, {
    getShopOrderInput: { id: +params.orderId },
  });

  if (isLoading) return <Loading />;

  if (error) return <ErrorHandler error={error} />;

  const onOrderStatusChange = (val: OrderStatus) => {
    if (window.confirm("Are you sure?"))
      mutate({ editOrderInput: { id: +params.orderId!, status: val } });
  };

  return (
    <ContentWrapper>
      <Helmet>
        <title>Order Detail | Litee Snack🍔</title>
      </Helmet>

      <div className="border border-night-black rounded-sm max-w-md mx-auto">
        <h4 className="bg-night-black text-white text-lg text-center py-4 font-bold">
          Order #{data.getShopOrder.data?.id}
        </h4>

        <div className="m-4">
          {data.getShopOrder.data?.orderItems &&
            data.getShopOrder.data.orderItems.map((item) => (
              <div className="relative" key={item.id}>
                <p className="mt-4">
                  <span className="font-medium">Product:</span>{" "}
                  {item.product?.name}
                </p>
                <p>
                  <span className="font-medium">Quantity:</span> {item.quantity}
                </p>
                <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-400"></div>
                {item.orderChoices?.map((el, idx) => (
                  <p key={el.label + `${idx}`}>
                    <span className="font-medium">Option:</span>{" "}
                    {el.label ? el.label : "none"}
                  </p>
                ))}
              </div>
            ))}

          <div className="mt-6">
            {data.getShopOrder.data?.status === OrderStatus.Pending && (
              <button
                className="py-2 mx-auto rounded-md bg-night-black text-white w-full inline-block font-bold"
                onClick={() => onOrderStatusChange(OrderStatus.Preparing)}
              >
                {editOrderLoading ? (
                  <Spinner color="failure" />
                ) : (
                  "Prepare Order"
                )}
              </button>
            )}
            {data.getShopOrder.data?.status === OrderStatus.Preparing && (
              <button
                className="py-2 mx-auto rounded-md bg-rusty-red text-white w-full inline-block font-bold"
                onClick={() => onOrderStatusChange(OrderStatus.Ready)}
              >
                {editOrderLoading ? (
                  <Spinner color="failure" />
                ) : (
                  "Ready To Ship"
                )}
              </button>
            )}
            {data.getShopOrder.data?.status === OrderStatus.Ready && (
              <p className="py-2 text-center font-bold">
                Order is ready for delivery &#x2713;
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

export default OwnerShopOrderDetail;
