import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface INotificationStore {
  newNotif: boolean;
  pendingOrder: { orderId: number; shopId: number }[];

  setPendingOrder: (val: { orderId: number; shopId: number }) => void;
  filterOrder: (val: { orderId: number; shopId: number }) => void;
  setNewNotif: (val: boolean) => void;
  clearNotification: () => void;
}

const useNotificationStore = create<INotificationStore>()(
  persist(
    (set) => ({
      newNotif: false,
      pendingOrder: [],

      setNewNotif: (val) => set((store) => ({ ...store, newNotif: val })),
      setPendingOrder: (val) =>
        set((store) => {
          if (store.pendingOrder.find((el) => el.orderId === val.orderId))
            return { ...store };

          return {
            ...store,
            pendingOrder: [
              { orderId: val.orderId, shopId: val.shopId },
              ...store.pendingOrder,
            ],
          };
        }),
      filterOrder: (val) =>
        set((store) => ({
          ...store,
          pendingOrder: store.pendingOrder.filter(
            (el) => el.orderId !== val.orderId,
          ),
        })),
      clearNotification: () =>
        set(() => ({ newNotif: false, pendingOrder: [] })),
    }),
    { name: 'notification-store' },
  ),
);

if (import.meta.env.MODE === 'development') {
  mountStoreDevtool('notificationStore', useNotificationStore);
}

export default useNotificationStore;
