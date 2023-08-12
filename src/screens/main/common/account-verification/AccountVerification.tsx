import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';

import useUserQuery from '../../../../hooks/useUserQuery';
import {
  AccountVerificationValidationSchema,
  accountVerificationValidationSchema,
} from '../../../../schemas/user.schema';
import mutationService from '../../../../services/mutation.service';
import ContentWrapper from '../../../../components/ui/ContentWrapper';
import Input from '../../../../components/form/Input';
import SubmitButton from '../../../../components/form/SubmitButton';
import useCartStore from '../../../../stores/cart.store';
import { Role } from '../../../../gql/generated/graphql';

const AccountVerification = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AccountVerificationValidationSchema>({
    resolver: zodResolver(accountVerificationValidationSchema),
  });

  const user = useUserQuery();
  const currentShopId = useCartStore((s) => s.currentShopId);
  if (user?.verified) return <Navigate to="/" replace={true} />;

  const onSuccess = () => {
    reset();

    if (currentShopId > 0 && user?.role === Role.Shop)
      return navigate(`/${currentShopId}/buy-promotion`, { replace: true });

    if (currentShopId > 0 && user?.role === Role.Client)
      return navigate(`/${currentShopId}`, { replace: true });

    return navigate('/', { replace: true });
  };
  const { mutate, isLoading, error } =
    mutationService.accountVerification(onSuccess);

  const onSubmit = ({ code }: AccountVerificationValidationSchema) => {
    mutate({
      emailVerificationInput: { code },
    });
  };

  return (
    <ContentWrapper>
      <section className="grid w-full place-items-center text-center">
        <Helmet>
          <title>Account Verification | Litee Snack🍔</title>
        </Helmet>

        <div>
          <div className="md:w-[444px] bg-white rounded-lg shadow-sm text-left">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <h1 className="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl  flex items-center justify-center gap-2">
                  Account Verification.
                </h1>
                <p className=" text-center mt-2 underline">
                  A verification code has been sent to your e-mail{' '}
                </p>
              </div>
              <form
                className="space-y-4 md:space-y-6 text-rusty-red"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  key="code"
                  name="code"
                  label="Verification Code: "
                  register={register}
                  errors={errors}
                />

                <SubmitButton
                  error={error}
                  isLoading={isLoading}
                  label="Verify"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default AccountVerification;
