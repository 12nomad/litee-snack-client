import { Dispatch, SetStateAction } from 'react';
import { Badge, Spinner } from 'flowbite-react';

import queryService from '../../services/query.service';
import getErrorMessage from '../../utils/get-error-message.util';

interface ICategoryInput {
  currentCategory: string[];
  setCurrentCategory: Dispatch<SetStateAction<string[]>>;
  currentCategoryError: string;
}

const CategoryInput = ({
  currentCategory,
  currentCategoryError,
  setCurrentCategory,
}: ICategoryInput) => {
  const {
    data,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = queryService.categories();

  const onCategorySelect = (slug: string) => {
    if (currentCategory.includes(slug))
      setCurrentCategory((prev) => prev.filter((el) => el !== slug));
    else setCurrentCategory((prev) => [...prev, slug]);
  };

  return (
    <div>
      <label
        htmlFor="category"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Choose at least one category:
      </label>
      {/* FIXME: */}
      <div
        className={`flex flex-wrap items-center ${
          categoriesLoading && 'justify-center'
        } gap-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 ${
          currentCategoryError
            ? 'focus:ring-rose-700 focus:border-rose-700'
            : 'focus:ring-sky-700 focus:border-sky-700'
        }`}
      >
        {categoriesLoading && <Spinner color="failure" />}
        {categoriesError && (
          <p role="alert" className="text-xs text-rose-700 mt-2">
            {getErrorMessage(categoriesError.response.errors).message}
          </p>
        )}
        {data?.getCategories.data?.map((category) => (
          <Badge
            key={category.id}
            className={`cursor-pointer  ${
              currentCategory.includes(category.slug)
                ? 'bg-gray-900 text-white'
                : 'bg-slate-200 text-gray-900'
            } `}
            onClick={() => onCategorySelect(category.slug)}
          >
            {category.slug}
          </Badge>
        ))}
      </div>
      {currentCategoryError && (
        <p role="alert" className="text-xs text-rose-700 mt-2">
          {currentCategoryError}
        </p>
      )}
    </div>
  );
};

export default CategoryInput;
