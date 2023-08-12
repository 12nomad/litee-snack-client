import { ClientError } from 'graphql-request';
import { Spinner } from 'flowbite-react';

import getErrorMessage from '../../utils/get-error-message.util';

interface ISubmitButton {
  isLoading: boolean;
  error: ClientError | string | null;
  label: string;
}

const SubmitButton = ({ error, isLoading, label }: ISubmitButton) => {
  return (
    <div>
      <button
        type="submit"
        className="w-full text-slate-50 bg-rusty-red hover:bg-rusty-red-shade focus:ring-4 focus:outline-none focus:ring-rusty-red-tint font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled={isLoading}
      >
        {isLoading ? <Spinner color="failure" /> : label}
      </button>
      {error && (
        <p role="alert" className="text-xs text-rose-700 mt-2 font-bold ">
          <sup>*</sup>{' '}
          {(error instanceof ClientError &&
            getErrorMessage(error.response.errors).message) ||
            (typeof error === 'string' && error)}
        </p>
      )}
    </div>
  );
};

export default SubmitButton;
