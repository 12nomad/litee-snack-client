import { useEffect } from 'react';
import useNotificationStore from '../stores/notification.store';
import { PENDING_ORDER } from '../gql/subscriptions/pending-order.subscription';
import { PendingOrderSubscription } from '../gql/generated/graphql';
import subscriptionClient from '../utils/graphql-subscription-client';

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
    const subscription = subscriptionClient
      .request({ query: PENDING_ORDER })
      .subscribe({
        next({ data }: { data: PendingOrderSubscription }) {
          if (data) {
            setPendingOrder({
              orderId: (data.pendingOrder && data.pendingOrder.id) || 0,
              shopId: (data.pendingOrder && data.pendingOrder.shopId) || 0,
            });
            setNewNotif(true);
          }
        },
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    pendingOrder.length === 0 && setNewNotif(false);
  }, [pendingOrder]);
};

export default useShopNotif;
