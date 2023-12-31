import { Route, Routes } from "react-router-dom";

import Checkout from "./client/checkout";
import OrderDashboard from "./client/order-dashboard";
import OrderDetail from "./client/order-detail";
import ShopDetail from "./client/shop-detail";
import CheckoutSuccess from "./common/checkout-success/CheckoutSuccess";
import Nav from "../../components/ui/Nav";
import AddProduct from "./owner/add-product";
import BuyPromotion from "./owner/buy-promotion";
import CreateShop from "./owner/create-shop";
import OwnerDashboard from "./owner/owner-dashboard";
import OwnerShopDetail from "./owner/shop-detail";
import OwnerShopOrderDetail from "./owner/owner-shop-order-detail";
import { Role } from "../../gql/generated/graphql";
import useUserQuery from "../../hooks/useUserQuery";
import AccountVerification from "./common/account-verification/AccountVerification";
import EditProfile from "./common/edit-profile/EditProfile";
import NotFound from "./common/not-found/NotFound";
import OwnerShopOrders from "./owner/owner-shop-orders";
import PromoCheckout from "./owner/promo-checkout";
import Shops from "./client/home";
import OwnerShops from "./owner/home";
import EditShop from "./owner/edit-shop";
import Deliveries from "./delivery/home";
import DeliveryDetail from "./delivery/delivery-detail";

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
