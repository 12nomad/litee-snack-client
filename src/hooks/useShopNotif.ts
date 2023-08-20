import { useEffect } from 'react';
import useNotificationStore from '../stores/notification.store';
import subscriptionService from '../services/subscription.service';

const useShopNotif = () => {
  const pendingOrder = useNotificationStore((s) => s.pendingOrder);
  const setNewNotif = useNotificationStore((s) => s.setNewNotif);
  const setPendingOrder = useNotificationStore((s) => s.setPendingOrder);

  // const { data, error, loading } = useSubscription<PendingOrderSubscription>(
  //   PENDING_ORDER,
  //   {
  //     onData: (opt) => {
  //       setPendingOrder({
  //         orderId: (opt.data.data && opt.data.data.pendingOrder.id) || 0,
  //         shopId: (opt.data.data && opt.data.data.pendingOrder.shopId) || 0,
  //       });
  //       setNewNotif(true);
  //     },
  //   },
  // );

  useEffect(() => {
    const subscription = subscriptionService.shopNotif(
      setNewNotif,
      setPendingOrder,
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    pendingOrder.length === 0 && setNewNotif(false);
  }, [pendingOrder]);
};

export default useShopNotif;
