import { useState } from 'react';
import { Badge, Carousel, Pagination, Spinner } from 'flowbite-react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { AiTwotoneShop } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';

import {
  SearchShopValidationSchema,
  searchShopValidationSchema,
} from '../../../../schemas/shop.schema';
import ErrorHandler from '../../../../components/ui/ErrorHandler';
import SearchBar from '../../../../components/ui/SearchBar';
import queryService from '../../../../services/query.service';
import ContentWrapper from '../../../../components/ui/ContentWrapper';
import ShopHeader from '../../../../components/ui/ShopHeader';

const Shops = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');

  const navigate = useNavigate();

  const {
    data: promoData,
    isLoading: promoLoading,
    error: promoError,
  } = queryService.getPromotedShops();
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = queryService.categories();
  const { data, isLoading, error } = queryService.shops({
    getShopsInput: {
      page: currentPage,
      search: currentSearch,
      slug: currentCategory,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchShopValidationSchema>({
    resolver: zodResolver(searchShopValidationSchema),
  });

  const onCategoryChange = (slug: string) => {
    setCurrentSearch('');
    setCurrentPage(1);
    setCurrentCategory(slug);
  };

  const onReset = () => {
    setCurrentSearch('');
    setCurrentCategory('');
    setCurrentPage(1);
  };

  const onSubmit = ({ search }: SearchShopValidationSchema) => {
    setCurrentCategory('');
    setCurrentPage(1);
    setCurrentSearch(search);
    reset();
  };

  return (
    <section>
      <Helmet>
        <title>Shops | Litee Snack🍔</title>
      </Helmet>

      <ContentWrapper>
        {promoLoading && (
          <Spinner
            color="failure"
            className="flex justify-center items-center w-full"
          />
        )}
        {promoError && <ErrorHandler error={promoError} />}
        {!promoLoading &&
          promoData &&
          promoData.getPromotedShops.data &&
          promoData.getPromotedShops.data.length > 0 && (
            <div className="h-96 w-full lg:w-3/4 mx-auto mb-6">
              <Carousel
                slideInterval={5000}
                leftControl={<></>}
                rightControl={<></>}
              >
                {promoData.getPromotedShops.data.map((el) => (
                  <Link to={`/${el.id}`} key={el.id}>
                    <ShopHeader
                      address={el.address || ''}
                      image={el.image || ''}
                      name={el.name || ''}
                      categories={el.categories}
                    />
                  </Link>
                ))}
              </Carousel>
            </div>
          )}

        <SearchBar
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        {errors.search?.message && (
          <p role="alert" className="text-xs text-rose-700 mt-2">
            {errors.search?.message}
          </p>
        )}

        {!categoriesLoading && !categoriesError && (
          <div className="flex items-center md:justify-center md:flex-wrap gap-5 lg:gap-10 overflow-auto pb-2">
            {categoriesLoading && (
              <Spinner
                color="failure"
                className="flex justify-center items-center w-full"
              />
            )}
            {categoriesError && <ErrorHandler error={categoriesError} />}
            {categories?.getCategories.data?.map((category) => (
              <div
                key={category.id}
                className="cursor-pointer"
                onClick={() => onCategoryChange(category.slug)}
              >
                <div className="w-16 h-16 rounded-full grid place-items-center bg-white mx-auto">
                  <img
                    src={
                      category.image ||
                      'https://cdn-icons-png.flaticon.com/512/3937/3937089.png'
                    }
                    alt={category.name}
                    className="w-8 h-8 mx-auto"
                  />
                </div>
                <p className="capitalize text-center mt-1 font-medium whitespace-nowrap">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        )}

        <>
          <div className="relative">
            <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-1">
              <AiTwotoneShop size={25} />{' '}
              {currentCategory
                ? `"${currentCategory}" Shops`
                : currentSearch
                ? `"${currentSearch}" Shops`
                : 'All Shops'}
              {(currentCategory || currentSearch) && (
                <span
                  className="hidden md:block cursor-pointer text-rusty-red"
                  onClick={onReset}
                >
                  / All Shops &rarr;
                </span>
              )}
            </h2>
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-600"></div>
          </div>

          {(currentCategory || currentSearch) && (
            <span
              className="block md:hidden cursor-pointer text-rusty-red underline font-medium mb-2"
              onClick={onReset}
            >
              All Shops &rarr;
            </span>
          )}

          {/* ${isLoading ? 'grid-cols-1 text-center' : 'grid-cols-4'} */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4`}
          >
            {isLoading && <Spinner color="failure" />}
            {error && <ErrorHandler error={error} />}
            {!isLoading && data && data?.getShops.data && data?.getShops.data.length > 0 && (
              data?.getShops.data.map((shop) => (
                <div
                  key={shop.id}
                  className="max-w-sm cursor-pointer bg-white border border-gray-200 rounded-sm shadow"
                  onClick={() => navigate(`/${shop.id}`)}
                >
                  <img
                    className="rounded-t-sm w-[100%] h-48 object-cover"
                    src={shop.image || 'https://placehold.co/600x400'}
                    alt={shop.name}
                  />
                  <div className="px-4 py-4 align-center">
                    <div className="flex items-center gap-1 w-full mb-2 mt-1">
                      {shop.categories &&
                        shop.categories.map((category) => (
                          <Badge key={category.id} color="gray">
                            {category.slug}
                          </Badge>
                        ))}
                    </div>
                    <h5 className="mb-1 text-xl font-medium tracking-tight text-gray-900">
                      {shop.name}
                    </h5>
                    <div className="w-full h-[1px] bg-slate-200 mt-2 mb-1"></div>
                    <p className=" font-normal text-gray-700 flex items-center">
                      <MdOutlineLocationOn size={17} />{' '}
                      <span>{shop.address}</span>
                    </p>
                  </div>
                </div>
              ))
            )} 
            {!isLoading && data && data?.getShops.data && data?.getShops.data.length === 0 && (
              <p className="ml-1">No shops found...</p>
            )}
          </div>
        </>

        {data?.getShops.data && data.getShops.data.length > 0 && (
          <>
            <Pagination
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
              totalPages={
                data?.getShops.totalItems
                  ? Math.ceil(data?.getShops.totalItems / 10)
                  : 0
              }
              className="mt-6 flex justify-center"
              showIcons
              previousLabel=""
              nextLabel=""
            />
            <p className="text-sm text-center mt-2">
              Page <span className="font-bold">{currentPage}</span> of{' '}
              {data?.getShops.totalItems
                ? Math.ceil(data?.getShops.totalItems / 10)
                : 0}
            </p>
          </>
        )}
      </ContentWrapper>
    </section>
  );
};

export default Shops;
