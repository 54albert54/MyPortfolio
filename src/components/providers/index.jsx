import React, { createContext, useState } from "react";
import { allRepo } from "../const/data";

export const LandingContext = createContext({});

export default function LandingProvider({ children }) {
  const [showProject, setShowProject] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState();
  const [mainProject, setMainProject] = useState(allRepo[0]);

  const hiddenProject = () => (setShowProject(false), setProjectsToShow(null));
  const showModalProject = (project) => (
    setShowProject(true), setProjectsToShow(project)
  );

  const value = {
    showProject,
    showModalProject,
    hiddenProject,
    projectsToShow,
    mainProject,
    setMainProject,
  };
  return (
    <LandingContext.Provider value={value}>{children}</LandingContext.Provider>
  );
}
