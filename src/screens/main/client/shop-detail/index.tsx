import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';
import { useState } from 'react';

import { OrderOptionInputType } from '../../../../gql/generated/graphql';
import Loading from '../../../../components/ui/Loading';
import ErrorHandler from '../../../../components/ui/ErrorHandler';
import useCartStore from '../../../../stores/cart.store';
import OrderModal from './components/OrderModal';
import queryService from '../../../../services/query.service';
import mutationService from '../../../../services/mutation.service';
import ProductOptions from './components/ProductOptions';
import ItemQuantity from './components/ItemQuantity';
import ShopHeader from '../../../../components/ui/ShopHeader';
import ContentWrapper from '../../../../components/ui/ContentWrapper';
import useUserQuery from '../../../../hooks/useUserQuery';

const ShopDetail = () => {
  const clearCurrentOrderArr = useCartStore((s) => s.clearCurrentOrderArr);
  const currentShopId = useCartStore((s) => s.currentShopId);
  const setCurrentShopId = useCartStore((s) => s.setCurrentShopId);
  const params = useParams<{ shopId: string }>();

  if (!params.shopId || !Boolean(parseInt(params.shopId))) {
    clearCurrentOrderArr();
    return <Navigate to="/" replace />;
  }

  if (currentShopId > 0 && currentShopId !== +params.shopId!) {
    clearCurrentOrderArr();
    setCurrentShopId(0);
  }

  const [modalOpen, setModalOpen] = useState(false);
  const currentOrderArr = useCartStore((s) => s.currentOrderArr);
  const onAddItem = useCartStore((s) => s.onAddItem);
  const isInCart = useCartStore((s) => s.isInCart);
  const totalItems = useCartStore((s) => s.totalItems);
  const currentOrderId = useCartStore((s) => s.currentOrderId);

  const user = useUserQuery();
  const navigate = useNavigate();
  const { data, error, isLoading } = queryService.shopDetails({
    getShopByIdInput: { id: +params.shopId },
  });

  const onSuccess = () => {
    navigate(`/${params.shopId}/checkout`);
  };
  const {
    mutate,
    isLoading: createOrderLoading,
    error: createOrderError,
  } = mutationService.createOrder(onSuccess);

  if (isLoading) return <Loading />;

  if (error) return <ErrorHandler error={error} />;

  if (createOrderError) return <ErrorHandler error={createOrderError} />;

  const onCheckout = () => {
    if (!user?.verified) return navigate(`/verify-account`);

    const orderOptions = currentOrderArr.reduce((acc, el) => {
      return [
        ...acc,
        {
          productId: el.productId,
          quantity: el.quantity,
          orderChoices:
            el.orderChoices &&
            el.orderChoices.map((el) => ({
              label: el.label,
              quantity: el.quantity,
            })),
        },
      ];
    }, [] as OrderOptionInputType[]);

    mutate({
      createOrderInput: {
        shopId: +params.shopId!,
        orderOptions: orderOptions,
        orderId: currentOrderId,
      },
    });
  };

  return (
    <section>
      <ShopHeader
        address={data.getShopById.data?.address || ''}
        image={data.getShopById.data?.image || ''}
        name={data.getShopById.data?.name || ''}
        categories={data.getShopById.data?.categories}
      />

      {modalOpen && (
        <OrderModal
          createOrderLoading={createOrderLoading}
          onCheckout={onCheckout}
          setModalOpen={setModalOpen}
        />
      )}

      <ContentWrapper>
        <div className="relative mb-2">
          <div className="absolute bottom-3 left-0 w-full h-[1px] bg-slate-600"></div>
          <div className="flex items-baseline gap-4">
            <div
              className="relative cursor-pointer"
              onClick={() => totalItems() > 0 && setModalOpen(true)}
            >
              <BsCartPlus size={25} />
              <span
                className={`text-white absolute -top-2 -right-[13px] w-5 h-5 rounded-full grid place-items-center text-xs font-bold ${
                  currentOrderArr.length > 0 ? 'bg-rusty-red' : 'bg-black '
                }`}
              >
                {totalItems()}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-1 ">
              <span>Shop Now</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
          {data.getShopById.data?.products &&
          data.getShopById.data?.products?.length > 0 ? (
            data.getShopById.data?.products.map((product) => (
              <div
                key={product.id}
                className={`w-full bg-white border rounded-sm shadow flex items-center ${
                  isInCart(product.id)
                    ? ' border-night-black'
                    : ' border-gray-200'
                }`}
              >
                <div className="px-4 py-4 align-center w-full">
                  <h5 className="mb-1 text-xl font-medium tracking-tight text-gray-900">
                    {product.name}
                  </h5>
                  <p className="flex items-center gap-1 w-full mb-2 mt-1">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="font-medium">{product.price}&#36;</p>
                    {isInCart(product.id) ? (
                      <ItemQuantity
                        product={product}
                        shopId={+params.shopId!}
                      />
                    ) : (
                      <p
                        className="rounded-sm text-sm py-1 px-2 cursor-pointer bg-night-black text-white"
                        onClick={() =>
                          onAddItem({
                            shopId: +params.shopId!,
                            productId: product.id,
                            productImage: product.image!,
                            productName: product.name,
                            productPrice: product.price,
                          })
                        }
                      >
                        Add to cart
                      </p>
                    )}
                  </div>
                  {isInCart(product.id) &&
                    product.options &&
                    product.options.length > 0 && (
                      <ProductOptions product={product} />
                    )}
                </div>
                <img
                  className="rounded-r-sm h-32 object-cover w-32 self-start"
                  src={product.image || 'https://placehold.co/600x400'}
                  alt={product.name}
                />
              </div>
            ))
          ) : (
            <p>No available product at the moment...</p>
          )}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default ShopDetail;
