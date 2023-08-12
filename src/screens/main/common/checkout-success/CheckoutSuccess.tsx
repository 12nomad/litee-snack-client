import { Link } from 'react-router-dom';
import ContentWrapper from '../../../../components/ui/ContentWrapper';

const CheckoutSuccess = () => {
  return (
    <ContentWrapper>
      <div className="w-full grid place-items-center my-6 text-center">
        <h2 className="text-green-600 text-lg">
          Your payment went through successfully
        </h2>
        <p>Please check your email for the receipt</p>
        <Link
          to="/dashboard"
          className="underline font-bold mt-2 text-rusty-red"
        >
          Check your order 👉
        </Link>
      </div>
    </ContentWrapper>
  );
};

export default CheckoutSuccess;
