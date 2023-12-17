

import { useState } from "react"

import { useLandingContext } from "../../providers/useLandingContext"




export default function ProyectsCards ({item}){
 const [isHover , setIsHover] = useState(false)
  

  return(
    <>
    <section onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}  className=" relative bg-black/25  h-[360px] z-0  flex flex-col gap-y-2 items-center overflow-hidden  shadow-xl py-8 justify-between  gradient-border rounded-[22px]">
     
      <div className="flex-none w-auto h-auto   flex items-center justify-center">
        <img className="w-full h-3/4" width={400} height={100} src={item?.img} alt={item?.title} /> 
      </div>
        <h4 className="text-lg text-gray-800 font-semibold">
          {item?.title}
        </h4>
        <div>

        </div>
    <ProyecCarsdHover  isHover={isHover} item={item}/>
   
  </section>
  
  </>
  )
}

const ProyecCarsdHover = ({item , isHover })=>{
  const { showMoProyect }= useLandingContext()
  
  return(
  <div onClick={()=>showMoProyect(item)} className={`w-full h-full  cursor-pointer absolute ${isHover?'top-[0px]':'top-[460px]'} z-20  bg-black/50 transition-all duration-500 ease-in-out flex  items-end text-white `}>
    <div className="h-3/5 p-3">
      <h4 className="font-bold  text-[32px]" >{item.title}</h4>
      <p>{item.about}</p>
      <ShowCode  codeList={item.code}/>
    </div>
  </div>
)}

export const ShowCode = ({codeList ,className})=>(
  <ul className="flex flex-row gap-3 my-2">
  {
    codeList?.map((code , index)=>(
      <li className={`border py-2 px-3  rounded-md bg-wshite/25  ${className?className:'bg-white/25'}`}   key={index} >{code}</li>
    ))
  }
  </ul>

)

