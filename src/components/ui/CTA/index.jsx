import { Link } from "react-router-dom";
import SectionWrapper from "../../SectionWrapper";

import { useLandingContext } from "../../providers/useLandingContext";

const CTA = () => {
  const { mainProject } = useLandingContext();
  const data = mainProject;
  return (
    <SectionWrapper id="cta" className="pb-0">
      <div className=" pb-12">
        <div className="items-center   gap-x-12 lg:flex">
          <figure className="flex-1  sm:hidden lg:block">
            <img
              src={data?.img}
              className=" w-4/6 rounded-lg md:max-w-lg mx-auto border-md"
              alt="the last projects"
            />
          </figure>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold w-full text-center sm:text-4xl">
              {data?.title}
            </h2>
            <p className="mt-3 sm:w-[80%] mb-12 text-center w-full text-gray-600">{data?.about}</p>

            <div className=" w-full text-center rounded-lg duration-150 inline-block mt-4    ">
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                className=" py-2.5 border-lights bg-buttonColor text-light border-2 border-buttonColor  px-4 rounded-3xl active:transform hover:bg-blue-400 transition-all duration-150 ease-in "
                to={"Project"}
              >
                check Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
