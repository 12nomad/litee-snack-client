import { useQuery } from '@tanstack/react-query';
import { ClientError } from 'graphql-request';

import {
  CATEGORIES_CACHE_KEY,
  DELIVERY_ORDER_DETAIL,
  ORDERS_PAYMENTS,
  ORDER_DETAIL,
  OWNER_PAYMENTS,
  OWNER_SHOPS_CACHE_KEY,
  OWNER_SHOP_CACHE_KEY,
  PROMOTED_SHOPS_KEY,
  SHOPS_CACHE_KEY,
  SHOP_CACHE_KEY,
  SHOP_ORDERS,
  SHOP_ORDER_DETAIL,
  USER_CACHE_KEY,
} from '../constant';
import {
  DeliveryOrderDetailQuery,
  DeliveryOrderDetailQueryVariables,
  GetAuthUserQuery,
  GetCategoriesQuery,
  GetOrderQuery,
  GetOrderQueryVariables,
  GetOrdersQuery,
  GetOrdersQueryVariables,
  GetOwnerIndividualShopQuery,
  GetOwnerIndividualShopQueryVariables,
  GetOwnerPaymentsQuery,
  GetOwnerShopsQuery,
  GetPaymentsQuery,
  GetPromotedShopsQuery,
  GetShopByIdQuery,
  GetShopByIdQueryVariables,
  GetShopOrderQuery,
  GetShopOrderQueryVariables,
  GetShopsQuery,
  GetShopsQueryVariables,
} from '../gql/generated/graphql';
import {
  GET_AUTH_USER,
  GET_CATEGORIES,
  GET_ORDER,
  GET_ORDERS,
  GET_OWNER_INDIVIDUAL_SHOP,
  GET_OWNER_PAYMENTS,
  GET_OWNER_SHOPS,
  GET_PAYMENTS,
  GET_SHOPS,
  GET_SHOP_BY_ID,
  GET_SHOP_ORDER,
} from '../gql/queries';
import ClientService from './client.service';
import { DELIVERY_ORDER } from '../gql/queries/get-delivery-order-detail.query';
import { GET_PROMOTED_SHOPS } from '../gql/queries/get-promoted-shops.query';

class QueryService extends ClientService {
  constructor() {
    super();
  }

  authUser = () => {
    return useQuery<GetAuthUserQuery, ClientError>({
      queryKey: USER_CACHE_KEY,
      queryFn: async () =>
        await this.refreshToken<GetAuthUserQuery>(GET_AUTH_USER),
      staleTime: Infinity,
    });
  };

  ownerShops() {
    return useQuery<GetOwnerShopsQuery, ClientError>({
      queryKey: OWNER_SHOPS_CACHE_KEY,
      queryFn: async () =>
        await this.refreshToken<GetOwnerShopsQuery>(GET_OWNER_SHOPS),
      staleTime: 15 * 60 * 1000,
    });
  }

  shops = (input: GetShopsQueryVariables) => {
    return useQuery<GetShopsQuery, ClientError>({
      queryKey: [SHOPS_CACHE_KEY, input],
      queryFn: async () =>
        await this.refreshToken<GetShopsQuery>(GET_SHOPS, input),
      staleTime: 15 * 60 * 1000,
      keepPreviousData: true,
    });
  };

  categories = () => {
    return useQuery<GetCategoriesQuery, ClientError>({
      queryKey: CATEGORIES_CACHE_KEY,
      queryFn: async () =>
        await this.refreshToken<GetCategoriesQuery>(GET_CATEGORIES),
      staleTime: 15 * 60 * 1000,
    });
  };

  shopDetails(input: GetShopByIdQueryVariables) {
    return useQuery<GetShopByIdQuery, ClientError>({
      queryKey: [SHOP_CACHE_KEY, input],
      queryFn: async () =>
        await this.refreshToken<GetShopByIdQuery>(GET_SHOP_BY_ID, input),
    });
  }

  orderDahsboard() {
    return useQuery<GetPaymentsQuery, ClientError>({
      queryKey: [ORDERS_PAYMENTS],
      queryFn: async () =>
        await this.refreshToken<GetPaymentsQuery>(GET_PAYMENTS),
    });
  }

  orderDetail(orderInput: GetOrderQueryVariables) {
    return useQuery<GetOrderQuery, ClientError>({
      queryKey: [ORDER_DETAIL, orderInput],
      queryFn: async () =>
        await this.refreshToken<GetOrderQuery>(GET_ORDER, orderInput),
    });
  }

  ownerShopDetails(input: GetOwnerIndividualShopQueryVariables) {
    return useQuery<GetOwnerIndividualShopQuery, ClientError>({
      queryKey: [OWNER_SHOP_CACHE_KEY, input],
      queryFn: async () =>
        await this.refreshToken<GetOwnerIndividualShopQuery>(
          GET_OWNER_INDIVIDUAL_SHOP,
          input,
        ),
    });
  }

  ownerDashboard() {
    return useQuery<GetOwnerPaymentsQuery, ClientError>({
      queryKey: [OWNER_PAYMENTS],
      queryFn: async () =>
        await this.refreshToken<GetOwnerPaymentsQuery>(GET_OWNER_PAYMENTS),
    });
  }

  getOrders = (input: GetOrdersQueryVariables) => {
    return useQuery<GetOrdersQuery, ClientError>({
      queryKey: [SHOP_ORDERS, input],
      queryFn: async () =>
        await this.refreshToken<GetOrdersQuery>(GET_ORDERS, input),
    });
  };

  ownerShopOrderDetail = (orderInput: GetShopOrderQueryVariables) => {
    return useQuery<GetShopOrderQuery, ClientError>({
      queryKey: [SHOP_ORDER_DETAIL, orderInput],
      queryFn: async () =>
        await this.refreshToken<GetShopOrderQuery>(GET_SHOP_ORDER, orderInput),
    });
  };

  deliveryOrderDetail = (orderInput: DeliveryOrderDetailQueryVariables) => {
    return useQuery<DeliveryOrderDetailQuery, ClientError>({
      queryKey: [DELIVERY_ORDER_DETAIL, orderInput],
      queryFn: async () =>
        await this.refreshToken<DeliveryOrderDetailQuery>(
          DELIVERY_ORDER,
          orderInput,
        ),
    });
  };

  getPromotedShops = () => {
    return useQuery<GetPromotedShopsQuery, ClientError>({
      queryKey: PROMOTED_SHOPS_KEY,
      queryFn: async () =>
        await this.refreshToken<GetPromotedShopsQuery>(GET_PROMOTED_SHOPS),
    });
  };
}

const queryService = new QueryService();
export default queryService;
