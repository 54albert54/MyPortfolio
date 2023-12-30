import { Link, useLocation } from "react-router-dom";
import ProjectsCards, { ShowCode } from "../ui/Projects/Projects";
import { allRepo } from "../const/data";

const Project = () => {
  const data = useLocation();
  let project = allRepo[0];
  
  if (data?.state?.items) {
    project = data?.state?.items;
  }

  return (
    <section className="bg-light max-w-[1260px] mx-auto gap-2 min-h-screen">
      <div className="w-full max-w-[1260px]    mx-auto pt-32 sm:h-[600px] my-4 overflow-hidden  grid grid-cols-1 sm:grid-cols-2 justify-center">
        <figure className="w-ful flex justify-center">
          <img src={project?.img} alt="" />
        </figure>
        <div className="w-full  flex flex-col pt-24  gap-4 items-center">
          <div className="flex justify-center flex-col gap-4 items-center">
            <p className="text-4xl font-bold">{project?.title}</p>
            <ShowCode className={"bg-black/25"} codeList={project?.code} />
            <p className="h-44 border border-transparent border-b-black/20 font-light">
              {project?.about}
            </p>
          </div>
          <div className="flex gap-6 ">
            <Link
              //
              target="_blank"
              className="border-lights min-w-8  bg-buttonColor text-light border-2 border-buttonColor  px-4 py-2 rounded-3xl active:transform hover:bg-blue-400 transition-all duration-150 ease-in "
              to={project?.pageLink}
            >
              web
            </Link>
            <Link
              target="_blank"
              className="border-lights min-w-8 bg-buttonColor text-light border-2 border-buttonColor  px-4 py-2 rounded-3xl active:transform hover:bg-blue-400 transition-all duration-150 ease-in "
              to={project?.repoLink}
            >
              Git
            </Link>
          </div>
        </div>
      </div>
      <section className="my-20">
        <p className="text-2xl font-bold w-full text-center">More Projects</p>
        <div className="grid gap-6 mt-8   sm:w-[1260px] mx-auto  md:grid-cols-2 lg:grid-cols-3">
          {allRepo?.map((item, index) => {
            return (
              <div key={index}>
                <ProjectsCards item={item} />
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Project;
