import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { ClientError } from 'graphql-request';
import {
  DELIVERY_ORDER_DETAIL,
  OWNER_SHOP_CACHE_KEY,
  SHOP_ORDER_DETAIL,
  USER_CACHE_KEY,
} from '../constant';
import {
  CreateOrderMutation,
  CreateOrderMutationVariables,
  CreatePaymentIntentMutation,
  CreatePaymentIntentMutationVariables,
  CreateProductMutation,
  CreateProductMutationVariables,
  CreatePromotionPaymentIntentMutation,
  CreatePromotionPaymentIntentMutationVariables,
  CreateShopMutation,
  CreateShopMutationVariables,
  CreateStripeUserDto,
  CreateStripeUserMutation,
  CreateStripeUserMutationVariables,
  DeleteProductMutation,
  DeleteProductMutationVariables,
  DeliveryOrderDetailQuery,
  DeliveryOrderDetailQueryVariables,
  EditOrderMutation,
  EditOrderMutationVariables,
  EditShopMutation,
  EditShopMutationVariables,
  EditUserProfileMutation,
  EditUserProfileMutationVariables,
  EmailVerificationMutation,
  EmailVerificationMutationVariables,
  Exact,
  GetAuthUserQuery,
  GetOwnerIndividualShopQuery,
  GetOwnerIndividualShopQueryVariables,
  GetShopOrderQuery,
  GetShopOrderQueryVariables,
  LoginMutation,
  LoginMutationVariables,
  LogoutMutation,
  OrderStatus,
  PasswordResetMutation,
  PasswordResetMutationVariables,
  SignupMutation,
  SignupMutationVariables,
  UpdatePasswordMutation,
  UpdatePasswordMutationVariables,
  VerifyResetMutation,
  VerifyResetMutationVariables,
} from '../gql/generated/graphql';
import {
  CREATE_STRIPE_USER,
  LOGOUT,
  SIGNUP,
  LOGIN,
  PASSWORD_RESET,
  UPDATE_PASSWORD,
  VERIFY_RESET,
  CREATE_ORDER,
  CREATE_PAYMENT_INTENT,
  CREATE_PROMO_PAYMENT_INTENT,
  CREATE_SHOP,
  EMAIL_VERIFICATION,
  EDIT_USER_PROFILE,
  ADD_PRODUCT,
  EDIT_ORDER,
} from '../gql/mutations';
import useAuthStore from '../stores/auth.store';
import useCartStore from '../stores/cart.store';
import ClientService from './client.service';
import { Dispatch, SetStateAction } from 'react';
import { DELETE_PRODUCT } from '../gql/mutations/delete-product.mutation';
import { EDIT_SHOP } from '../gql/mutations/edit-shop.mutation';

class MutationService extends ClientService {
  constructor() {
    super();
  }

  login(onSuccess: () => void) {
    return useMutation<LoginMutation, ClientError, LoginMutationVariables>({
      mutationFn: async (input: LoginMutationVariables) =>
        await this.client.request(LOGIN, input),
      onSuccess: () => {
        onSuccess();
      },
    });
  }

  createStripeUser() {
    return useMutation<
      CreateStripeUserMutation,
      ClientError,
      CreateStripeUserMutationVariables
    >({
      mutationFn: async (input: CreateStripeUserMutationVariables) =>
        await this.refreshToken<CreateStripeUserMutation>(
          CREATE_STRIPE_USER,
          input,
        ),
    });
  }

  signup(
    { email, name }: { name: string; email: string },
    mutateStripeUser: UseMutateFunction<
      CreateStripeUserMutation,
      ClientError,
      Exact<{
        createStripeUserInput: CreateStripeUserDto;
      }>,
      unknown
    >,
    onSuccess: () => void,
  ) {
    return useMutation<SignupMutation, ClientError, SignupMutationVariables>({
      mutationFn: async (input: SignupMutationVariables) =>
        await this.client.request(SIGNUP, input),
      onSuccess: () => {
        mutateStripeUser({ createStripeUserInput: { email, name } });

        onSuccess();
      },
    });
  }

  logout(onSuccess: () => void) {
    const cache = useQueryClient();
    const setAuth = useAuthStore((s) => s.setAuth);
    const clearCurrentOrderArr = useCartStore((s) => s.clearCurrentOrderArr);
    const setCurrentOrderId = useCartStore((s) => s.setCurrentOrderId);
    const setCurrentShopId = useCartStore((s) => s.setCurrentShopId);
    const setStripePaymentIntent = useCartStore(
      (s) => s.setStripePaymentIntent,
    );

    return useMutation<LogoutMutation, ClientError>({
      mutationFn: async () => await this.refreshToken(LOGOUT),
      onSuccess: () => {
        cache.removeQueries(USER_CACHE_KEY);
        setAuth(false);
        setStripePaymentIntent('');
        clearCurrentOrderArr();
        setCurrentOrderId(0);
        setCurrentShopId(0);

        onSuccess();
      },
    });
  }

