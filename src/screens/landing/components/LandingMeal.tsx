import LandingSubtitle from "./LandingSubtitle";
import Free from "../../../assets/free.jpg";

const LandingMeal = () => {
  return (
    <section
      id="meal"
      className="px-4 md:px-16 2xl:px-0 max-w-screen-xl mx-auto pt-32 mt-16"
    >
      <div className="text-center">
        <LandingSubtitle text="try it!" color="text-rusty-red-shade" />
        <h3 className="text-4xl font-bold">Claim your free meal.</h3>
      </div>
      <div className="rounded-md grid grid-cols-1 lg:grid-cols-3 my-16">
        <div className="lg:col-span-2 bg-rusty-red text-white py-6 px-10 rounded-md lg:rounded-l-md">
          <h3 className="text-center lg:text-left text-2xl lg:text-4xl font-medium">
            ✨ Get a free meal ✨
          </h3>
          <p className="mt-2 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            totam voluptatibus odio, ad, vel eaque aliquam repellat blanditiis
            numquam enim assumenda. Temporibus corrupti id qui deserunt officia
            adipisci ea exercitationem modi sed.
          </p>

          <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
            <div>
              <label className="font-medium" htmlFor="fullname">
                Full Name:{" "}
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Jane Doe"
                className="rounded-md block w-full border-none mt-1 focus:ring-0 focus:outline-rusty-red-tint"
                required
              />
            </div>
            <div>
              <label className="font-medium" htmlFor="email">
                E-Mail:{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="JaneDoe@example.com"
                className="rounded-md block w-full border-none mt-1 focus:ring-0 focus:outline-rusty-red-tint"
                required
              />
            </div>
            <div>
              <label className="font-medium" htmlFor="options">
                Where did you here from us?{" "}
              </label>
              <select
                name="options"
                id="options"
                className="rounded-md block w-full border-none mt-1 focus:ring-0 focus:outline-rusty-red-tint text-night-black"
                required
              >
                <option value="">Choose one option</option>
                <option value="relatives">Relatives</option>
                <option value="youtube">Youtube</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="button"
              className="w-full bg-rusty-red-shade py-2 rounded-md font-medium"
            >
              Get Free Meal
            </button>
          </form>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to right bottom, rgba(239, 158, 165, 0.4), rgba(239, 158, 165, 0.4)), url(${Free})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            borderTopRightRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
          }}
        ></div>
      </div>
    </section>
  );
};

export default LandingMeal;
