

import React, {createContext, useState} from "react";
import {  allRepo } from "../const/data";


export const LandingContext = createContext({})

export default function LandingProvider({children}){
  const [showProyect , setShowProyect]= useState(false)
  const [proyectsToShow , setProyectsToShow]= useState()
  const [mainProyect , setMainProyect ]= useState(allRepo[0])




  const hiddeMoProyect = ()=>(setShowProyect(false) , setProyectsToShow(null))
  const showMoProyect = (proyect)=>(setShowProyect(true) ,setProyectsToShow(proyect))


  const value ={
    showProyect,showMoProyect,hiddeMoProyect,proyectsToShow,mainProyect,setMainProyect
  }
  return (
    <LandingContext.Provider value={value}>
      {children}
    </LandingContext.Provider>
  )
}

