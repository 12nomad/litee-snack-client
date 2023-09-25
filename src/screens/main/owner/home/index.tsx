import { Badge } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { AiTwotoneShop } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import Loading from "../../../../components/ui/Loading";
import ErrorHandler from "../../../../components/ui/ErrorHandler";
import queryService from "../../../../services/query.service";
import ContentWrapper from "../../../../components/ui/ContentWrapper";

const OwnerShops = () => {
  const { data, error, isLoading } = queryService.ownerShops();
  const navigate = useNavigate();

  if (isLoading) return <Loading />;

  if (error) return <ErrorHandler error={error} />;

  return (
    <ContentWrapper>
      <Helmet>
        <title>Your Shops | Litee Snack🍔</title>
      </Helmet>

      <div className="relative flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-1">
          <AiTwotoneShop size={25} /> <span>Your Shops</span>
        </h2>
        <p
          className="text-rusty-red font-bold cursor-pointer mb-3"
          onClick={() => navigate("/create-shop")}
        >
          Create new shop &rarr;
        </p>
        <div className="absolute bottom-3 left-0 w-full h-[1px] bg-slate-600"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 mt-2">
        {data.getOwnerShops.data && data.getOwnerShops.data.length > 0 ? (
          data.getOwnerShops.data.map((shop) => (
            <div
              key={shop.id}
              className="w-full flex flex-row gap-2 items-center border-sm relative"
            >
              <div className="max-w-[6rem] h-full">
                <img
                  src={shop.image || "https://placehold.co/600x400"}
                  alt={shop.name}
                  className="object-cover w-full h-full rounded-sm"
                />
              </div>
              <div>
                <h2
                  className="font-medium text-xl cursor-pointer"
                  onClick={() => navigate(`/${shop.id}`)}
                >
                  {shop.name}
                </h2>
                <div className="flex items-center gap-1 w-full mt-1 mb-3">
                  {shop.categories?.map((category) => (
                    <Badge
                      key={category.id}
                      className="bg-slate-200 text-night-black"
                    >
                      {category.slug}
                    </Badge>
                  ))}
                </div>
                <p className="font-normal text-gray-700 flex items-center">
                  <MdOutlineLocationOn size={17} /> <span>{shop.address}</span>
                </p>
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-400"></div>
            </div>
          ))
        ) : (
          <p className="ml-1">You have no shops...</p>
        )}
      </div>
    </ContentWrapper>
  );
};

export default OwnerShops;
