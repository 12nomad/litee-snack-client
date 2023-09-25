import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import {
  SignupValidationSchema,
  signupValidationSchema,
} from '../../../schemas/user.schema';
import { Role } from '../../../gql/generated/graphql';
import mutationService from '../../../services/mutation.service';
import { IFormField } from '../../../interfaces/form-fields.interface';
import Input from '../../../components/form/Input';
import SubmitButton from '../../../components/form/SubmitButton';

const signupFields: IFormField<FieldValues>[] = [
  {
    label: 'Name: ',
    name: 'name',
  },
  {
    label: 'E-mail: ',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Password: ',
    name: 'password',
    type: 'password',
  },
  {
    label: 'Confirm Password: ',
    name: 'passwordConfirmation',
    type: 'password',
  },
];

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<SignupValidationSchema>({
    resolver: zodResolver(signupValidationSchema),
  });
  const navigate = useNavigate();

  const onSuccess = () => {
    reset();
    navigate('/auth', { replace: true });
  };
  const {
    mutate: mutateStripeUser,
    isLoading: stripeUserLoading,
    error: stripeUserError,
  } = mutationService.createStripeUser();
  const { mutate, isLoading, error } = mutationService.signup(
    { email: getValues('email'), name: getValues('name') },
    mutateStripeUser,
    onSuccess,
  );

  const onSubmit = ({
    email,
    name,
    password,
    role,
  }: SignupValidationSchema) => {
    mutate({
      signupInput: { email, name, password, role },
    });
  };

  return (
    <section className="w-[344px] md:w-[422px]">
      <Helmet>
        <title>Sign Up | Litee Snack🍔</title>
      </Helmet>

      <div className="md:w-[422px] bg-white rounded-lg shadow-sm text-left mb-6">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl  flex items-center justify-center gap-2">
            Create new account.
          </h1>
          <form
            className="space-y-4 md:space-y-6 text-rusty-red"
            onSubmit={handleSubmit(onSubmit)}
          >
            {signupFields.map((el) => (
              <Input
                key={el.name}
                name={el.name}
                label={el.label}
                type={el.type}
                register={register}
                errors={errors}
              />
            ))}

            <div>
              <label
                htmlFor="account"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Account type
              </label>
              <select
                id="account"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                  errors.role?.message
                    ? 'focus:ring-rose-700 focus:border-rose-700'
                    : 'focus:ring-sky-700 focus:border-sky-700'
                }`}
                {...register('role')}
              >
                <option>Select your account type</option>
                {Object.values(Role).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.role?.message && (
                <p role="alert" className="text-xs text-rose-700 mt-2">
                  {errors.role?.message}
                </p>
              )}
            </div>

            <div>
              <SubmitButton
                error={error || stripeUserError}
                isLoading={isLoading || stripeUserLoading}
                label="Register"
              />
            </div>
            <div className="flex justify-between items-center gap-2 md:gap-0">
              <p className="text-sm font-light text-gray-500 ">
                Have an account?{' '}
                <Link
                  to="/auth"
                  className="font-medium text-sky-700 hover:underline underline"
                >
                  Sign in.
                </Link>
              </p>

              <p className="text-sm font-light text-gray-500 ">
                <Link
                  to="/auth/password-reset"
                  className="font-medium text-sky-700"
                >
                  Forgot password?
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
