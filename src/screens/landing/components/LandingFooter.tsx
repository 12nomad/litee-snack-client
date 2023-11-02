import {
  BsCartCheck,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

import LandingButton from "./LandingButton";

const LandingFooter = () => {
  return (
    <footer className="relative bg-gradient-to-r from-rusty-red to-[#ef9ea5] text-white mt-48 py-8">
      <div className="w-full absolute h-20 -top-9 -z-50 left-0 skew-y-2 bg-gradient-to-r from-rusty-red to-[#ef9ea5]"></div>

      <div className="px-8 md:px-16 2xl:px-0 max-w-screen-2xl mx-auto">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase">Resources</h2>
              <ul className="text-neutral-200 font-medium">
                <li className="mb-4">
                  <span className="hover:underline">React JS</span>
                </li>
                <li>
                  <span className="hover:underline">Nest JS</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase ">Follow Us</h2>
              <ul className="text-neutral-200 font-medium">
                <li className="mb-4">
                  <span className="hover:underline ">Instagram</span>
                </li>
                <li>
                  <span className="hover:underline">Twitter</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase">Legal</h2>
              <ul className="text-neutral-200 font-medium">
                <li className="mb-4">
                  <span className="hover:underline">Privacy Policy.</span>
                </li>
                <li>
                  <span className="hover:underline">Terms & Conditions.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-6 md:mb-0 mt-6 md:mt-0">
            <Link to="/auth">
              <LandingButton
                color="text-white"
                bgColor="bg-rusty-red"
                label="Shop Now"
                icon={<BsCartCheck />}
              />
            </Link>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <span className="text-sm text-neutral-200 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <span className="hover:underline">Litee Snack™</span>. All rights
            are reserved.
          </span>
          <div className="flex mt-4 text-neutral-200 space-x-5 sm:justify-center sm:mt-0">
            <BsInstagram />
            <BsTwitter />
            <BsFacebook />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