  passwordReset(onSuccess: () => void) {
    return useMutation<
      PasswordResetMutation,
      ClientError,
      PasswordResetMutationVariables
    >({
      mutationFn: async (input: PasswordResetMutationVariables) =>
        await this.client.request(PASSWORD_RESET, input),
      onSuccess: () => {
        onSuccess();
      },
    });
  }

  passwordUpdate(onSuccess: () => void) {
    return useMutation<
      UpdatePasswordMutation,
      ClientError,
      UpdatePasswordMutationVariables
    >({
      mutationFn: async (input: UpdatePasswordMutationVariables) =>
        await this.client.request(UPDATE_PASSWORD, input),
      onSuccess: () => {
        onSuccess();
      },
    });
  }

  verifyReset(onSuccess: () => void) {
    return useMutation<
      VerifyResetMutation,
      ClientError,
      VerifyResetMutationVariables
    >({
      mutationFn: async (input: VerifyResetMutationVariables) =>
        await this.client.request(VERIFY_RESET, input),
      onSuccess: () => {
        onSuccess();
      },
    });
  }

  createOrder(onSuccess: () => void) {
    const setCurrentOrderId = useCartStore((s) => s.setCurrentOrderId);

    return useMutation<
      CreateOrderMutation,
      ClientError,
      CreateOrderMutationVariables
    >({
      mutationFn: async (input: CreateOrderMutationVariables) =>
        await this.refreshToken(CREATE_ORDER, input),
      onSuccess: (data) => {
        setCurrentOrderId(data.createOrder.orderId || 0);

        onSuccess();
      },
    });
  }

  createPaymentIntent(
    setStripeClientSecret: Dispatch<SetStateAction<string | null>>,
    onSuccess: () => void,
  ) {
    const setStripePaymentIntent = useCartStore(
      (s) => s.setStripePaymentIntent,
    );

    return useMutation<
      CreatePaymentIntentMutation,
      ClientError,
      CreatePaymentIntentMutationVariables
    >({
      mutationFn: async (input: CreatePaymentIntentMutationVariables) =>
        await this.refreshToken<CreatePaymentIntentMutation>(
          CREATE_PAYMENT_INTENT,
          input,
        ),
      onSuccess: (data) => {
        setStripePaymentIntent(
          data.createPaymentIntent.data?.paymentIntent || '',
        );
        setStripeClientSecret(
          data.createPaymentIntent.data?.clientSecret || '',
        );

        onSuccess();
      },
    });
  }

  createPromoPaymentIntent(
    setStripeClientSecret: Dispatch<SetStateAction<string | null>>,
  ) {
    const setStripePaymentIntent = useCartStore(
      (s) => s.setStripePaymentIntent,
    );

    return useMutation<
      CreatePromotionPaymentIntentMutation,
      ClientError,
      CreatePromotionPaymentIntentMutationVariables
    >({
      mutationFn: async (
        input: CreatePromotionPaymentIntentMutationVariables,
      ) =>
        await this.refreshToken<CreatePromotionPaymentIntentMutation>(
          CREATE_PROMO_PAYMENT_INTENT,
          input,
        ),
      onSuccess: (data) => {
        setStripePaymentIntent(
          data.createPromotionPaymentIntent.data?.paymentIntent || '',
        );
        setStripeClientSecret(
          data.createPromotionPaymentIntent.data?.clientSecret || '',
        );
      },
    });
  }

  createShop(onSuccess: () => void) {
    return useMutation<
      CreateShopMutation,
      ClientError,
      CreateShopMutationVariables
    >({
      mutationFn: async (input: CreateShopMutationVariables) =>
        await this.refreshToken<CreateShopMutation>(CREATE_SHOP, input),
      onSuccess: () => {
        onSuccess();
      },
    });
  }

  accountVerification = (onSuccess: () => void) => {
    const cache = useQueryClient();

    return useMutation<
      EmailVerificationMutation,
      ClientError,
      EmailVerificationMutationVariables
    >({
      mutationFn: async (input: EmailVerificationMutationVariables) =>
        await this.refreshToken<EmailVerificationMutation>(
          EMAIL_VERIFICATION,
          input,
        ),
      onSuccess: () => {
        cache.setQueryData<GetAuthUserQuery>(USER_CACHE_KEY, (data) =>
          data?.getAuthUser
            ? { ...data, getAuthUser: { ...data.getAuthUser, verified: true } }
            : data,
        );
        onSuccess();
      },
    });
  };

