import { useState } from "react";
import { FaArrowCircleRight } from 'react-icons/fa'

import { useNavigate } from "react-router-dom";

export default function ProjectsCards({ item }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <section
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="w-[380px] mx-auto  relative bg-dark/25  h-[360px] z-0  flex flex-col gap-2 items-center overflow-hidden  shadow-xl pt-8 justify-between  gradient-border rounded-[22px]"
      >
        <div className="flex-none w-auto h-auto   flex items-center justify-center">
          <img
            className="w-full h-[150px] "
            src={item?.img}
            alt={item?.title}
          />
        </div>
        <div className="bg-light w-full h-full flex items-center justify-evenly ">
        <h4 className="text-lg text-gray-800 font-semibold">{item?.title}</h4>
        <FaArrowCircleRight />
        </div>
        <ProjectCardHover isHover={isHover} item={item} />
      </section>
    </>
  );
}

const ProjectCardHover = ({ item, isHover }) => {
  const navigation = useNavigate()
  
  const goToProject = ()=>{
    window.scrollTo({ top: 0 })
    navigation('/Project',{
      state:{items:item}
    })
  }
  return (
    <div
      onClick={ goToProject } 
      className={`w-full h-full  cursor-pointer absolute ${
        isHover ? "top-[0px]" : "top-[460px]"
      } z-20  bg-dark/50 transition-all duration-500 ease-in-out flex  items-end text-white `}
    >
      <div className="h-3/5 p-3">
        <h4 className="font-bold  text-[32px]">{item.title}</h4>
        <p>{item.about}</p>
      </div>
    </div>
  );
};

export const ShowCode = ({ codeList, className }) => (
  <ul className="flex flex-row gap-3 my-2">
    {codeList?.map((code, index) => (
      <li
        className={`border py-2 px-3  rounded-md bg-light/25  ${
          className ? className : "bg-light/25"
        }`}
        key={index}
      >
        {code}
      </li>
    ))}
  </ul>
);
