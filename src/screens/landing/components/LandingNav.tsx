import { useState } from "react";
import { GiHamburger } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

import LandingButton from "./LandingButton";

const LandingNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const onCloseNav = () => setIsNavOpen(false);

  const onOpenNav = () => setIsNavOpen(true);

  return (
    <div className="fixed top-0 left-0 w-full  py-4 z-10 text-white bg-gradient-to-r from-rusty-red to-[#ef9ea5]">
      <nav className="flex px-4 2xl:px-0 max-w-screen-2xl w-full mx-auto justify-between items-center">
        <h2 className="flex items-center gap-2 self-center whitespace-nowrap text-xl font-semibold">
          <GiHamburger size={25} />
          <span className="text-2xl font-lobster tracking-wider">
            <a href="#hero">Litee Snack</a>
          </span>
        </h2>

        <HiMenuAlt3 className="lg:hidden w-8 h-8" onClick={onOpenNav} />

        <ul className="hidden lg:flex items-center gap-8 text-white font-medium">
          <li>
            <a href="#how">How It Works</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#meal">Free Meal</a>
          </li>
          <li>
            <Link to="/auth">
              <LandingButton
                color="text-white"
                bgColor="bg-rusty-red"
                label="Shop Now"
                icon={<BsCartCheck />}
              />
            </Link>
          </li>
        </ul>

        <div
          className={`lg:hidden h-screen w-full fixed top-0 left-0 grid place-items-center bg-gradient-to-r from-rusty-red to-[#ef9ea5] ${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          }  transition-all`}
        >
          <IoMdCloseCircle
            className="text-rusty-red absolute top-4 right-4 w-8 h-8"
            onClick={() => setIsNavOpen(false)}
          />
          <ul className="flex flex-col items-center gap-8 text-white font-medium text-lg">
            <li onClick={onCloseNav}>
              <a href="#how">How It Works</a>
            </li>
            <li onClick={onCloseNav}>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li onClick={onCloseNav}>
              <a href="#meal">Free Meal</a>
            </li>
            <li>
              <Link to="/auth">
                <LandingButton
                  color="text-white"
                  bgColor="bg-rusty-red"
                  label="Shop Now"
                  icon={<BsCartCheck />}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default LandingNav;
