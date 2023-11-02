import { Navigate } from "react-router-dom";

import useAuthStore from "../../stores/auth.store";
import LandingFooter from "./components/LandingFooter";
import LandingHero from "./components/LandingHero";
import LandingHowItWorks from "./components/LandingHowItWorks";
import LandingMeal from "./components/LandingMeal";
import LandingNav from "./components/LandingNav";
import LandingTestimonial from "./components/LandingTestimonial";

const Landing = () => {
  const auth = useAuthStore((s) => s.auth);

  if (auth) return <Navigate to="/" replace />;

  return (
    <div>
      <LandingNav />
      <LandingHero />
      <LandingHowItWorks />
      <LandingTestimonial />
      <LandingMeal />
      <LandingFooter />
    </div>
  );
};

export default Landing;
