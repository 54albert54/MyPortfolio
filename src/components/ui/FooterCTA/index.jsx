import { Link } from "react-router-dom";
import SectionWrapper from "../../SectionWrapper";

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Get started with Blinder today
        </h2>
        <p className="mt-3 text-gray-600">
          Hire experts to create your next idea, follow best practices, remove
          roadblocks, and delivery on schedule.
        </p>
      </div>
    </div>
    <div className="w-full flex flex-row justify-center mt-6">
    <Link
      onClick={()=> window.scrollTo({top:0})}
      className="border-lights bg-buttonColor text-light border-2 border-buttonColor  px-4 py-2 rounded-3xl active:transform hover:bg-blue-400 transition-all duration-150 ease-in "
      to={"Contact"}
    >
      Contacte me{" "}
    </Link>
    </div>
  </SectionWrapper>
);


export default FooterCTA;
