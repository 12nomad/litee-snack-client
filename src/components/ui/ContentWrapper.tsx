import { PropsWithChildren } from 'react';

const ContentWrapper = ({ children }: PropsWithChildren) => {
  return (
    <main className="mx-[12px] md:mx-[32px] lg:mx-[60px] py-6">{children}</main>
  );
};

export default ContentWrapper;
