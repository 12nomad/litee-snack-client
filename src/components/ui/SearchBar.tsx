import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { SearchShopValidationSchema } from '../../schemas/shop.schema';

interface ISearchBar {
  register: UseFormRegister<{
    search: string;
  }>;
  handleSubmit: UseFormHandleSubmit<{
    search: string;
  }>;
  onSubmit: ({ search }: SearchShopValidationSchema) => void;
}

const SearchBar = ({ handleSubmit, onSubmit, register }: ISearchBar) => {
  return (
    <form
      className="max-w-screen-sm mb-8 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-1 border-gray-300 focus:ring-night-black focus:border-night-black "
            placeholder="Search Shop..."
            {...register('search')}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-night-black rounded-r-lg border border-night-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-night-black "
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
