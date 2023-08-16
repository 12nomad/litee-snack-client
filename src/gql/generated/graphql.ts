/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AcceptNewOrderDto = {
  id: Scalars['Int']['input'];
  status?: OrderStatus;
};

export type CategoriesQueryOutput = {
  __typename?: 'CategoriesQueryOutput';
  data?: Maybe<Array<Category>>;
  success: Scalars['Boolean']['output'];
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  shops?: Maybe<Array<Shop>>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryQueryOutput = {
  __typename?: 'CategoryQueryOutput';
  data?: Maybe<Category>;
  success: Scalars['Boolean']['output'];
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Choice = {
  __typename?: 'Choice';
  extra?: Maybe<Scalars['Float']['output']>;
  label: Scalars['String']['output'];
};

export type ChoiceInputType = {
  extra?: InputMaybe<Scalars['Float']['input']>;
  label: Scalars['String']['input'];
};

export type CreateOrderDto = {
  orderId?: InputMaybe<Scalars['Int']['input']>;
  orderOptions: Array<OrderOptionInputType>;
  shopId: Scalars['Int']['input'];
};

export type CreateOrderOutput = {
  __typename?: 'CreateOrderOutput';
  orderId?: Maybe<Scalars['Int']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CreatePaymentIntentDto = {
  orderId: Scalars['Int']['input'];
  stripeCustomerId: Scalars['String']['input'];
  stripePaymentIntentId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProductDto = {
  description: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<OptionInputType>>;
  price: Scalars['Float']['input'];
  shopId: Scalars['Int']['input'];
};

export type CreatePromotionPaymentIntentDto = {
  amount: Scalars['Float']['input'];
  promoDuration: Scalars['Int']['input'];
  shopId: Scalars['Int']['input'];
  stripeCustomerId: Scalars['String']['input'];
  stripePaymentIntentId?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePromotionPaymentIntentOutput = {
  __typename?: 'CreatePromotionPaymentIntentOutput';
  data?: Maybe<PaymentIntent>;
  success: Scalars['Boolean']['output'];
};

export type CreateShopDto = {
  address: Scalars['String']['input'];
  category: Array<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateStripeUserDto = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type DeleteProductDto = {
  id: Scalars['Int']['input'];
};

export type DeleteShopDto = {
  id: Scalars['Int']['input'];
};

export type DeliveryOrderDetailDto = {
  id: Scalars['Int']['input'];
};

export type EditOrderDto = {
  id: Scalars['Int']['input'];
  status?: OrderStatus;
};

export type EditProductDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<OptionInputType>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productId: Scalars['Int']['input'];
};

export type EditShopDto = {
  address?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Array<Scalars['String']['input']>>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['Int']['input'];
};

export type EditUserProfileDto = {
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prevEmail: Scalars['String']['input'];
};

export type EmailVerificationDto = {
  code?: InputMaybe<Scalars['String']['input']>;
};

export type GetOrderDto = {
  id: Scalars['Int']['input'];
};

export type GetOrdersDto = {
  page?: Scalars['Int']['input'];
  shopId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<OrderStatus>;
};

export type GetOwnerIndividualShopDto = {
  id: Scalars['Int']['input'];
};

export type GetShopByIdDto = {
  id: Scalars['Int']['input'];
};

export type GetShopByNameDto = {
  page?: Scalars['Int']['input'];
  query: Scalars['String']['input'];
};

export type GetShopOrderDto = {
  id: Scalars['Int']['input'];
};

export type GetShopsDto = {
  page?: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type GetUserByIdDto = {
  id: Scalars['Int']['input'];
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptNewOrder: MutationOutput;
  createOrder: CreateOrderOutput;
  createPaymentIntent: CreatePromotionPaymentIntentOutput;
  createProduct: MutationOutput;
  createPromotionPaymentIntent: CreatePromotionPaymentIntentOutput;
  createShop: MutationOutput;
  createStripeUser: MutationOutput;
  deleteProduct: MutationOutput;
  deleteShop: MutationOutput;
  deleteUserAccount: MutationOutput;
  editOrder: MutationOutput;
  editProduct: MutationOutput;
  editShop: MutationOutput;
  editUserProfile: MutationOutput;
  emailVerification: MutationOutput;
  login: MutationOutput;
  logout: MutationOutput;
  passwordReset: MutationOutput;
  refreshToken: MutationOutput;
  signup: MutationOutput;
  updatePassword: MutationOutput;
  verifyReset: MutationOutput;
};


export type MutationAcceptNewOrderArgs = {
  acceptNewOrderInput: AcceptNewOrderDto;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderDto;
};


export type MutationCreatePaymentIntentArgs = {
  createPaymentIntentInput: CreatePaymentIntentDto;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductDto;
};


export type MutationCreatePromotionPaymentIntentArgs = {
  createPromotionPaymentIntentInput: CreatePromotionPaymentIntentDto;
};


export type MutationCreateShopArgs = {
  createShopInput: CreateShopDto;
};


export type MutationCreateStripeUserArgs = {
  createStripeUserInput: CreateStripeUserDto;
};


export type MutationDeleteProductArgs = {
  deleteProductInput: DeleteProductDto;
};


export type MutationDeleteShopArgs = {
  deleteShopInput: DeleteShopDto;
};


export type MutationEditOrderArgs = {
  editOrderInput: EditOrderDto;
};


export type MutationEditProductArgs = {
  editProductInput: EditProductDto;
};


export type MutationEditShopArgs = {
  editShopInput: EditShopDto;
};


export type MutationEditUserProfileArgs = {
  editUserProfileInput: EditUserProfileDto;
};


export type MutationEmailVerificationArgs = {
  emailVerificationInput: EmailVerificationDto;
};


export type MutationLoginArgs = {
  loginInput: LoginDto;
};


export type MutationPasswordResetArgs = {
  passwordResetInput: PasswordResetDto;
};


export type MutationSignupArgs = {
  signupInput: SignupDto;
};


export type MutationUpdatePasswordArgs = {
  updatePasswordInput: UpdatePasswordDto;
};


export type MutationVerifyResetArgs = {
  verifyResetInput: VerifyResetDto;
};

export type MutationOutput = {
  __typename?: 'MutationOutput';
  success: Scalars['Boolean']['output'];
};

export type Option = {
  __typename?: 'Option';
  choices?: Maybe<Array<Choice>>;
  extra?: Maybe<Scalars['Float']['output']>;
  label: Scalars['String']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type OptionInputType = {
  choices?: InputMaybe<Array<ChoiceInputType>>;
  extra?: InputMaybe<Scalars['Float']['input']>;
  label: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime']['output'];
  customer?: Maybe<User>;
  customerId?: Maybe<Scalars['Int']['output']>;
  driver?: Maybe<User>;
  driverId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  orderItems?: Maybe<Array<OrderItem>>;
  payment?: Maybe<Payment>;
  paymentId?: Maybe<Scalars['String']['output']>;
  shop?: Maybe<Shop>;
  shopId?: Maybe<Scalars['Int']['output']>;
  status: OrderStatus;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderChoice = {
  __typename?: 'OrderChoice';
  choice?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export type OrderChoiceInputType = {
  choice?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  orderChoices?: Maybe<Array<OrderChoice>>;
  product?: Maybe<Product>;
  productId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderOptionInputType = {
  orderChoices?: InputMaybe<Array<OrderChoiceInputType>>;
  productId: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

export type OrderQueryOutput = {
  __typename?: 'OrderQueryOutput';
  data?: Maybe<Order>;
  success: Scalars['Boolean']['output'];
};

export enum OrderStatus {
  Delivered = 'DELIVERED',
  Pending = 'PENDING',
  Picked = 'PICKED',
  Preparing = 'PREPARING',
  Ready = 'READY'
}

export type OrderStatusDto = {
  id: Scalars['Int']['input'];
};

export type OrdersQueryOutput = {
  __typename?: 'OrdersQueryOutput';
  data?: Maybe<Array<Order>>;
  success: Scalars['Boolean']['output'];
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PasswordResetDto = {
  email: Scalars['String']['input'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['String']['output'];
  order?: Maybe<Order>;
  promoDuration?: Maybe<Scalars['String']['output']>;
  shop?: Maybe<Shop>;
  status: PaymentStatus;
  stripePaymentIntentId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type PaymentIntent = {
  __typename?: 'PaymentIntent';
  clientSecret: Scalars['String']['output'];
  paymentIntent: Scalars['String']['output'];
};

export enum PaymentStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type PaymentsQueryOutput = {
  __typename?: 'PaymentsQueryOutput';
  data?: Maybe<Array<Payment>>;
  success: Scalars['Boolean']['output'];
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  options?: Maybe<Array<Option>>;
  orders?: Maybe<Array<Order>>;
  price: Scalars['Float']['output'];
  shop?: Maybe<Shop>;
  shopId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  deliveryOrderDetail: OrderQueryOutput;
  getAuthUser?: Maybe<User>;
  getCategories: CategoriesQueryOutput;
  getCategoryShops: CategoryQueryOutput;
  getOrder: OrderQueryOutput;
  getOrders: OrdersQueryOutput;
  getOwnerIndividualShop: ShopQueryOutput;
  getOwnerPayments: PaymentsQueryOutput;
  getOwnerShops: ShopsQueryOutput;
  getPayments: PaymentsQueryOutput;
  getPromotedShops: ShopsQueryOutput;
  getShopById: ShopQueryOutput;
  getShopByName: ShopsQueryOutput;
  getShopOrder: OrderQueryOutput;
  getShops: ShopsQueryOutput;
  getUserById: UserQueryOutput;
};


export type QueryDeliveryOrderDetailArgs = {
  deliveryOrderDetailInput: DeliveryOrderDetailDto;
};


export type QueryGetCategoryShopsArgs = {
  getCategoryShopsInput: GetCategoryShopsDto;
};


export type QueryGetOrderArgs = {
  getOrderInput: GetOrderDto;
};


export type QueryGetOrdersArgs = {
  getOrdersInput: GetOrdersDto;
};


export type QueryGetOwnerIndividualShopArgs = {
  getOwnerIndividualShopInput: GetOwnerIndividualShopDto;
};


export type QueryGetShopByIdArgs = {
  getShopByIdInput: GetShopByIdDto;
};


export type QueryGetShopByNameArgs = {
  getShopByNameInput: GetShopByNameDto;
};


export type QueryGetShopOrderArgs = {
  getShopOrderInput: GetShopOrderDto;
};


export type QueryGetShopsArgs = {
  getShopsInput: GetShopsDto;
};


export type QueryGetUserByIdArgs = {
  getUserByIdInput: GetUserByIdDto;
};

export enum Role {
  Client = 'CLIENT',
  Delivery = 'DELIVERY',
  Shop = 'SHOP'
}

export type Shop = {
  __typename?: 'Shop';
  address: Scalars['String']['output'];
  categories?: Maybe<Array<Category>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isPromoted?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  orders?: Maybe<Array<Order>>;
  ownerId: Scalars['Int']['output'];
  payment?: Maybe<Payment>;
  products?: Maybe<Array<Product>>;
  promotedUntil?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ShopQueryOutput = {
  __typename?: 'ShopQueryOutput';
  data?: Maybe<Shop>;
  success: Scalars['Boolean']['output'];
};

export type ShopsQueryOutput = {
  __typename?: 'ShopsQueryOutput';
  data?: Maybe<Array<Shop>>;
  success: Scalars['Boolean']['output'];
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SignupDto = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Role;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderStatus: Order;
  pendingOrder: Order;
};


export type SubscriptionOrderStatusArgs = {
  orderStatusInput: OrderStatusDto;
};

export type UpdatePasswordDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  orders?: Maybe<Array<Order>>;
  password: Scalars['String']['output'];
  rides?: Maybe<Array<Order>>;
  role: Role;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  verification?: Maybe<Verification>;
  verified: Scalars['Boolean']['output'];
};

export type UserQueryOutput = {
  __typename?: 'UserQueryOutput';
  data?: Maybe<User>;
  success: Scalars['Boolean']['output'];
};

export type Verification = {
  __typename?: 'Verification';
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  reset?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type VerifyResetDto = {
  email: Scalars['String']['input'];
  reset: Scalars['String']['input'];
};

export type GetCategoryShopsDto = {
  page?: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
};

export type CreateProductMutationVariables = Exact<{
  createProductInput: CreateProductDto;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'MutationOutput', success: boolean } };

export type CreateOrderMutationVariables = Exact<{
  createOrderInput: CreateOrderDto;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'CreateOrderOutput', success: boolean, orderId?: number | null } };

export type CreatePaymentIntentMutationVariables = Exact<{
  createPaymentIntentInput: CreatePaymentIntentDto;
}>;


export type CreatePaymentIntentMutation = { __typename?: 'Mutation', createPaymentIntent: { __typename?: 'CreatePromotionPaymentIntentOutput', success: boolean, data?: { __typename?: 'PaymentIntent', clientSecret: string, paymentIntent: string } | null } };

export type CreatePromotionPaymentIntentMutationVariables = Exact<{
  createPromotionPaymentIntentInput: CreatePromotionPaymentIntentDto;
}>;


export type CreatePromotionPaymentIntentMutation = { __typename?: 'Mutation', createPromotionPaymentIntent: { __typename?: 'CreatePromotionPaymentIntentOutput', success: boolean, data?: { __typename?: 'PaymentIntent', clientSecret: string, paymentIntent: string } | null } };

export type CreateShopMutationVariables = Exact<{
  createShopInput: CreateShopDto;
}>;


export type CreateShopMutation = { __typename?: 'Mutation', createShop: { __typename?: 'MutationOutput', success: boolean } };

export type CreateStripeUserMutationVariables = Exact<{
  createStripeUserInput: CreateStripeUserDto;
}>;


export type CreateStripeUserMutation = { __typename?: 'Mutation', createStripeUser: { __typename?: 'MutationOutput', success: boolean } };

export type DeleteProductMutationVariables = Exact<{
  deleteProductInput: DeleteProductDto;
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: { __typename?: 'MutationOutput', success: boolean } };

export type EditOrderMutationVariables = Exact<{
  editOrderInput: EditOrderDto;
}>;


export type EditOrderMutation = { __typename?: 'Mutation', editOrder: { __typename?: 'MutationOutput', success: boolean } };

export type EditShopMutationVariables = Exact<{
  editShopInput: EditShopDto;
}>;


export type EditShopMutation = { __typename?: 'Mutation', editShop: { __typename?: 'MutationOutput', success: boolean } };

export type EditUserProfileMutationVariables = Exact<{
  editUserProfileInput: EditUserProfileDto;
}>;


export type EditUserProfileMutation = { __typename?: 'Mutation', editUserProfile: { __typename?: 'MutationOutput', success: boolean } };

export type EmailVerificationMutationVariables = Exact<{
  emailVerificationInput: EmailVerificationDto;
}>;


export type EmailVerificationMutation = { __typename?: 'Mutation', emailVerification: { __typename?: 'MutationOutput', success: boolean } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginDto;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'MutationOutput', success: boolean } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'MutationOutput', success: boolean } };

export type PasswordResetMutationVariables = Exact<{
  passwordResetInput: PasswordResetDto;
}>;


export type PasswordResetMutation = { __typename?: 'Mutation', passwordReset: { __typename?: 'MutationOutput', success: boolean } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'MutationOutput', success: boolean } };

export type SignupMutationVariables = Exact<{
  signupInput: SignupDto;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'MutationOutput', success: boolean } };

export type UpdatePasswordMutationVariables = Exact<{
  updatePasswordInput: UpdatePasswordDto;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'MutationOutput', success: boolean } };

export type VerifyResetMutationVariables = Exact<{
  verifyResetInput: VerifyResetDto;
}>;


export type VerifyResetMutation = { __typename?: 'Mutation', verifyReset: { __typename?: 'MutationOutput', success: boolean } };

export type GetAuthUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthUserQuery = { __typename?: 'Query', getAuthUser?: { __typename?: 'User', id: number, name: string, email: string, role: Role, verified: boolean, image?: string | null, stripeCustomerId?: string | null } | null };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: { __typename?: 'CategoriesQueryOutput', success: boolean, data?: Array<{ __typename?: 'Category', id: number, image?: string | null, name: string, slug: string }> | null } };

export type DeliveryOrderDetailQueryVariables = Exact<{
  deliveryOrderDetailInput: DeliveryOrderDetailDto;
}>;


export type DeliveryOrderDetailQuery = { __typename?: 'Query', deliveryOrderDetail: { __typename?: 'OrderQueryOutput', success: boolean, data?: { __typename?: 'Order', id: number, status: OrderStatus, shop?: { __typename?: 'Shop', id: number, name: string } | null, customer?: { __typename?: 'User', id: number, name: string } | null } | null } };

export type GetOrderQueryVariables = Exact<{
  getOrderInput: GetOrderDto;
}>;


export type GetOrderQuery = { __typename?: 'Query', getOrder: { __typename?: 'OrderQueryOutput', success: boolean, data?: { __typename?: 'Order', id: number, status: OrderStatus, total?: number | null, createdAt: any, updatedAt: any, customer?: { __typename?: 'User', id: number, name: string } | null, driver?: { __typename?: 'User', id: number, name: string } | null, shop?: { __typename?: 'Shop', id: number, name: string } | null } | null } };

export type GetOrdersQueryVariables = Exact<{
  getOrdersInput: GetOrdersDto;
}>;


export type GetOrdersQuery = { __typename?: 'Query', getOrders: { __typename?: 'OrdersQueryOutput', success: boolean, data?: Array<{ __typename?: 'Order', id: number, status: OrderStatus, customer?: { __typename?: 'User', id: number, name: string } | null, shop?: { __typename?: 'Shop', id: number, name: string } | null }> | null } };

export type GetOwnerIndividualShopQueryVariables = Exact<{
  getOwnerIndividualShopInput: GetOwnerIndividualShopDto;
}>;


export type GetOwnerIndividualShopQuery = { __typename?: 'Query', getOwnerIndividualShop: { __typename?: 'ShopQueryOutput', success: boolean, data?: { __typename?: 'Shop', id: number, image?: string | null, name: string, address: string, ownerId: number, isPromoted?: boolean | null, promotedUntil?: string | null, products?: Array<{ __typename?: 'Product', id: number, name: string, price: number, image?: string | null, description: string }> | null, categories?: Array<{ __typename?: 'Category', id: number, name: string, slug: string, image?: string | null }> | null } | null } };

export type GetOwnerPaymentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOwnerPaymentsQuery = { __typename?: 'Query', getOwnerPayments: { __typename?: 'PaymentsQueryOutput', success: boolean, data?: Array<{ __typename?: 'Payment', id: string, amount: number, stripePaymentIntentId?: string | null, status: PaymentStatus, currency: string, createdAt: any, updatedAt: any, type: string, promoDuration?: string | null, shop?: { __typename?: 'Shop', id: number, image?: string | null, name: string, address: string, isPromoted?: boolean | null, promotedUntil?: string | null } | null }> | null } };

export type GetOwnerShopsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOwnerShopsQuery = { __typename?: 'Query', getOwnerShops: { __typename?: 'ShopsQueryOutput', success: boolean, data?: Array<{ __typename?: 'Shop', id: number, image?: string | null, name: string, address: string, ownerId: number, isPromoted?: boolean | null, promotedUntil?: string | null, categories?: Array<{ __typename?: 'Category', id: number, image?: string | null, name: string, slug: string }> | null }> | null } };

export type GetPaymentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPaymentsQuery = { __typename?: 'Query', getPayments: { __typename?: 'PaymentsQueryOutput', success: boolean, data?: Array<{ __typename?: 'Payment', id: string, amount: number, stripePaymentIntentId?: string | null, createdAt: any, updatedAt: any, order?: { __typename?: 'Order', id: number, status: OrderStatus, createdAt: any, updatedAt: any, shop?: { __typename?: 'Shop', id: number, image?: string | null, name: string, address: string } | null } | null }> | null } };

export type GetPromotedShopsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPromotedShopsQuery = { __typename?: 'Query', getPromotedShops: { __typename?: 'ShopsQueryOutput', success: boolean, data?: Array<{ __typename?: 'Shop', id: number, image?: string | null, name: string, address: string, ownerId: number, isPromoted?: boolean | null, promotedUntil?: string | null, categories?: Array<{ __typename?: 'Category', id: number, name: string, slug: string, image?: string | null }> | null }> | null } };

export type GetShopByIdQueryVariables = Exact<{
  getShopByIdInput: GetShopByIdDto;
}>;


export type GetShopByIdQuery = { __typename?: 'Query', getShopById: { __typename?: 'ShopQueryOutput', success: boolean, data?: { __typename?: 'Shop', id: number, image?: string | null, name: string, address: string, ownerId: number, isPromoted?: boolean | null, promotedUntil?: string | null, products?: Array<{ __typename?: 'Product', id: number, name: string, price: number, image?: string | null, description: string, options?: Array<{ __typename?: 'Option', extra?: number | null, label: string }> | null }> | null, categories?: Array<{ __typename?: 'Category', id: number, name: string, slug: string, image?: string | null }> | null } | null } };

export type GetShopOrderQueryVariables = Exact<{
  getShopOrderInput: GetShopOrderDto;
}>;


export type GetShopOrderQuery = { __typename?: 'Query', getShopOrder: { __typename?: 'OrderQueryOutput', success: boolean, data?: { __typename?: 'Order', id: number, status: OrderStatus, orderItems?: Array<{ __typename?: 'OrderItem', id: number, quantity: number, orderChoices?: Array<{ __typename?: 'OrderChoice', label: string }> | null, product?: { __typename?: 'Product', id: number, name: string } | null }> | null } | null } };

export type GetShopsQueryVariables = Exact<{
  getShopsInput: GetShopsDto;
}>;


export type GetShopsQuery = { __typename?: 'Query', getShops: { __typename?: 'ShopsQueryOutput', success: boolean, totalPages?: number | null, totalItems?: number | null, data?: Array<{ __typename?: 'Shop', id: number, image?: string | null, name: string, address: string, ownerId: number, isPromoted?: boolean | null, promotedUntil?: string | null, categories?: Array<{ __typename?: 'Category', id: number, image?: string | null, name: string, slug: string }> | null }> | null } };

export type OrderStatusSubscriptionVariables = Exact<{
  orderStatusInput: OrderStatusDto;
}>;


export type OrderStatusSubscription = { __typename?: 'Subscription', orderStatus: { __typename?: 'Order', id: number, status: OrderStatus, total?: number | null, createdAt: any, updatedAt: any, customer?: { __typename?: 'User', id: number, name: string } | null, driver?: { __typename?: 'User', id: number, name: string } | null, shop?: { __typename?: 'Shop', id: number, name: string } | null } };

export type PendingOrderSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type PendingOrderSubscription = { __typename?: 'Subscription', pendingOrder: { __typename?: 'Order', id: number, shopId?: number | null, status: OrderStatus } };


export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createProductInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createProductInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createProductInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const CreateOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createOrderInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOrderDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createOrderInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createOrderInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"orderId"}}]}}]}}]} as unknown as DocumentNode<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreatePaymentIntentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPaymentIntent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createPaymentIntentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePaymentIntentDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPaymentIntent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPaymentIntentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createPaymentIntentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"paymentIntent"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>;
export const CreatePromotionPaymentIntentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPromotionPaymentIntent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createPromotionPaymentIntentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePromotionPaymentIntentDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPromotionPaymentIntent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPromotionPaymentIntentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createPromotionPaymentIntentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"paymentIntent"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePromotionPaymentIntentMutation, CreatePromotionPaymentIntentMutationVariables>;
export const CreateShopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createShop"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createShopInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateShopDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createShop"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createShopInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createShopInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<CreateShopMutation, CreateShopMutationVariables>;
export const CreateStripeUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createStripeUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createStripeUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStripeUserDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStripeUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createStripeUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createStripeUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<CreateStripeUserMutation, CreateStripeUserMutationVariables>;
export const DeleteProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProductInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteProductDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteProductInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProductInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<DeleteProductMutation, DeleteProductMutationVariables>;
export const EditOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editOrderInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditOrderDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editOrderInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editOrderInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<EditOrderMutation, EditOrderMutationVariables>;
export const EditShopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editShop"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editShopInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditShopDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editShop"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editShopInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editShopInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<EditShopMutation, EditShopMutationVariables>;
export const EditUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editUserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editUserProfileInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditUserProfileDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editUserProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editUserProfileInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editUserProfileInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<EditUserProfileMutation, EditUserProfileMutationVariables>;
export const EmailVerificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"emailVerification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emailVerificationInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailVerificationDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailVerification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"emailVerificationInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emailVerificationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<EmailVerificationMutation, EmailVerificationMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const PasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"passwordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"passwordResetInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PasswordResetDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"passwordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"passwordResetInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"passwordResetInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<PasswordResetMutation, PasswordResetMutationVariables>;
export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refreshToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signupInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signupInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signupInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const UpdatePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatePasswordInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePasswordDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updatePasswordInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatePasswordInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const VerifyResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verifyResetInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyResetDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"verifyResetInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verifyResetInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<VerifyResetMutation, VerifyResetMutationVariables>;
export const GetAuthUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAuthUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAuthUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"stripeCustomerId"}}]}}]}}]} as unknown as DocumentNode<GetAuthUserQuery, GetAuthUserQueryVariables>;
export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const DeliveryOrderDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"deliveryOrderDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deliveryOrderDetailInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeliveryOrderDetailDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deliveryOrderDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deliveryOrderDetailInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deliveryOrderDetailInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"shop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DeliveryOrderDetailQuery, DeliveryOrderDetailQueryVariables>;
export const GetOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getOrderInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetOrderDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getOrderInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getOrderInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOrderQuery, GetOrderQueryVariables>;
export const GetOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOrders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getOrdersInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetOrdersDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOrders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getOrdersInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getOrdersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOrdersQuery, GetOrdersQueryVariables>;
export const GetOwnerIndividualShopDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOwnerIndividualShop"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getOwnerIndividualShopInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetOwnerIndividualShopDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOwnerIndividualShop"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getOwnerIndividualShopInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getOwnerIndividualShopInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"isPromoted"}},{"kind":"Field","name":{"kind":"Name","value":"promotedUntil"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOwnerIndividualShopQuery, GetOwnerIndividualShopQueryVariables>;
export const GetOwnerPaymentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOwnerPayments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOwnerPayments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"stripePaymentIntentId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"promoDuration"}},{"kind":"Field","name":{"kind":"Name","value":"shop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isPromoted"}},{"kind":"Field","name":{"kind":"Name","value":"promotedUntil"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOwnerPaymentsQuery, GetOwnerPaymentsQueryVariables>;
export const GetOwnerShopsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOwnerShops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOwnerShops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"isPromoted"}},{"kind":"Field","name":{"kind":"Name","value":"promotedUntil"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOwnerShopsQuery, GetOwnerShopsQueryVariables>;
export const GetPaymentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPayments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPayments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"stripePaymentIntentId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"shop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPaymentsQuery, GetPaymentsQueryVariables>;
export const GetPromotedShopsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPromotedShops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPromotedShops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"isPromoted"}},{"kind":"Field","name":{"kind":"Name","value":"promotedUntil"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPromotedShopsQuery, GetPromotedShopsQueryVariables>;
export const GetShopByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getShopById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getShopByIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetShopByIdDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getShopById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getShopByIdInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getShopByIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"isPromoted"}},{"kind":"Field","name":{"kind":"Name","value":"promotedUntil"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"extra"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetShopByIdQuery, GetShopByIdQueryVariables>;
export const GetShopOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getShopOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getShopOrderInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetShopOrderDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getShopOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getShopOrderInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getShopOrderInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"orderItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"orderChoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetShopOrderQuery, GetShopOrderQueryVariables>;
export const GetShopsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getShops"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getShopsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetShopsDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getShops"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getShopsInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getShopsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"isPromoted"}},{"kind":"Field","name":{"kind":"Name","value":"promotedUntil"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetShopsQuery, GetShopsQueryVariables>;
export const OrderStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"orderStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderStatusInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderStatusDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderStatusInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderStatusInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"driver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<OrderStatusSubscription, OrderStatusSubscriptionVariables>;
export const PendingOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"pendingOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pendingOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shopId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<PendingOrderSubscription, PendingOrderSubscriptionVariables>;