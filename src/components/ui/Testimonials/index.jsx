import SectionWrapper from "../../SectionWrapper";
import { allRepo } from "../../const/data";
import ProjectsCards from "../Projects/Projects";

const Testimonials = () => {
  return (
    <SectionWrapper className="pb-0">
      <div
        id="testimonials"
        className="max-w-screen-xl mx-auto  md:px-8 pb-10"
      >
        <div className="max-w-2xl  sm:text-center md:mx-auto">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            More Projects
          </h2>
          <p className="mt-3 text-gray-600">
            Listen to what the experts around the world are saying about us.
          </p>
        </div>
        <div className="mt-12">
          <section className="px-0 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allRepo.map((item, index) => {
              return (
                <div key={index}>
                  <ProjectsCards item={item} />
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
