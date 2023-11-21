import { useState } from "react";
import {
  OrderStatusSubscription,
  // OrderStatusSubscriptionVariables,
} from "../../../../../gql/generated/graphql";
// import subscriptionService from "../../../../../services/subscription.service";

const useOrderStatusSubscription =
  (): // orderInput: OrderStatusSubscriptionVariables
  { newStatusSub: OrderStatusSubscription | undefined } => {
    const [newStatusSub] = useState<OrderStatusSubscription | undefined>(
      undefined
    );

    // Apollo Way
    // useSubscription<OrderStatusSubscription, OrderStatusSubscriptionVariables>(
    //   ORDER_STATUS,
    //   {
    //     variables: orderInput,
    //     onData: (opt) => setNewStatusSub(opt.data.data),
    //   },
    // );

    // TODO: Disabling Subscription
    // useEffect(() => {
    //   const subscription = subscriptionService.orderStatus(
    //     orderInput,
    //     setNewStatusSub,
    //   );

    //   return () => {
    //     subscription.unsubscribe();
    //   };
    // }, []);

    return { newStatusSub };
  };

export default useOrderStatusSubscription;
