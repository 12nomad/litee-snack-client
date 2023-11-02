interface ILandingFlowOrder {
  num: string;
  title: string;
  image: string;
  isInversed?: boolean;
}

const LandingFlowOrder = ({
  image,
  isInversed,
  title,
  num,
}: ILandingFlowOrder) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center space-y-16 mt-16 2xl:mt-0">
      <div className={isInversed ? "order-0 lg:order-1" : "order-0"}>
        <p className="text-rusty-red-tint text-8xl font-medium">{num}</p>
        <h4 className="mt-2 text-4xl font-medium">{title}</h4>
        <p className="mt-6 text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          sint sunt numquam doloremque ratione ipsam nisi reprehenderit repellat
          minus? Asperiores sapiente cumque magnam itaque ea suscipit. Eos
          provident culpa inventore quia veniam.
        </p>
      </div>
      <div>
        <img
          src={image}
          alt="app-1"
          className="w-[50%] lg:w-[70%] 2xl:w-[50%] block mx-auto"
        />
      </div>
    </div>
  );
};

export default LandingFlowOrder;
