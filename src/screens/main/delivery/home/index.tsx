import { Dropdown } from 'flowbite-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BiTask } from 'react-icons/bi';

import { OrderStatus } from '../../../../gql/generated/graphql';
import ErrorHandler from '../../../../components/ui/ErrorHandler';
import Loading from '../../../../components/ui/Loading';
import queryService from '../../../../services/query.service';
import ContentWrapper from '../../../../components/ui/ContentWrapper';

const Deliveries = () => {
  const [status, setStatus] = useState<OrderStatus.Ready | OrderStatus.Picked>(
    OrderStatus.Ready,
  );
  const { data, error, isLoading } = queryService.getOrders({
    getOrdersInput: { status },
  });

  if (isLoading) return <Loading />;

  if (error) return <ErrorHandler error={error} />;

  return (
    <section>
      <Helmet>
        <title>Orders | Litee Snack🍔</title>
      </Helmet>

      <ContentWrapper>
        <div className="relative mb-3">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-1 ">
              <BiTask size={25} />
              <span>Orders: </span>
            </h2>
            <Dropdown label={status} dismissOnClick inline>
              <Dropdown.Item onClick={() => setStatus(OrderStatus.Ready)}>
                {OrderStatus.Ready}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setStatus(OrderStatus.Picked)}>
                {OrderStatus.Picked}
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-600"></div>
        </div>

        {data.getOrders.data?.map((order) => (
          <div key={order.id} className="relative w-full mb-2">
            <div>
              <h3 className="font-bold text-rusty-red">Order #{order.id}</h3>
              <h4>
                <span className="font-medium">Shop: </span>
                {order.shop?.name}
              </h4>
              <h4>
                <span className="font-medium">Customer: </span>
                {order.customer?.name}
              </h4>
              <h4>
                <span className="font-medium">Status: </span>
                {order.status}
              </h4>
              <Link to={`/${order.id}`}>
                <p className="text-xs rounded-sm cursor-pointer px-2 py-1 bg-night-black text-white inline-block">
                  View Details &rarr;
                </p>
              </Link>
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-400"></div>
          </div>
        ))}
      </ContentWrapper>
    </section>
  );
};

export default Deliveries;
