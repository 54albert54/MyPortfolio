import { useLandingContext } from "../../providers/useLandingContext";

import { IoClose } from "react-icons/io5";

import { ShowCode } from "../Projects/Projects";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
export const ProjectsCardsCover = () => {
  const { hiddenProject } = useLandingContext();

  return (
    <section
      onClick={() => hiddenProject()}
      className="fixed w-screen z-40 h-screen right-0  bg-dark/50 "
    ></section>
  );
};

export const ProjectCardsDetails = () => {
  const { showProject, hiddenProject, projectsToShow } = useLandingContext();
  const data = projectsToShow;
  return (
    <section
      className={`fixed w-[430px] z-50 h-[930px] sm:h-screen px-6 flex flex-col gap-y-6 ${
        showProject ? "left-0" : "left-[-430px]"
      }  transition-all duration-900 ease-in  z-20 `}
      style={{
        background:
          "linear-gradient(202.72deg, #251a38 14.76%, #342d3e 34.37%, #28252b 86.62%)",
      }}
    >
      <div className="w-full h-auto border border-transparent flex justify-end items-center border-b-gray-900">
        <div
          onClick={() => hiddenProject()}
          className="hover:cursor-pointer border w-12 h-12 rounded-xl  bg-darck/50  flex justify-center items-center my-2"
        >
          <IoClose className="w-8 h-8 text-purple-300" />
        </div>
      </div>
      <section className=" flex flex-col gap-y-12 pt-2">
        <h3 className="w-full flex justify-center text-gray-100 font-bold text-xl">
          {data?.title}{" "}
        </h3>
        <figure className=" w-full h-[200px] sm:h-[300px]">
          <img
            className="w-full h-full rounded-xl shadow-md object-cover "
            src={data?.img}
            alt={data?.title}
          />
        </figure>
        <div className=" flex flex-col gap-y-3 pt-8 border border-transparent  border-b-gray-900">
          <ShowCode
            className="bg-gray-800/70 text-gray-100  shadow-lg font-bold"
            codeList={data?.code}
          />
          <ShowAbout text={data?.about} />
          <ShowLinks data={data} />
        </div>
      </section>
    </section>
  );
};
const ShowAbout = ({ text }) => (
  <p className=" border-gray-900 rounded-lg w-full h-[100px] sm:h-[200px] text-gray-100  shadowz-lg p-3 overflow-auto  border border-tzransparent  border-b-gray-900">
    {text}
  </p>
);
const ShowLinks = ({ data }) => (
  <div className="flex flex-col gap-4 py-5 pl-6">
    <div>
      <div className="flex flex-row items-center gap-x-3 text-gray-100  mb-2">
        <TbWorldWww className="h-6 w-6" />
        <p className="text-xl  font-bold">Pagina web</p>
      </div>
      <a
        className="parent  flex pl-2 flex-row items-center  justify-start gap-x-12 hover:text-blue-800"
        href={data?.pageLink}
      >
        <p className="text-ls font-light text-gray-400 text-xs">
          {data?.pageLink}
        </p>
        <FaArrowRight className="hidden-paragraph text-slate-400  w-6 h-6" />
      </a>
    </div>
    <div className="">
      <div className=" flex flex-row items-center gap-x-3 mb-2 text-gray-100">
        <FaGithub className="h-6 w-6" />
        <p className="text-xl  font-bold">Repositorio Git</p>

        <p></p>
      </div>
    </div>
    <a
      className="parent   flex pl-2 flex-row items-center  justify-start gap-x-12 hover:text-[24px]"
      href={data?.repoLink}
    >
      <p className="text-ls font-light text-slate-400 text-xs">
        {data?.repoLink}
      </p>
      <FaArrowRight className="hidden-paragraph text-slate-400  w-6 h-6" />
    </a>
  </div>
);
