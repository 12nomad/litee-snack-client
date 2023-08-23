import { Route, Routes } from "react-router-dom";

import Checkout from "./client/checkout/Checkout";
import OrderDashboard from "./client/order-dashboard/OrderDashboard";
import OrderDetail from "./client/order-detail/OrderDetail";
import ShopDetail from "./client/shop-detail";
import CheckoutSuccess from "./common/checkout-success/CheckoutSuccess";
import Nav from "../../components/ui/Nav";
import AddProduct from "./owner/add-product/AddProduct";
import BuyPromotion from "./owner/buy-promotion/BuyPromotion";
import CreateShop from "./owner/create-shop/CreateShop";
import OwnerDashboard from "./owner/owner-dashboard/OwnerDashboard";
import OwnerShopDetail from "./owner/shop-detail/OwnerShopDetail";
import OwnerShopOrderDetail from "./owner/owner-shop-order-detail/OwnerShopOrderDetail";
import { Role } from "../../gql/generated/graphql";
import useUserQuery from "../../hooks/useUserQuery";
import AccountVerification from "./common/account-verification/AccountVerification";
import EditProfile from "./common/edit-profile/EditProfile";
import NotFound from "./common/not-found/NotFound";
import OwnerShopOrders from "./owner/owner-shop-orders/OwnerShopOrders";
import PromoCheckout from "./owner/promo-checkout/PromoCheckout";
import Shops from "./client/home";
import OwnerShops from "./owner/home/OwnerShops";
import EditShop from "./owner/edit-shop/EditShop";
import Deliveries from "./delivery/home/Deliveries";
import DeliveryDetail from "./delivery/delivery-detail/DeliveryDetail";

const Home = () => {
  const user = useUserQuery();

  return (
    <>
      <Nav />
      <main>
        <Routes>
          {user?.role === Role.Client && (
            <>
              <Route index element={<Shops />} />
              <Route path=":shopId" element={<ShopDetail />} />
              <Route path="checkout-success" element={<CheckoutSuccess />} />
              <Route path="verify-account" element={<AccountVerification />} />
              <Route path="dashboard" element={<OrderDashboard />} />
              <Route path=":shopId/checkout" element={<Checkout />} />
              <Route
                path="dashboard/detail/:orderId"
                element={<OrderDetail />}
              />
            </>
          )}
          {user?.role === Role.Shop && (
            <>
              <Route index element={<OwnerShops />} />
              <Route path=":shopId" element={<OwnerShopDetail />} />
              <Route path="create-shop" element={<CreateShop />} />
              <Route path="checkout-success" element={<CheckoutSuccess />} />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="verify-account" element={<AccountVerification />} />
              <Route path="profile" element={<EditProfile />} />
              <Route path=":shopId/add-product" element={<AddProduct />} />
              <Route path=":shopId/edit-shop" element={<EditShop />} />
              <Route path=":shopId/buy-promotion" element={<BuyPromotion />} />
              <Route path=":shopId/orders" element={<OwnerShopOrders />} />
              <Route
                path=":shopId/:promoDuration/checkout"
                element={<PromoCheckout />}
              />
              <Route
                path=":shopId/orders/:orderId"
                element={<OwnerShopOrderDetail />}
              />
            </>
          )}
          {user?.role === Role.Delivery && (
            <>
              <Route index element={<Deliveries />} />
              <Route path=":orderId" element={<DeliveryDetail />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default Home;
