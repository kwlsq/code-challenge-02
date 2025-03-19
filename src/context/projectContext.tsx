"use client";

import { getAllProjects } from "@/services/projectService";
import { Project } from "@/types/projectType";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

interface ProjectContextType {
  allProjects: Project[] | undefined;
  updateAllProjects: () => Promise<void>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjectContext = () => {
  const ctx = useContext(ProjectContext);
  if (!ctx) {
    throw new Error("Context usage out of provider");
  }
  return ctx;
};

export const ProjectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [allProjects, setAllProjects] = useState<Project[] | undefined>();

  const updateAllProjects = useCallback(async () => {
    try {
      const projects = await getAllProjects();
      setAllProjects(projects);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  }, []);

  useEffect(() => {
    updateAllProjects();
  }, [updateAllProjects]);

  return (
    <ProjectContext.Provider value={{ allProjects, updateAllProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};
