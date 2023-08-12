/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createProduct($createProductInput: CreateProductDto!) {\n    createProduct(createProductInput: $createProductInput) {\n      success\n    }\n  }\n": types.CreateProductDocument,
    "\n  mutation createOrder($createOrderInput: CreateOrderDto!) {\n    createOrder(createOrderInput: $createOrderInput) {\n      success\n      orderId\n    }\n  }\n": types.CreateOrderDocument,
    "\n  mutation createPaymentIntent(\n    $createPaymentIntentInput: CreatePaymentIntentDto!\n  ) {\n    createPaymentIntent(createPaymentIntentInput: $createPaymentIntentInput) {\n      success\n      data {\n        clientSecret\n        paymentIntent\n      }\n    }\n  }\n": types.CreatePaymentIntentDocument,
    "\n  mutation createPromotionPaymentIntent(\n    $createPromotionPaymentIntentInput: CreatePromotionPaymentIntentDto!\n  ) {\n    createPromotionPaymentIntent(\n      createPromotionPaymentIntentInput: $createPromotionPaymentIntentInput\n    ) {\n      success\n      data {\n        clientSecret\n        paymentIntent\n      }\n    }\n  }\n": types.CreatePromotionPaymentIntentDocument,
    "\n  mutation createShop($createShopInput: CreateShopDto!) {\n    createShop(createShopInput: $createShopInput) {\n      success\n    }\n  }\n": types.CreateShopDocument,
    "\n  mutation createStripeUser($createStripeUserInput: CreateStripeUserDto!) {\n    createStripeUser(createStripeUserInput: $createStripeUserInput) {\n      success\n    }\n  }\n": types.CreateStripeUserDocument,
    "\n  mutation deleteProduct($deleteProductInput: DeleteProductDto!) {\n    deleteProduct(deleteProductInput: $deleteProductInput) {\n      success\n    }\n  }\n": types.DeleteProductDocument,
    "\n  mutation editOrder($editOrderInput: EditOrderDto!) {\n    editOrder(editOrderInput: $editOrderInput) {\n      success\n    }\n  }\n": types.EditOrderDocument,
    "\n  mutation editShop($editShopInput: EditShopDto!) {\n    editShop(editShopInput: $editShopInput) {\n      success\n    }\n  }\n": types.EditShopDocument,
    "\n  mutation editUserProfile($editUserProfileInput: EditUserProfileDto!) {\n    editUserProfile(editUserProfileInput: $editUserProfileInput) {\n      success\n    }\n  }\n": types.EditUserProfileDocument,
    "\n  mutation emailVerification($emailVerificationInput: EmailVerificationDto!) {\n    emailVerification(emailVerificationInput: $emailVerificationInput) {\n      success\n    }\n  }\n": types.EmailVerificationDocument,
    "\n  mutation login($loginInput: LoginDto!) {\n    login(loginInput: $loginInput) {\n      success\n    }\n  }\n": types.LoginDocument,
    "\n  mutation logout {\n    logout {\n      success\n    }\n  }\n": types.LogoutDocument,
    "\n  mutation passwordReset($passwordResetInput: PasswordResetDto!) {\n    passwordReset(passwordResetInput: $passwordResetInput) {\n      success\n    }\n  }\n": types.PasswordResetDocument,
    "\n  mutation refreshToken {\n    refreshToken {\n      success\n    }\n  }\n": types.RefreshTokenDocument,
    "\n  mutation signup($signupInput: SignupDto!) {\n    signup(signupInput: $signupInput) {\n      success\n    }\n  }\n": types.SignupDocument,
    "\n  mutation updatePassword($updatePasswordInput: UpdatePasswordDto!) {\n    updatePassword(updatePasswordInput: $updatePasswordInput) {\n      success\n    }\n  }\n": types.UpdatePasswordDocument,
    "\n  mutation verifyReset($verifyResetInput: VerifyResetDto!) {\n    verifyReset(verifyResetInput: $verifyResetInput) {\n      success\n    }\n  }\n": types.VerifyResetDocument,
    "\n  query getAuthUser {\n    getAuthUser {\n      id\n      name\n      email\n      role\n      verified\n      image\n      stripeCustomerId\n    }\n  }\n": types.GetAuthUserDocument,
    "\n  query getCategories {\n    getCategories {\n      success\n      data {\n        id\n        image\n        name\n        slug\n      }\n    }\n  }\n": types.GetCategoriesDocument,
    "\n  query deliveryOrderDetail(\n    $deliveryOrderDetailInput: DeliveryOrderDetailDto!\n  ) {\n    deliveryOrderDetail(deliveryOrderDetailInput: $deliveryOrderDetailInput) {\n      success\n      data {\n        id\n        status\n\n        shop {\n          id\n          name\n        }\n        customer {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.DeliveryOrderDetailDocument,
    "\n  query getOrder($getOrderInput: GetOrderDto!) {\n    getOrder(getOrderInput: $getOrderInput) {\n      success\n      data {\n        id\n        status\n        total\n        createdAt\n        updatedAt\n        customer {\n          id\n          name\n        }\n        driver {\n          id\n          name\n        }\n        shop {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.GetOrderDocument,
    "\n  query getOrders($getOrdersInput: GetOrdersDto!) {\n    getOrders(getOrdersInput: $getOrdersInput) {\n      success\n      data {\n        id\n        status\n\n        customer {\n          id\n          name\n        }\n        shop {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.GetOrdersDocument,
    "\n  query getOwnerIndividualShop(\n    $getOwnerIndividualShopInput: GetOwnerIndividualShopDto!\n  ) {\n    getOwnerIndividualShop(\n      getOwnerIndividualShopInput: $getOwnerIndividualShopInput\n    ) {\n      success\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n        products {\n          id\n          name\n          price\n          image\n          description\n        }\n        categories {\n          id\n          name\n          slug\n          image\n        }\n      }\n    }\n  }\n": types.GetOwnerIndividualShopDocument,
    "\n  query getOwnerPayments {\n    getOwnerPayments {\n      success\n      data {\n        id\n        amount\n        stripePaymentIntentId\n        status\n        currency\n        createdAt\n        updatedAt\n        type\n        promoDuration\n        shop {\n          id\n          image\n          name\n          address\n          isPromoted\n          promotedUntil\n        }\n      }\n    }\n  }\n": types.GetOwnerPaymentsDocument,
    "\n  query getOwnerShops {\n    getOwnerShops {\n      success\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n        categories {\n          id\n          image\n          name\n          slug\n        }\n      }\n    }\n  }\n": types.GetOwnerShopsDocument,
    "\n  query getPayments {\n    getPayments {\n      success\n      data {\n        id\n        amount\n        stripePaymentIntentId\n        createdAt\n        updatedAt\n        order {\n          id\n          status\n          createdAt\n          updatedAt\n\n          shop {\n            id\n            image\n            name\n            address\n          }\n        }\n      }\n    }\n  }\n": types.GetPaymentsDocument,
    "\n  query getPromotedShops {\n    getPromotedShops {\n      success\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n\n        categories {\n          id\n          name\n          slug\n          image\n        }\n      }\n    }\n  }\n": types.GetPromotedShopsDocument,
    "\n  query getShopById($getShopByIdInput: GetShopByIdDto!) {\n    getShopById(getShopByIdInput: $getShopByIdInput) {\n      success\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n        products {\n          id\n          name\n          price\n          image\n          description\n          options {\n            extra\n            label\n          }\n        }\n        categories {\n          id\n          name\n          slug\n          image\n        }\n      }\n    }\n  }\n": types.GetShopByIdDocument,
    "\n  query getShopOrder($getShopOrderInput: GetShopOrderDto!) {\n    getShopOrder(getShopOrderInput: $getShopOrderInput) {\n      success\n      data {\n        id\n        status\n\n        orderItems {\n          id\n          quantity\n          orderChoices {\n            label\n          }\n\n          product {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetShopOrderDocument,
    "\n  query getShops($getShopsInput: GetShopsDto!) {\n    getShops(getShopsInput: $getShopsInput) {\n      success\n      totalPages\n      totalItems\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n        categories {\n          id\n          image\n          name\n          slug\n        }\n      }\n    }\n  }\n": types.GetShopsDocument,
    "\n  subscription orderStatus($orderStatusInput: OrderStatusDto!) {\n    orderStatus(orderStatusInput: $orderStatusInput) {\n      id\n      status\n      total\n      createdAt\n      updatedAt\n      customer {\n        id\n        name\n      }\n      driver {\n        id\n        name\n      }\n      shop {\n        id\n        name\n      }\n    }\n  }\n": types.OrderStatusDocument,
    "\n  subscription pendingOrder {\n    pendingOrder {\n      id\n      shopId\n      status\n    }\n  }\n": types.PendingOrderDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createProduct($createProductInput: CreateProductDto!) {\n    createProduct(createProductInput: $createProductInput) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation createProduct($createProductInput: CreateProductDto!) {\n    createProduct(createProductInput: $createProductInput) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createOrder($createOrderInput: CreateOrderDto!) {\n    createOrder(createOrderInput: $createOrderInput) {\n      success\n      orderId\n    }\n  }\n"): (typeof documents)["\n  mutation createOrder($createOrderInput: CreateOrderDto!) {\n    createOrder(createOrderInput: $createOrderInput) {\n      success\n      orderId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createPaymentIntent(\n    $createPaymentIntentInput: CreatePaymentIntentDto!\n  ) {\n    createPaymentIntent(createPaymentIntentInput: $createPaymentIntentInput) {\n      success\n      data {\n        clientSecret\n        paymentIntent\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createPaymentIntent(\n    $createPaymentIntentInput: CreatePaymentIntentDto!\n  ) {\n    createPaymentIntent(createPaymentIntentInput: $createPaymentIntentInput) {\n      success\n      data {\n        clientSecret\n        paymentIntent\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createPromotionPaymentIntent(\n    $createPromotionPaymentIntentInput: CreatePromotionPaymentIntentDto!\n  ) {\n    createPromotionPaymentIntent(\n      createPromotionPaymentIntentInput: $createPromotionPaymentIntentInput\n    ) {\n      success\n      data {\n        clientSecret\n        paymentIntent\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createPromotionPaymentIntent(\n    $createPromotionPaymentIntentInput: CreatePromotionPaymentIntentDto!\n  ) {\n    createPromotionPaymentIntent(\n      createPromotionPaymentIntentInput: $createPromotionPaymentIntentInput\n    ) {\n      success\n      data {\n        clientSecret\n        paymentIntent\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createShop($createShopInput: CreateShopDto!) {\n    createShop(createShopInput: $createShopInput) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation createShop($createShopInput: CreateShopDto!) {\n    createShop(createShopInput: $createShopInput) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createStripeUser($createStripeUserInput: CreateStripeUserDto!) {\n    createStripeUser(createStripeUserInput: $createStripeUserInput) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation createStripeUser($createStripeUserInput: CreateStripeUserDto!) {\n    createStripeUser(createStripeUserInput: $createStripeUserInput) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteProduct($deleteProductInput: DeleteProductDto!) {\n    deleteProduct(deleteProductInput: $deleteProductInput) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation deleteProduct($deleteProductInput: DeleteProductDto!) {\n    deleteProduct(deleteProductInput: $deleteProductInput) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation editOrder($editOrderInput: EditOrderDto!) {\n    editOrder(editOrderInput: $editOrderInput) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation editOrder($editOrderInput: EditOrderDto!) {\n    editOrder(editOrderInput: $editOrderInput) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation editShop($editShopInput: EditShopDto!) {\n    editShop(editShopInput: $editShopInput) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation editShop($editShopInput: EditShopDto!) {\n    editShop(editShopInput: $editShopInput) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation editUserProfile($editUserProfileInput: EditUserProfileDto!) {\n    editUserProfile(editUserProfileInput: $editUserProfileInput) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation editUserProfile($editUserProfileInput: EditUserProfileDto!) {\n    editUserProfile(editUserProfileInput: $editUserProfileInput) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation emailVerification($emailVerificationInput: EmailVerificationDto!) {\n    emailVerification(emailVerificationInput: $emailVerificationInput) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation emailVerification($emailVerificationInput: EmailVerificationDto!) {\n    emailVerification(emailVerificationInput: $emailVerificationInput) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation login($loginInput: LoginDto!) {\n    login(loginInput: $loginInput) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation login($loginInput: LoginDto!) {\n    login(loginInput: $loginInput) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation logout {\n    logout {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation logout {\n    logout {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation passwordReset($passwordResetInput: PasswordResetDto!) {\n    passwordReset(passwordResetInput: $passwordResetInput) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation passwordReset($passwordResetInput: PasswordResetDto!) {\n    passwordReset(passwordResetInput: $passwordResetInput) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation refreshToken {\n    refreshToken {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation refreshToken {\n    refreshToken {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation signup($signupInput: SignupDto!) {\n    signup(signupInput: $signupInput) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation signup($signupInput: SignupDto!) {\n    signup(signupInput: $signupInput) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updatePassword($updatePasswordInput: UpdatePasswordDto!) {\n    updatePassword(updatePasswordInput: $updatePasswordInput) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation updatePassword($updatePasswordInput: UpdatePasswordDto!) {\n    updatePassword(updatePasswordInput: $updatePasswordInput) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation verifyReset($verifyResetInput: VerifyResetDto!) {\n    verifyReset(verifyResetInput: $verifyResetInput) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation verifyReset($verifyResetInput: VerifyResetDto!) {\n    verifyReset(verifyResetInput: $verifyResetInput) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAuthUser {\n    getAuthUser {\n      id\n      name\n      email\n      role\n      verified\n      image\n      stripeCustomerId\n    }\n  }\n"): (typeof documents)["\n  query getAuthUser {\n    getAuthUser {\n      id\n      name\n      email\n      role\n      verified\n      image\n      stripeCustomerId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCategories {\n    getCategories {\n      success\n      data {\n        id\n        image\n        name\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCategories {\n    getCategories {\n      success\n      data {\n        id\n        image\n        name\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query deliveryOrderDetail(\n    $deliveryOrderDetailInput: DeliveryOrderDetailDto!\n  ) {\n    deliveryOrderDetail(deliveryOrderDetailInput: $deliveryOrderDetailInput) {\n      success\n      data {\n        id\n        status\n\n        shop {\n          id\n          name\n        }\n        customer {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query deliveryOrderDetail(\n    $deliveryOrderDetailInput: DeliveryOrderDetailDto!\n  ) {\n    deliveryOrderDetail(deliveryOrderDetailInput: $deliveryOrderDetailInput) {\n      success\n      data {\n        id\n        status\n\n        shop {\n          id\n          name\n        }\n        customer {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getOrder($getOrderInput: GetOrderDto!) {\n    getOrder(getOrderInput: $getOrderInput) {\n      success\n      data {\n        id\n        status\n        total\n        createdAt\n        updatedAt\n        customer {\n          id\n          name\n        }\n        driver {\n          id\n          name\n        }\n        shop {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getOrder($getOrderInput: GetOrderDto!) {\n    getOrder(getOrderInput: $getOrderInput) {\n      success\n      data {\n        id\n        status\n        total\n        createdAt\n        updatedAt\n        customer {\n          id\n          name\n        }\n        driver {\n          id\n          name\n        }\n        shop {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getOrders($getOrdersInput: GetOrdersDto!) {\n    getOrders(getOrdersInput: $getOrdersInput) {\n      success\n      data {\n        id\n        status\n\n        customer {\n          id\n          name\n        }\n        shop {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getOrders($getOrdersInput: GetOrdersDto!) {\n    getOrders(getOrdersInput: $getOrdersInput) {\n      success\n      data {\n        id\n        status\n\n        customer {\n          id\n          name\n        }\n        shop {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getOwnerIndividualShop(\n    $getOwnerIndividualShopInput: GetOwnerIndividualShopDto!\n  ) {\n    getOwnerIndividualShop(\n      getOwnerIndividualShopInput: $getOwnerIndividualShopInput\n    ) {\n      success\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n        products {\n          id\n          name\n          price\n          image\n          description\n        }\n        categories {\n          id\n          name\n          slug\n          image\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getOwnerIndividualShop(\n    $getOwnerIndividualShopInput: GetOwnerIndividualShopDto!\n  ) {\n    getOwnerIndividualShop(\n      getOwnerIndividualShopInput: $getOwnerIndividualShopInput\n    ) {\n      success\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n        products {\n          id\n          name\n          price\n          image\n          description\n        }\n        categories {\n          id\n          name\n          slug\n          image\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getOwnerPayments {\n    getOwnerPayments {\n      success\n      data {\n        id\n        amount\n        stripePaymentIntentId\n        status\n        currency\n        createdAt\n        updatedAt\n        type\n        promoDuration\n        shop {\n          id\n          image\n          name\n          address\n          isPromoted\n          promotedUntil\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getOwnerPayments {\n    getOwnerPayments {\n      success\n      data {\n        id\n        amount\n        stripePaymentIntentId\n        status\n        currency\n        createdAt\n        updatedAt\n        type\n        promoDuration\n        shop {\n          id\n          image\n          name\n          address\n          isPromoted\n          promotedUntil\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getOwnerShops {\n    getOwnerShops {\n      success\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n        categories {\n          id\n          image\n          name\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getOwnerShops {\n    getOwnerShops {\n      success\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n        categories {\n          id\n          image\n          name\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPayments {\n    getPayments {\n      success\n      data {\n        id\n        amount\n        stripePaymentIntentId\n        createdAt\n        updatedAt\n        order {\n          id\n          status\n          createdAt\n          updatedAt\n\n          shop {\n            id\n            image\n            name\n            address\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPayments {\n    getPayments {\n      success\n      data {\n        id\n        amount\n        stripePaymentIntentId\n        createdAt\n        updatedAt\n        order {\n          id\n          status\n          createdAt\n          updatedAt\n\n          shop {\n            id\n            image\n            name\n            address\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPromotedShops {\n    getPromotedShops {\n      success\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n\n        categories {\n          id\n          name\n          slug\n          image\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPromotedShops {\n    getPromotedShops {\n      success\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n\n        categories {\n          id\n          name\n          slug\n          image\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getShopById($getShopByIdInput: GetShopByIdDto!) {\n    getShopById(getShopByIdInput: $getShopByIdInput) {\n      success\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n        products {\n          id\n          name\n          price\n          image\n          description\n          options {\n            extra\n            label\n          }\n        }\n        categories {\n          id\n          name\n          slug\n          image\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getShopById($getShopByIdInput: GetShopByIdDto!) {\n    getShopById(getShopByIdInput: $getShopByIdInput) {\n      success\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n        products {\n          id\n          name\n          price\n          image\n          description\n          options {\n            extra\n            label\n          }\n        }\n        categories {\n          id\n          name\n          slug\n          image\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getShopOrder($getShopOrderInput: GetShopOrderDto!) {\n    getShopOrder(getShopOrderInput: $getShopOrderInput) {\n      success\n      data {\n        id\n        status\n\n        orderItems {\n          id\n          quantity\n          orderChoices {\n            label\n          }\n\n          product {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getShopOrder($getShopOrderInput: GetShopOrderDto!) {\n    getShopOrder(getShopOrderInput: $getShopOrderInput) {\n      success\n      data {\n        id\n        status\n\n        orderItems {\n          id\n          quantity\n          orderChoices {\n            label\n          }\n\n          product {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getShops($getShopsInput: GetShopsDto!) {\n    getShops(getShopsInput: $getShopsInput) {\n      success\n      totalPages\n      totalItems\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n        categories {\n          id\n          image\n          name\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getShops($getShopsInput: GetShopsDto!) {\n    getShops(getShopsInput: $getShopsInput) {\n      success\n      totalPages\n      totalItems\n      data {\n        id\n        image\n        name\n        address\n        ownerId\n        isPromoted\n        promotedUntil\n        categories {\n          id\n          image\n          name\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription orderStatus($orderStatusInput: OrderStatusDto!) {\n    orderStatus(orderStatusInput: $orderStatusInput) {\n      id\n      status\n      total\n      createdAt\n      updatedAt\n      customer {\n        id\n        name\n      }\n      driver {\n        id\n        name\n      }\n      shop {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription orderStatus($orderStatusInput: OrderStatusDto!) {\n    orderStatus(orderStatusInput: $orderStatusInput) {\n      id\n      status\n      total\n      createdAt\n      updatedAt\n      customer {\n        id\n        name\n      }\n      driver {\n        id\n        name\n      }\n      shop {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription pendingOrder {\n    pendingOrder {\n      id\n      shopId\n      status\n    }\n  }\n"): (typeof documents)["\n  subscription pendingOrder {\n    pendingOrder {\n      id\n      shopId\n      status\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;