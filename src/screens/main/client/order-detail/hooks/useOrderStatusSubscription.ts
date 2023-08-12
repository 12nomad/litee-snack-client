import {
  OrderStatusSubscription,
  OrderStatusSubscriptionVariables,
} from '../../../../../gql/generated/graphql';
import { useEffect, useState } from 'react';
import subscriptionService from '../../../../../services/subscription.service';

const useOrderStatusSubscription = (
  orderInput: OrderStatusSubscriptionVariables,
): { newStatusSub: OrderStatusSubscription | undefined } => {
  const [newStatusSub, setNewStatusSub] = useState<
    OrderStatusSubscription | undefined
  >(undefined);

  // useSubscription<OrderStatusSubscription, OrderStatusSubscriptionVariables>(
  //   ORDER_STATUS,
  //   {
  //     variables: orderInput,
  //     onData: (opt) => setNewStatusSub(opt.data.data),
  //   },
  // );

  useEffect(() => {
    const subscription = subscriptionService.orderStatus(
      orderInput,
      setNewStatusSub,
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { newStatusSub };
};

export default useOrderStatusSubscription;
