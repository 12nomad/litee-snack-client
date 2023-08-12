import { Navbar, Avatar, Dropdown, Badge } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburger } from 'react-icons/gi';
import {
  HiOutlineUserCircle,
  HiOutlineMail,
  HiOutlineLogin,
} from 'react-icons/hi';
import { RiErrorWarningLine } from 'react-icons/ri';
import { MdNotifications, MdNotificationsActive } from 'react-icons/md';

import { Role } from '../../gql/generated/graphql';
import useShopNotif from '../../hooks/useShopNotif';
import useUserQuery from '../../hooks/useUserQuery';
import useNotificationStore from '../../stores/notification.store';
import mutationService from '../../services/mutation.service';

const Nav = () => {
  const user = useUserQuery();
  const navigate = useNavigate();

  const pendingOrder = useNotificationStore((s) => s.pendingOrder);
  const newNotif = useNotificationStore((s) => s.newNotif);
  const filterOrder = useNotificationStore((s) => s.filterOrder);
  const clearNotification = useNotificationStore((s) => s.clearNotification);

  const onSuccess = () => navigate('/auth', { replace: true });
  const { mutate } = mutationService.logout(onSuccess);

  useShopNotif();

  const onNewOrder = (orderId: number, shopId: number) => {
    filterOrder({ orderId, shopId });
    navigate(`${shopId}/orders/${orderId}`);
  };

  const onSignout = () => mutate();

  return (
    <header className="bg-white px-0 md:px-[11px] lg:px-[44px]">
      <Navbar fluid rounded>
        <Link to="/">
          <h2 className="flex items-center underline gap-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
            <GiHamburger size={25} />
            <span className="text-2xl font-lobster">Litee Snack</span>
          </h2>
        </Link>

        <div className="flex md:order-2">
          <div className="flex items-center gap-4">
            {user?.role !== Role.Client && user?.role !== Role.Delivery && (
              <Dropdown
                inline
                dismissOnClick
                arrowIcon={false}
                label={
                  newNotif ? (
                    <MdNotificationsActive
                      size={25}
                      className="text-rusty-red"
                    />
                  ) : (
                    <MdNotifications size={25} />
                  )
                }
              >
                <div className="px-4 py-2">
                  {pendingOrder.length > 0 ? (
                    <ul className="flex flex-col gap-1">
                      {pendingOrder.map((order) => (
                        <p key={order.orderId}>
                          New pending order{' '}
                          <span
                            className="font-medium text-rusty-red underline cursor-pointer"
                            onClick={() =>
                              onNewOrder(order.orderId, order.shopId)
                            }
                          >
                            #{order.orderId}
                          </span>
                        </p>
                      ))}
                    </ul>
                  ) : (
                    'No notification yet'
                  )}
                  {pendingOrder.length > 0 && (
                    <p
                      className="text-white font-medium rounded-sm text-center mt-2 cursor-pointer bg-rusty-red py-1 px-3"
                      onClick={() => clearNotification()}
                    >
                      Mark all as viewed
                    </p>
                  )}
                </div>
              </Dropdown>
            )}

            <Dropdown
              inline
              dismissOnClick
              arrowIcon={false}
              label={
                <Avatar
                  alt="User settings"
                  img={
                    user?.image
                      ? user.image
                      : 'https://static.thenounproject.com/png/4035892-200.png'
                  }
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="flex items-center text-sm">
                  <HiOutlineUserCircle size={20} />
                  <span className="ml-1 mr-3">{user?.name}</span>
                  {user?.role === Role.Delivery && (
                    <Badge color="purple">{user?.role}</Badge>
                  )}
                  {user?.role === Role.Shop && (
                    <Badge color="warning">{user?.role}</Badge>
                  )}
                  {user?.role === Role.Client && (
                    <Badge color="info">{user?.role}</Badge>
                  )}
                </span>
                <span className="flex items-center truncate text-sm gap-1 mb-2 mt-1">
                  <HiOutlineMail size={20} />
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Link to="/dashboard">
                <Dropdown.Item>Dashboard</Dropdown.Item>
              </Link>
              <Link to="/profile">
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              {!user?.verified && (
                <Link to="/verify-account">
                  <Dropdown.Item className="text-red-700 font-bold flex items-center gap-1 ">
                    <RiErrorWarningLine size={20} />
                    <span>Verify Account</span>
                  </Dropdown.Item>
                </Link>
              )}
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={onSignout}
                className="font-bold flex items-center gap-1 "
              >
                <HiOutlineLogin size={20} />
                <span>Sign out</span>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default Nav;
