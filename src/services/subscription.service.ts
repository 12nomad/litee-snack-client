import { Dispatch, SetStateAction } from 'react';

import ClientService from './client.service';
import {
  OrderStatusSubscriptionVariables,
  OrderStatusSubscription,
} from '../gql/generated/graphql';
import { ORDER_STATUS } from '../gql/subscriptions';

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
}

const subscriptionService = new SubscriptionService();
export default subscriptionService;
