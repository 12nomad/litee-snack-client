import { Helmet } from 'react-helmet-async';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import Loading from '../../../../components/ui/Loading';
import ErrorHandler from '../../../../components/ui/ErrorHandler';
import ContentWrapper from '../../../../components/ui/ContentWrapper';
import queryService from '../../../../services/query.service';
import CommonHeader from '../../../../components/ui/CommonHeader';

const OrderDashboard = () => {
  const { data, isLoading, error } = queryService.orderDahsboard();

  if (isLoading) return <Loading />;

  if (error) return <ErrorHandler error={error} />;

  return (
    <section>
      <Helmet>
        <title>Dashboard | Litee Snack🍔</title>
      </Helmet>

      <ContentWrapper>
        <CommonHeader Icon={BsFillBagCheckFill} title="Orders" />

        {data.getPayments.data?.map((payment) => (
          <div key={payment.id} className=" relative w-full mb-2">
            <div>
              <h3 className="font-bold text-rusty-red">
                Order from {payment.order?.shop?.name}
              </h3>
              <h4>
                <span className="font-medium">Ref: </span>
                {payment.stripePaymentIntentId}
              </h4>
              <p>
                {' '}
                <span className="font-medium">Total: </span>
                {payment.amount}&#36;
              </p>
              <Link to={`/dashboard/detail/${payment.order?.id}`}>
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

export default OrderDashboard;
