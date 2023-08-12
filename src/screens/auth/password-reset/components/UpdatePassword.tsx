import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { Steps } from '..';
import usePasswordUpdate from '../hooks/usePasswordUpdate';
import {
  ResetPasswordStepThreeValidationSchema,
  resetPasswordStepThreeValidationSchema,
} from '../../../../schemas/user.schema';
import SubmitButton from '../../../../components/form/SubmitButton';
import { IFormField } from '../../../../interfaces/form-fields.interface';
import Input from '../../../../components/form/Input';

interface IPasswordUpdate {
  setStep: Dispatch<SetStateAction<Steps>>;
  setVerificationEmail: Dispatch<SetStateAction<string>>;
  email: string;
}

const updatePasswordFields: IFormField<FieldValues>[] = [
  {
    name: 'password',
    label: 'Password: ',
    type: 'password',
  },
  {
    name: 'passwordConfirmation',
    label: 'Confirm Password: ',
    type: 'password',
  },
];

const PasswordUpdate = ({
  setStep,
  email,
  setVerificationEmail,
}: IPasswordUpdate) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ResetPasswordStepThreeValidationSchema>({
    resolver: zodResolver(resetPasswordStepThreeValidationSchema),
  });
  const navigate = useNavigate();

  const onSuccess = () => {
    reset();
    setStep('1');
    setVerificationEmail('');
    navigate('/auth');
  };

  const { mutate, isLoading, error } = usePasswordUpdate(onSuccess);

  const onSubmit = ({ password }: ResetPasswordStepThreeValidationSchema) => {
    mutate({ updatePasswordInput: { email, password } });
  };

  return (
    <form
      className="space-y-4 md:space-y-6 text-rusty-red"
      onSubmit={handleSubmit(onSubmit)}
    >
      {updatePasswordFields.map((el) => (
        <Input
          key={el.name}
          name={el.name}
          label={el.label}
          type={el.type}
          register={register}
          errors={errors}
        />
      ))}

      <SubmitButton error={error} isLoading={isLoading} label="Update" />

      <div className="flex justify-between items-center ">
        <p className="text-sm font-light text-gray-500 ">
          Return to{' '}
          <Link
            to="/auth"
            className="font-medium text-sky-700 hover:underline underline"
          >
            Sign in.
          </Link>
        </p>
      </div>
    </form>
  );
};

export default PasswordUpdate;
