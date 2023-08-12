import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface OrderChoice {
  label: string;
  extra: number;
  quantity: number;
  choice?: string;
}

interface OrderOption {
  productId: number;
  quantity: number;
  orderChoices?: OrderChoice[];
  productName: string;
  productPrice: number;
  productImage: string;
}

interface ICartStore {
  stripePaymentIntent: string;
  currentOrderId: number;
  currentShopId: number;
  currentOrderArr: OrderOption[];

  totalItems: () => number;
  totalPrice: () => number;
  itemPrice: (productId: number) => number;
  setStripePaymentIntent: (id: string) => void;
  setCurrentOrderId: (id: number) => void;
  setCurrentShopId: (id: number) => void;
  isInCart: (productId: number) => boolean;
  isInOption: (productId: number, choiceLabel: string) => boolean;
  onAddItem: (product: {
    shopId: number;
    productId: number;
    productName: string;
    productPrice: number;
    productImage: string;
  }) => void;
  onRemoveItem: (productId: number) => void;
  onAddItemOption: (
    productId: number,
    choiceLabel: string,
    choiceExtra: number,
  ) => void;
  onAddItemOptionQuantity: (productId: number, choiceLabel: string) => void;
  onRemoveItemOptionQuantity: (productId: number, choiceLabel: string) => void;
  clearCurrentOrderArr: () => void;
}

const useCartStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      stripePaymentIntent: '',
      currentOrderId: 0,
      currentShopId: 0,
      currentOrderArr: [],
      setStripePaymentIntent: (id) => set(() => ({ stripePaymentIntent: id })),
      setCurrentOrderId: (id) => set(() => ({ currentOrderId: id })),
      setCurrentShopId: (id) => set(() => ({ currentShopId: id })),
      onAddItem: ({
        productId,
        productImage,
        productName,
        productPrice,
        shopId,
      }) => {
        const currentProduct = get().currentOrderArr.find(
          (el) => el.productId === productId,
        );
        if (!currentProduct) {
          set((state) => ({
            currentShopId: shopId,
            currentOrderArr: [
              ...state.currentOrderArr,
              {
                productId,
                productName,
                productImage,
                productPrice,
                quantity: 1,
              },
            ],
          }));
        } else {
          set((state) => ({
            currentShopId: shopId,
            currentOrderArr: state.currentOrderArr.map((el) =>
              el.productId === productId
                ? {
                    ...currentProduct,
                    quantity: currentProduct.quantity + 1,
                  }
                : el,
            ),
          }));
        }
      },
      onRemoveItem: (productId) => {
        const currentProduct = get().currentOrderArr.find(
          (el) => el.productId === productId,
        );
        if (!currentProduct) {
          return;
        }

        if (currentProduct.quantity > 1) {
          set((state) => ({
            currentOrderArr: state.currentOrderArr.map((el) =>
              el.productId === productId
                ? {
                    ...currentProduct,
                    quantity: currentProduct.quantity - 1,
                  }
                : el,
            ),
          }));
        } else {
          set((state) => ({
            currentOrderArr: state.currentOrderArr.filter(
              (el) => el.productId !== productId,
            ),
          }));
        }
      },
      isInCart: (productId) =>
        !!get().currentOrderArr.find((el) => el.productId === productId),
      totalItems: () =>
        get().currentOrderArr.reduce((acc, el) => acc + el.quantity, 0),
      itemPrice: (productId) => {
        const currentProduct = get().currentOrderArr.find(
          (el) => el.productId === productId,
        );
        if (!currentProduct) return 0;

        let optionsPrice = 0;
        if (currentProduct.orderChoices) {
          optionsPrice = currentProduct.orderChoices.reduce((acc, el) => {
            return acc + el.extra * el.quantity;
          }, 0);
        }

        return (
          currentProduct.productPrice * currentProduct.quantity + optionsPrice
        );
      },
      onAddItemOption: (productId, choiceLabel, choiceExtra) => {
        const currentProduct = get().currentOrderArr.find(
          (el) => el.productId === productId,
        );

        if (!currentProduct) return;

        let newChoices: OrderChoice[];
        if (!currentProduct.orderChoices) {
          currentProduct.orderChoices = [
            {
              label: choiceLabel,
              extra: choiceExtra,
              quantity: 1,
            },
          ];
        } else {
          if (
            currentProduct.orderChoices.find((el) => el.label === choiceLabel)
          ) {
            newChoices = currentProduct.orderChoices.filter(
              (el) => el.label !== choiceLabel,
            );
          } else {
            newChoices = [
              ...currentProduct.orderChoices,
              {
                label: choiceLabel,
                extra: choiceExtra,
                quantity: 1,
              },
            ];
          }
        }

        set((state) => ({
          currentOrderArr: state.currentOrderArr.map((el) => {
            if (el.productId === productId) {
              return {
                ...el,
                orderChoices: newChoices ? newChoices : el.orderChoices,
              };
            }
            return el;
          }),
        }));
      },

      onAddItemOptionQuantity: (productId, choiceLabel) => {
        const currentProduct = get().currentOrderArr.find(
          (el) => el.productId === productId,
        );

        if (!currentProduct) return;

        const newChoices = currentProduct.orderChoices?.map((el) =>
          el.label === choiceLabel
            ? {
                ...el,
                quantity:
                  currentProduct.quantity === el.quantity
                    ? el.quantity
                    : el.quantity + 1,
              }
            : el,
        );

        set((state) => ({
          currentOrderArr: state.currentOrderArr.map((el) => {
            if (el.productId === productId) {
              return {
                ...el,
                orderChoices: newChoices ? newChoices : el.orderChoices,
              };
            }
            return el;
          }),
        }));
      },

      onRemoveItemOptionQuantity: (productId, choiceLabel) => {
        const currentProduct = get().currentOrderArr.find(
          (el) => el.productId === productId,
        );

        if (!currentProduct) return;

        const choice = currentProduct.orderChoices?.find(
          (el) => el.label === choiceLabel,
        );

        let newChoices: OrderChoice[] | undefined;
        if (choice?.quantity && choice?.quantity > 1) {
          newChoices = currentProduct.orderChoices?.map((el) =>
            el.label === choiceLabel
              ? { ...el, quantity: el.quantity - 1 }
              : el,
          );
        } else {
          newChoices = currentProduct.orderChoices?.filter(
            (el) => el.label !== choiceLabel,
          );
        }

        set((state) => ({
          currentOrderArr: state.currentOrderArr.map((el) => {
            if (el.productId === productId) {
              return {
                ...el,
                orderChoices: newChoices ? newChoices : el.orderChoices,
              };
            }
            return el;
          }),
        }));
      },

      isInOption: (productId, choiceLabel) => {
        const currentProduct = get().currentOrderArr.find(
          (el) => el.productId === productId,
        );
        if (!currentProduct) return false;

        if (!currentProduct.orderChoices) return false;

        if (!currentProduct.orderChoices.find((el) => el.label === choiceLabel))
          return false;

        return true;
      },
      clearCurrentOrderArr: () => set(() => ({ currentOrderArr: [] })),
      totalPrice: () =>
        get().currentOrderArr.reduce((acc, el) => {
          return acc + get().itemPrice(el.productId);
        }, 0),
    }),
    { name: 'cart-store' },
  ),
);

if (import.meta.env.MODE === 'development') {
  mountStoreDevtool('cartStore', useCartStore);
}

export default useCartStore;
