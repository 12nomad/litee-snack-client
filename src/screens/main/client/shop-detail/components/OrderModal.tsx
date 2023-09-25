import { BsCartPlus } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import useCartStore from "../../../../../stores/cart.store";
import { Spinner } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

interface IOrderModal {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  createOrderLoading: boolean;
  onCheckout: () => void;
}

const OrderModal = ({
  setModalOpen,
  createOrderLoading,
  onCheckout,
}: IOrderModal) => {
  const currentOrderArr = useCartStore((s) => s.currentOrderArr);
  const itemPrice = useCartStore((s) => s.itemPrice);
  const totalPrice = useCartStore((s) => s.totalPrice);

  return (
    <div
      className="fixed z-50 top-0 left-0 bg-black/40 h-screen w-full grid place-items-center"
      onClick={() => setModalOpen(false)}
    >
      <div
        className="bg-slate-50 w-full h-full lg:w-3/4 lg:h-3/4 rounded-sm relative px-3 lg:px-10 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdCloseCircle
          size={25}
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => setModalOpen(false)}
        />
        <div className="relative">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-1 mt-8">
            <BsCartPlus size={25} /> <span>Confirm Your Order</span>
          </h2>
          <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-600"></div>
        </div>
        {currentOrderArr.map((el) => (
          <div
            key={el.productId}
            className="relative mb-4 w-auto flex items-center gap-2"
          >
            <div>
              <img
                src={el.productImage || "https://placehold.co/600x400"}
                alt={el.productName}
                className="object-cover w-24 h-24 rounded-sm"
              />
            </div>
            <div>
              <h3 className="font-bold">{el.productName}</h3>
              <p>
                {" "}
                <span className="font-medium">Unit Price: </span>
                {el.productPrice}&#36; (x{el.quantity})
              </p>
              {el.orderChoices && el.orderChoices.length > 0 && (
                <p>
                  {" "}
                  <span className="font-medium">Options: </span>
                  {el.orderChoices?.map((choice) => (
                    <span key={choice.label}>
                      {choice.label} - {choice.extra}&#36; (x{choice.quantity}),{" "}
                    </span>
                  ))}
                </p>
              )}
              <p>
                {" "}
                <span className="font-medium">Total Price: </span>
                {itemPrice(el.productId).toFixed(2)}&#36;
              </p>
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-400"></div>
          </div>
        ))}

        <div className="flex items-center justify-between w-full mt-4">
          <p className="text-lg">
            <span className="font-bold">Total:</span> {totalPrice().toFixed(2)}
            &#36;
          </p>
          <p
            className=" text-white bg-rusty-red px-4 py-2 rounded-md font-bold cursor-pointer text-center w-44"
            onClick={onCheckout}
          >
            {createOrderLoading ? (
              <Spinner color="failure" />
            ) : (
              <>Go to checkout &rarr;</>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
