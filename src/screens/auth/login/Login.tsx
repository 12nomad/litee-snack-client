import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';

import {
  LogInValidationSchema,
  logInValidationSchema,
} from '../../../schemas/user.schema';
import mutationService from '../../../services/mutation.service';
import Input from '../../../components/form/Input';
import { IFormField } from '../../../interfaces/form-fields.interface';
import SubmitButton from '../../../components/form/SubmitButton';

const loginFields: IFormField<FieldValues>[] = [
  {
    label: 'E-mail: ',
    name: 'email',
  },
  {
    label: 'Password: ',
    name: 'password',
    type: 'password',
  },
];

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LogInValidationSchema>({
    resolver: zodResolver(logInValidationSchema),
  });
  const navigate = useNavigate();

  const onSuccess = () => {
    reset();
    navigate('/', { replace: true });
  };
  const { mutate, isLoading, error } = mutationService.login(onSuccess);

  const onSubmit = ({ email, password }: LogInValidationSchema) => {
    mutate({
      loginInput: { email, password },
    });
  };

  return (
    <section className="w-[344px] md:w-[422px]">
      <Helmet>
        <title>Login | Litee Snack🍔</title>
      </Helmet>

      <div className="md:w-[422px] bg-white rounded-lg shadow-sm text-left">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl  flex items-center justify-center gap-2">
            Welcome back.
          </h1>
          <form
            className="space-y-4 md:space-y-6 text-rusty-red"
            onSubmit={handleSubmit(onSubmit)}
          >
            {loginFields.map((el) => (
              <Input
                key={el.name}
                name={el.name}
                label={el.label}
                type={el.type}
                register={register}
                errors={errors}
              />
            ))}

            <SubmitButton isLoading={isLoading} error={error} label="Sign in" />

            <div className="flex justify-between items-center gap-2 md:gap-0">
              <p className="text-sm font-light text-gray-500 ">
                No account yet?{' '}
                <Link
                  to="/auth/signup"
                  className="font-medium text-sky-700 hover:underline underline"
                >
                  Sign up.
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

export default Login;
