import LandingSubtitle from "./LandingSubtitle";
import Customer from "../../../assets/customer-1.jpg";
import MealBottom from "../../../assets/meal-bottom.jpg";
import MealRight from "../../../assets/meal-right.jpg";
import MealTop from "../../../assets/meal-top.jpg";

const LandingTestimonial = () => {
  return (
    <section
      id="testimonial"
      className="px-4 md:px-16 2xl:px-0 max-w-screen-2xl mx-auto pt-32 mt-16"
    >
      <div>
        <LandingSubtitle text="they trust us!" color="text-rusty-red-shade" />
        <h3 className="text-4xl font-bold">Testimonial.</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-32 mt-16 lg:mt-0">
          <div>
            <LandingSubtitle
              text="from a customer"
              color="text-rusty-red-tint"
            />
            <p className="text-lg">
              &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum ut quo delectus eveniet fugit atque explicabo enim corporis
              autem magni similique dicta voluptatum neque, cupiditate
              praesentium sequi placeat earum. Enim quibusdam exercitationem
              dolores, temporibus consequuntur reprehenderit earum minus
              accusamus voluptas error quas. &#34;
            </p>
            <div className="flex gap-4 items-center mt-6">
              <img
                src={Customer}
                alt="customer"
                className="rounded-full block w-12 h-12 border-2 border-rusty-red-tint"
              />
              <div>
                <blockquote className="font-medium text-rusty-red-tint">
                  Elinalise Dragonroad
                </blockquote>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>

          <div
            className="gap-[1.4rem] lg:gap-[2.4rem]"
            style={{
              display: "grid",
              gridAutoColumns: "1fr",
              gridTemplateAreas: `
              'fig1 fig1 fig3'
              'fig2 fig2 fig3'
            `,
            }}
          >
            <img
              src={MealTop}
              alt="meal top"
              style={{ gridArea: "fig1" }}
              className="object-cover overflow-hidden block rounded-md w-full h-[122px] md:h-[222px] hover:scale-105 transition-all"
            />
            <img
              src={MealBottom}
              alt="meal bottom"
              style={{ gridArea: "fig2" }}
              className="object-cover overflow-hidden block rounded-md w-full h-[122px] md:h-[222px] hover:scale-105 transition-all"
            />
            <img
              src={MealRight}
              alt="meal right"
              style={{ gridArea: "fig3" }}
              className="object-cover overflow-hidden block rounded-md w-full h-full hover:scale-105 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonial;
