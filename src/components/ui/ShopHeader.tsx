import { Badge } from 'flowbite-react';
import { AiTwotoneShop } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';

interface IShopHeader {
  image: string;
  name: string;
  address: string;
  categories:
    | {
        __typename?: 'Category' | undefined;
        id: number;
        name: string;
        slug: string;
        image?: string | null | undefined;
      }[]
    | null
    | undefined;
}

const ShopHeader = ({ address, categories, image, name }: IShopHeader) => {
  return (
    <header
      style={
        !image
          ? { background: '#DE3C4B' }
          : {
              background: `url(${image})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }
      }
      className="w-full h-64 md:h-96 flex justify-start items-center"
    >
      <div className="bg-white p-4 md:p-8 rounded-sm">
        <h1 className="text-lg md:text-2xl font-medium flex items-center gap-1">
          <AiTwotoneShop className="" /> {name}
        </h1>
        <div className="flex items-center gap-1 w-full mt-1 mb-3">
          {categories &&
            categories.map((category) => (
              <Badge key={category.id} color="gray">
                {category.slug}
              </Badge>
            ))}
        </div>
        <p className="font-normal text-gray-700 flex items-center">
          <MdOutlineLocationOn size={17} /> <span>{address}</span>
        </p>
      </div>
    </header>
  );
};

export default ShopHeader;
