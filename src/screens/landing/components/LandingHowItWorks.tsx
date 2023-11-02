import LandingSubtitle from "./LandingSubtitle";
import LandingFlowOrder from "./LandingFlowOrder";
import App1 from "../../../assets/app-1.png";
import App2 from "../../../assets/app-2.png";
import App3 from "../../../assets/app-3.png";
import App4 from "../../../assets/app-4.png";

const flows = [
  {
    num: "01",
    title: "Create an account",
    image: App1,
  },
  {
    num: "02",
    title: "Order from your favorite shop",
    image: App2,
    isInversed: true,
  },
  {
    num: "03",
    title: "Receive meals as fast as possible",
    image: App3,
  },
  {
    num: "04",
    title: "Shop owner or delivery? Just register and get started",
    image: App4,
    isInversed: true,
  },
];

const LandingHowItWorks = () => {
  return (
    <section
      id="how"
      className="px-4 md:px-16 2xl:px-0 max-w-screen-2xl mx-auto pt-32"
    >
      <div>
        <LandingSubtitle text="how it works?" color="text-rusty-red-shade" />
        <h3 className="text-4xl font-bold">
          Get what you desire in 4 simple steps.
        </h3>
        <div>
          {flows.map((flow) => (
            <LandingFlowOrder key={flow.num} {...flow} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingHowItWorks;
