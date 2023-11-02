import { Link } from "react-router-dom";
import { BsCartCheck, BsArrowDownCircle } from "react-icons/bs";

import LandingButton from "./LandingButton";
import LandingSubtitle from "./LandingSubtitle";
import Splash from "../../../assets/splash.png";
import Customer1 from "../../../assets/customer-1.jpg";
import Customer2 from "../../../assets/customer-2.jpg";
import Customer3 from "../../../assets/customer-3.jpg";
import Customer4 from "../../../assets/customer-4.jpg";
import Customer5 from "../../../assets/customer-5.jpg";
import Customer6 from "../../../assets/customer-6.jpg";
import Featured1 from "../../../assets/featured-1.png";
import Featured2 from "../../../assets/featured-2.png";
import Featured3 from "../../../assets/featured-3.png";

const customers = [
  Customer1,
  Customer2,
  Customer3,
  Customer4,
  Customer5,
  Customer6,
] as const;

const logos = [Featured1, Featured2, Featured3] as const;

const LandingHero = () => {
  return (
    <header
      id="hero"
      className="relative h-screen pt-[4.5rem] text-white bg-gradient-to-r from-rusty-red to-[#ef9ea5] grid place-items-center "
    >
      <div className="w-full absolute h-screen top-12 -z-50 left-0 skew-y-2 bg-gradient-to-r from-rusty-red to-[#ef9ea5]"></div>

      <div className="px-4 md:px-16 2xl:px-0 max-w-screen-2xl mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 content-center justify-center gap-32">
          <div>
            <h1 className="text-5xl 2xl:text-[3.65rem] leading-[3.313rem] 2xl:leading-[4.313rem] font-bold">
              A tasty meal delivered to your door whenever you want.
            </h1>
            <p className="text-2xl mt-4 mb-10 leading-9">
              Leave the hard task to us! Just order your favorite meal from your
              favorite shop, we&#39;ll get it to you😉
            </p>
            <div className="flex items-center gap-2">
              <Link to="/auth">
                <LandingButton
                  color="text-white"
                  bgColor="bg-rusty-red-shade"
                  label="Shop Now"
                  icon={<BsCartCheck />}
                />
              </Link>

              <a href="#how">
                <LandingButton
                  color="text-night-black"
                  bgColor="bg-white"
                  label="Learn More"
                  icon={<BsArrowDownCircle />}
                />
              </a>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <ul className="flex items-center ml-2">
                {customers.map((el) => (
                  <li
                    key={el}
                    className="w-10 h-10 border-2 border-white rounded-full -ml-2"
                  >
                    <img
                      src={el}
                      alt="user1"
                      className="w-full h-full rounded-full"
                    />
                  </li>
                ))}
              </ul>
              <p>
                <span className="text-[#9b2a35] font-bold">250.000+</span> meals
                delivered until now!
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <img src={Splash} alt="meals" className="block mx-auto" />
          </div>
        </div>

        <div className="text-center mt-8 md:mt-16 lg:mt-8 2xl:mt-0">
          <ul className="grid items-center justify-center grid-cols-3 mb-2 lg:mb-0">
            {logos.map((el) => (
              <li key={el}>
                <img
                  src={el}
                  alt={el}
                  className="w-[70%] lg:w-[40%] mx-auto brightness-0 opacity-60"
                />
              </li>
            ))}
          </ul>
          <LandingSubtitle text="as featured in" color="text-[#5A2529]" />
        </div>
      </div>
    </header>
  );
};

export default LandingHero;
