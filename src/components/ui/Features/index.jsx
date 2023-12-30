
import SectionWrapper from "../../SectionWrapper";
import { features } from "../../const/data";


const Features = () => {
 

  return (
    <SectionWrapper>
      <div id="features" className="custom-screen text-gray-600">
        <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <li key={idx} className="space-y-3 flex flex-col items-center">
              <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                <img src={item.icon} alt="" />
              </div>
              <h4 className="text-lg w-full text-gray-800 font-semibold  text-center">
                {item.title}
              </h4>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Features;
