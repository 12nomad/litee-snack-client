import { IoMdRemoveCircle, IoMdAddCircle } from 'react-icons/io';
import useCartStore from '../../../../../stores/cart.store';

interface IProductOptions {
  product: {
    __typename?: 'Product' | undefined;
    id: number;
    name: string;
    price: number;
    image?: string | null | undefined;
    description: string;
    options?:
      | {
          __typename?: 'Option' | undefined;
          extra?: number | null | undefined;
          label: string;
        }[]
      | null
      | undefined;
  };
}

const ProductOptions = ({ product }: IProductOptions) => {
  const onAddItemOption = useCartStore((s) => s.onAddItemOption);
  const currentOrderArr = useCartStore((s) => s.currentOrderArr);
  const isInOption = useCartStore((s) => s.isInOption);
  const onAddItemOptionQuantity = useCartStore(
    (s) => s.onAddItemOptionQuantity,
  );
  const onRemoveItemOptionQuantity = useCartStore(
    (s) => s.onRemoveItemOptionQuantity,
  );

  return (
    <div>
      <p className="mb-1 font-medium">Options:</p>
      {product.options!.map((el) => (
        <div key={el.label} className="flex items-center gap-4">
          <div key={el.label} className="flex items-center">
            <input
              id={el.label}
              type="checkbox"
              className="cursor-pointer w-4 h-4 text-night-black bg-gray-100 border-gray-300 rounded focus:ring-night-black"
              onChange={() =>
                onAddItemOption(product.id, el.label, el.extra || 0)
              }
              checked={isInOption(product.id, el.label)}
            />
            <label
              htmlFor={el.label}
              className="ml-2 text-sm text-gray-900 dark:text-gray-300"
            >
              {el.label} <span className="font-medium">({el.extra}&#36;)</span>
            </label>
          </div>

          {isInOption(product.id, el.label) && (
            <div className="flex items-center gap-2">
              <IoMdRemoveCircle
                className="cursor-pointer"
                onClick={() => onRemoveItemOptionQuantity(product.id, el.label)}
              />
              <p className="font-medium">
                {
                  currentOrderArr
                    .find((el) => el.productId === product.id)
                    ?.orderChoices?.find((choice) => choice.label === el.label)
                    ?.quantity
                }
              </p>

              <IoMdAddCircle
                className="cursor-pointer"
                onClick={() => onAddItemOptionQuantity(product.id, el.label)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
