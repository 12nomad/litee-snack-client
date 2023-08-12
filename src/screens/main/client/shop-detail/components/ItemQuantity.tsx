import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';
import useCartStore from '../../../../../stores/cart.store';

interface IItemQuantity {
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
  shopId: number;
}

const ItemQuantity = ({ product, shopId }: IItemQuantity) => {
  const currentOrderArr = useCartStore((s) => s.currentOrderArr);
  const onAddItem = useCartStore((s) => s.onAddItem);
  const onRemoveItem = useCartStore((s) => s.onRemoveItem);

  return (
    <div className="flex items-center gap-2">
      <IoMdRemoveCircle
        className="cursor-pointer"
        onClick={() => onRemoveItem(product.id)}
      />
      <p className="font-medium">
        {currentOrderArr.find((el) => el.productId === product.id)?.quantity}
      </p>
      <IoMdAddCircle
        className="cursor-pointer"
        onClick={() =>
          onAddItem({
            shopId,
            productId: product.id,
            productImage: product.image!,
            productName: product.name,
            productPrice: product.price,
          })
        }
      />
    </div>
  );
};

export default ItemQuantity;
