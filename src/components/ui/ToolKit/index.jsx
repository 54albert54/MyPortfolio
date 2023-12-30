// @ts-checks
import {
  cssIcons,
  figmaIcons,
  githubIcons,
  htmlIcons,
  javaScriptIcons,
  mysqlIcons,
  nextjsIcons,
  nodejsIcons,
  photoshopIcons,
  reactIcons,
  sassIcons,
  tailsindIcons,
  typescriptIcons,
} from "../../../assets/icons";
import SectionWrapper from "../../SectionWrapper";

const features = [
  {
    icon: htmlIcons,
    title: "HTML",
  },
  {
    icon: cssIcons,
    title: "CSS",
  },
  {
    icon: sassIcons,
    title: "Sass",
  },
  {
    icon: javaScriptIcons,
    title: "JavaScrip",
  },
  {
    icon: typescriptIcons,
    title: "TypesScrip",
  },
  {
    icon: reactIcons,
    title: "React",
  },

  {
    icon: nextjsIcons,
    title: "Next.js",
  },
  {
    icon: tailsindIcons,
    title: "TailwindCSS",
  },
  {
    icon: nodejsIcons,
    title: "Node.js",
  },
  {
    icon: figmaIcons,
    title: "Figma",
  },
  {
    icon: githubIcons,
    title: "git & gitHub",
  },
  {
    icon: photoshopIcons,
    title: "photoshop",
  },
  {
    icon: mysqlIcons,
    title: "MySql",
  },
];

const ToolKit = () => {
  return (
    <SectionWrapper>
      <div
        id="toolkit"
        className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"
      >
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h2 className="text-gray-800 text-center text-3xl font-semibold sm:text-4xl">
            Work with the best toolkit
          </h2>
          <p className="text-center">These are a few of our favorite things</p>
        </div>
        <div className="mt-12">
          <ul className="sm:flex kit grid  grid-cols-2 sm:flex-wrap sm:justify-center">
            {features.map((tool) => (
              <li
                className="relative  opacity-80 mx-4 justify-center bg-dark/10  shadow-lg flex flex-row py-2 px-4 w-36 my-3 border-2  border-dark rounded-2xl "
                key={tool.title}
              >
                <p className=" font-bold text-dark">{tool.title}</p>
                <div className="z-0 absolute  bottom-8 w-8 bg-light rounded-lg overflow-hidden">
                  {/* <img className="" src={tool.icon} alt={tool.title} /> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolKit;
