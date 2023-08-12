import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface IUserStore {
  auth: boolean;

  setAuth: (value: boolean) => void;
}

const useAuthStore = create<IUserStore>()(
  persist(
    (set) => ({
      auth: false,
      setAuth: (value) => set(() => ({ auth: value })),
    }),
    { name: 'auth-store' },
  ),
);

if (import.meta.env.MODE === 'development') {
  mountStoreDevtool('authStore', useAuthStore);
}

export default useAuthStore;
