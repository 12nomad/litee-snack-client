import { gql } from 'graphql-request';

export const DELIVERY_ORDER = gql`
  query deliveryOrderDetail(
    $deliveryOrderDetailInput: DeliveryOrderDetailDto!
  ) {
    deliveryOrderDetail(deliveryOrderDetailInput: $deliveryOrderDetailInput) {
      success
      data {
        id
        status

        shop {
          id
          name
        }
        customer {
          id
          name
        }
      }
    }
  }
`;
