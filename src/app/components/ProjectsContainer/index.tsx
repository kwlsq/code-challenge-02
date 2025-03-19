"use client";
import { useProjectContext } from "@/context/projectContext";
import ProjectCard from "../ProjectCard";

const ProjectsContainer = () => {
  const { allProjects } = useProjectContext();

  if (!allProjects || allProjects.length === 0)
    return <p>Loading projects...</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
      {allProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.thumbnail_name}
          href={`/projects/${project.id}`}
          emoji={project.emoji}
          description={project.thumbnail_description}
          imgSrc={project.thumbnail_img_src || undefined}
          imgAlt={project.thumbnail_img_alt || project.project_name}
          tags={project.tags}
          containerWidth={project.container_width}
          maxImgHeight={project.max_img_height}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