  editProfile(onSuccess: () => void) {
    const cache = useQueryClient();

    return useMutation<
      EditUserProfileMutation,
      ClientError,
      EditUserProfileMutationVariables,
      { prevUser: GetAuthUserQuery }
    >({
      onMutate: (vars) => {
        const prevUser =
          cache.getQueryData<GetAuthUserQuery>(USER_CACHE_KEY) || {};
        cache.setQueryData<GetAuthUserQuery>(USER_CACHE_KEY, (authUser) => ({
          ...authUser,
          getAuthUser: {
            ...authUser?.getAuthUser!,
            email: vars.editUserProfileInput.email!,
            image: vars.editUserProfileInput.image!,
            name: vars.editUserProfileInput.name!,
            verified:
              vars.editUserProfileInput.email === prevUser.getAuthUser?.email!
                ? prevUser.getAuthUser?.verified!
                : false,
          },
        }));

        return { prevUser };
      },
      mutationFn: async (input) =>
        await this.refreshToken<EditUserProfileMutation>(
          EDIT_USER_PROFILE,
          input,
        ),
      onSuccess: () => {
        onSuccess();
      },
      onError: (_, __, ctx) => {
        if (!ctx?.prevUser) return;

        cache.setQueryData<GetAuthUserQuery>(USER_CACHE_KEY, ctx.prevUser);
      },
    });
  }

  editShop(onSuccess: () => void) {
    return useMutation<
      EditShopMutation,
      ClientError,
      EditShopMutationVariables
    >({
      mutationFn: async (input: EditShopMutationVariables) =>
        await this.refreshToken<EditShopMutation>(EDIT_SHOP, input),
      onSuccess: () => {
        onSuccess();
      },
    });
  }

  addProduct(onSuccess: () => void) {
    return useMutation<
      CreateProductMutation,
      ClientError,
      CreateProductMutationVariables
    >({
      mutationFn: async (input: CreateProductMutationVariables) =>
        await this.refreshToken<CreateProductMutation>(ADD_PRODUCT, input),
      onSuccess: () => {
        onSuccess();
      },
    });
  }

  deleteProduct(key: GetOwnerIndividualShopQueryVariables) {
    const client = useQueryClient();

    return useMutation<
      DeleteProductMutation,
      ClientError,
      DeleteProductMutationVariables
    >({
      mutationFn: async (input: DeleteProductMutationVariables) =>
        await this.refreshToken<DeleteProductMutation>(DELETE_PRODUCT, input),
      onSuccess: (_, variables) => {
        client.setQueryData<GetOwnerIndividualShopQuery>(
          [OWNER_SHOP_CACHE_KEY, key],
          (data) =>
            data?.getOwnerIndividualShop
              ? {
                  ...data,
                  getOwnerIndividualShop: {
                    ...data.getOwnerIndividualShop,
                    data: {
                      ...data.getOwnerIndividualShop.data,
                      id: data.getOwnerIndividualShop.data?.id || 0,
                      name: data.getOwnerIndividualShop.data?.name || '',
                      address: data.getOwnerIndividualShop.data?.address || '',
                      ownerId: data.getOwnerIndividualShop.data?.ownerId || 0,
                      products:
                        data.getOwnerIndividualShop.data?.products?.filter(
                          (el) => el.id !== variables.deleteProductInput.id,
                        ),
                    },
                  },
                }
              : data,
        );
      },
    });
  }

  editOrder(
    currentOrderStatus: OrderStatus | undefined,
    shopOrderInput?: GetShopOrderQueryVariables,
    deliveryOrderInput?: DeliveryOrderDetailQueryVariables,
  ) {
    const client = useQueryClient();

    return useMutation<
      EditOrderMutation,
      ClientError,
      EditOrderMutationVariables
    >({
      mutationFn: async (input: EditOrderMutationVariables) =>
        await this.refreshToken(EDIT_ORDER, input),
      onSuccess: () => {
        if (!deliveryOrderInput && shopOrderInput) {
          client.setQueryData<GetShopOrderQuery>(
            [SHOP_ORDER_DETAIL, shopOrderInput],
            (data) =>
              data?.getShopOrder
                ? {
                    ...data,
                    getShopOrder: {
                      ...data.getShopOrder,
                      data: {
                        ...data.getShopOrder.data,
                        id: data.getShopOrder.data?.id || 0,
                        status:
                          currentOrderStatus === OrderStatus.Pending
                            ? OrderStatus.Preparing
                            : OrderStatus.Ready,
                      },
                    },
                  }
                : data,
          );
        } else {
          client.setQueryData<DeliveryOrderDetailQuery>(
            [DELIVERY_ORDER_DETAIL, deliveryOrderInput],
            (data) =>
              data?.deliveryOrderDetail
                ? {
                    ...data,
                    deliveryOrderDetail: {
                      ...data.deliveryOrderDetail,
                      data: {
                        ...data.deliveryOrderDetail.data,
                        id: data.deliveryOrderDetail.data?.id || 0,
                        status:
                          currentOrderStatus === OrderStatus.Ready
                            ? OrderStatus.Picked
                            : OrderStatus.Delivered,
                      },
                    },
                  }
                : data,
          );
        }
      },
    });
  }
}

const mutationService = new MutationService();
export default mutationService;
