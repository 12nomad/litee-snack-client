import { Helmet } from 'react-helmet-async';
import { FaRegCreditCard } from 'react-icons/fa';

import Loading from '../../../../components/ui/Loading';
import ErrorHandler from '../../../../components/ui/ErrorHandler';
import queryService from '../../../../services/query.service';
import ContentWrapper from '../../../../components/ui/ContentWrapper';
import CommonHeader from '../../../../components/ui/CommonHeader';

const OwnerDashboard = () => {
  const { data, error, isLoading } = queryService.ownerDashboard();

  if (isLoading) return <Loading />;

  if (error) return <ErrorHandler error={error} />;

  return (
    <section>
      <Helmet>
        <title>Dashboard | Litee Snack🍔</title>
      </Helmet>

      <ContentWrapper>
        <CommonHeader Icon={FaRegCreditCard} title="Payments" />

        {data.getOwnerPayments.data?.map((payment) => (
          <div
            key={payment.id}
            className="relative mb-2 w-full flex items-center gap-2"
          >
            <div>
              <h3 className="font-bold text-rusty-red">
                {payment.promoDuration} Days Promotion
              </h3>
              <p>
                <span className="font-medium">Shop: </span>
                {payment.shop?.name}
              </p>
              <h4>
                <span className="font-medium">Ref: </span>
                {payment.stripePaymentIntentId}
              </h4>
              <p>
                {' '}
                <span className="font-medium">Total: </span>
                {payment.amount / 100}&#36;
              </p>
            </div>
            <div className="absolute -bottom-0 left-0 w-full h-[1px] bg-slate-400"></div>
          </div>
        ))}
      </ContentWrapper>
    </section>
  );
};

export default OwnerDashboard;
