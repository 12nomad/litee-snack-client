import { Dispatch, SetStateAction } from 'react';

import ClientService from './client.service';
import {
  OrderStatusSubscriptionVariables,
  OrderStatusSubscription,
  PendingOrderSubscription,
} from '../gql/generated/graphql';
import { ORDER_STATUS, PENDING_ORDER } from '../gql/subscriptions';

class SubscriptionService extends ClientService {
  constructor() {
    super();
  }

  orderStatus(
    orderInput: OrderStatusSubscriptionVariables,
    setNewStatusSub: Dispatch<
      SetStateAction<OrderStatusSubscription | undefined>
    >,
  ) {
    return this.subscriptionClient
      .request({ query: ORDER_STATUS, variables: orderInput })
      .subscribe({
        next({ data }: { data: OrderStatusSubscription }) {
          if (data) {
            setNewStatusSub(data);
          }
        },
      });
  }

  shopNotif(
    setNewNotif: (val: boolean) => void,
    setPendingOrder: (val: { orderId: number; shopId: number }) => void,
  ) {
    return this.subscriptionClient.request({ query: PENDING_ORDER }).subscribe({
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
  }
}

const subscriptionService = new SubscriptionService();
export default subscriptionService;
