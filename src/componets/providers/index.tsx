

import React, {createContext, useState} from "react";
import { TRepositorio, allRepo } from "../const/data";


export const LandingContext = createContext({})

export default function LandingProvider({children}:{children:React.ReactNode}){
  const [showProyect , setShowProyect]= useState(false)
  const [proyectsToShow , setProyectsToShow]= useState<TRepositorio | null>(null)
  const [mainProyect , setMainProyect ]= useState(allRepo[0])




  const hiddeMoProyect = ()=>(setShowProyect(false) , setProyectsToShow(null))
  const showMoProyect = (proyect:TRepositorio)=>(setShowProyect(true) ,setProyectsToShow(proyect))


  const value ={
    showProyect,showMoProyect,hiddeMoProyect,proyectsToShow,mainProyect
  }
  return (
    <LandingContext.Provider value={value}>
      {children}
    </LandingContext.Provider>
  )
}

