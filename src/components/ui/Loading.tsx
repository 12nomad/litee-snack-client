import { Spinner } from 'flowbite-react';

interface ILoading {
  withNav?: boolean;
}

const Loading = ({ withNav = true }: ILoading) => {
  return (
    <div
      className={` w-full grid place-items-center ${
        withNav ? 'h-[calc(100vh-108px)]' : 'h-screen'
      }`}
    >
      <Spinner color="failure" />
    </div>
  );
};

export default Loading;
