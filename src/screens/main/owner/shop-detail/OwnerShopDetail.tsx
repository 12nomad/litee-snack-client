import { Helmet } from 'react-helmet-async';
import { BiDollarCircle } from 'react-icons/bi';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import Loading from '../../../../components/ui/Loading';
import ErrorHandler from '../../../../components/ui/ErrorHandler';
import queryService from '../../../../services/query.service';
import ShopHeader from '../../../../components/ui/ShopHeader';
import ContentWrapper from '../../../../components/ui/ContentWrapper';
import { Tooltip } from 'flowbite-react';
import { MdDeleteForever } from 'react-icons/md';
import mutationService from '../../../../services/mutation.service';

const OwnerShopDetail = () => {
  const params = useParams<{ shopId: string }>();

  if (!params.shopId || !Boolean(parseInt(params.shopId)))
    return <Navigate to="/" replace />;

  const navigate = useNavigate();
  const { data, error, isLoading } = queryService.ownerShopDetails({
    getOwnerIndividualShopInput: { id: +params.shopId },
  });
  const {
    mutate,
    isLoading: deleteProductLoading,
    error: deleteProductError,
  } = mutationService.deleteProduct({
    getOwnerIndividualShopInput: { id: +params.shopId },
  });

  if (isLoading) return <Loading />;

  if (error) return <ErrorHandler error={error || deleteProductError} />;

  const onDeleteProduct = (productId: number) => {
    if (window.confirm('Are you sure?'))
      mutate({ deleteProductInput: { id: productId } });
  };

  return (
    <section>
      <Helmet>
        <title>Shop Details | Litee Snack🍔</title>
      </Helmet>

      <ShopHeader
        address={data.getOwnerIndividualShop.data?.address || ''}
        name={data.getOwnerIndividualShop.data?.name || ''}
        categories={data.getOwnerIndividualShop.data?.categories}
        image={data.getOwnerIndividualShop.data?.image || ''}
      />

      <ContentWrapper>
        <div className="relative flex flex-wrap items-center whitespace-nowrap gap-3">
          <p
            className=" text-white bg-night-black px-4 py-2 rounded-sm font-bold cursor-pointer"
            onClick={() => navigate(`/${params.shopId}/add-product`)}
          >
            Add New Product &rarr;
          </p>
          <p
            className=" text-white bg-amber-400 px-4 py-2 rounded-sm font-bold cursor-pointer"
            onClick={() => navigate(`/${params.shopId}/orders`)}
          >
            Check Orders &rarr;
          </p>
          <p
            className=" text-white bg-sky-700 px-4 py-2 rounded-sm font-bold cursor-pointer"
            onClick={() =>
              navigate(`/${params.shopId}/edit-shop`, {
                state: {
                  shopId: data.getOwnerIndividualShop.data?.id,
                  name: data.getOwnerIndividualShop.data?.name,
                  address: data.getOwnerIndividualShop.data?.address,
                  image: data.getOwnerIndividualShop.data?.image,
                  categories:
                    data.getOwnerIndividualShop.data?.categories?.reduce(
                      (acc, el) => {
                        return [...acc, el.slug];
                      },
                      [] as string[],
                    ),
                },
              })
            }
          >
            Edit Shop &rarr;
          </p>
          {data?.getOwnerIndividualShop.data?.isPromoted ? (
            <p className=" text-white bg-rusty-red px-4 py-2 rounded-sm font-bold ">
              Shop Promoted &#9733;
            </p>
          ) : (
            <p
              className=" text-white bg-rusty-red px-4 py-2 rounded-sm font-bold cursor-pointer"
              onClick={() => navigate(`/${params.shopId}/buy-promotion`)}
            >
              Buy promotion &rarr;
            </p>
          )}
          <div className="absolute -bottom-3 left-0 w-full h-[1px] bg-slate-600"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
          {data.getOwnerIndividualShop.data?.products &&
          data.getOwnerIndividualShop.data?.products?.length > 0 ? (
            data.getOwnerIndividualShop.data?.products.map((product) => (
              <div
                key={product.id}
                className="flex gap-2 items-center border-sm relative mt-8 w-auto"
              >
                <div>
                  <img
                    src={product.image || 'https://placehold.co/600x400'}
                    alt={product.name}
                    className="object-cover w-24 h-24"
                  />
                </div>
                <div className="w-full">
                  <h2 className="font-medium text-xl">{product.name}</h2>
                  <div className="flex items-center gap-1 w-full mt-1 mb-3">
                    <p className="font-normal text-gray-700 flex items-center">
                      {product.description}
                    </p>
                  </div>
                  <div className="font-medium flex items-center justify-between ">
                    <p>{product.price}&#36;</p>
                    <Tooltip content="Delete Product">
                      <MdDeleteForever
                        size={25}
                        className={`cursor-pointer text-rusty-red ${
                          deleteProductLoading &&
                          'cursor-not-allowed pointer-events-none'
                        }`}
                        onClick={() => onDeleteProduct(product.id)}
                      />
                    </Tooltip>
                  </div>
                </div>
                <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-400"></div>
              </div>
            ))
          ) : (
            <p className="mt-8">No available product at the moment...</p>
          )}
        </div>

        {/* FIXME: Sales  */}
        {/* {data.getOwnerIndividualShop.data?.products &&
          data.getOwnerIndividualShop.data?.products?.length > 0 && (
            <h3 className="mt-16 font-semibold flex items-center justify-center gap-1 text-lg">
              <BiDollarCircle size={22} />
              Sales
            </h3>
          )} */}
      </ContentWrapper>
    </section>
  );
};

export default OwnerShopDetail;
