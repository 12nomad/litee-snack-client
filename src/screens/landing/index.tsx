import LandingFooter from "./components/LandingFooter";
import LandingHero from "./components/LandingHero";
import LandingHowItWorks from "./components/LandingHowItWorks";
import LandingMeal from "./components/LandingMeal";
import LandingNav from "./components/LandingNav";
import LandingTestimonial from "./components/LandingTestimonial";

const Landing = () => {
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
