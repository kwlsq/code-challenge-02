"use client";
import { useParams } from "next/navigation";
import { useProjectContext } from "@/context/projectContext";
import PrevPageBtn from "@/app/components/PrevPageBtn";
import TagRibbon from "@/app/components/TagRibbon";
import Image from "next/image";
import ArticleCard from "@/app/components/ArticleCard";
import Navbar from "@/app/components/Navbar";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { id } = useParams();
  const { allProjects } = useProjectContext();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const project = allProjects?.find((p) => p.id.toString() === id);

  if (!project) return <p>Loading project details...</p>;

  return (
    <div className="mx-5 md:mx-16">
      <Navbar />
      <main className="flex flex-col gap-4 md:gap-8 md:py-5 mb-15">
        <PrevPageBtn />
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-16">
          <div className="md:w-1/3 flex flex-col gap-4 md:order-1 order-2">
            <h1 className="font-bold text-[40px] md:text-[64px]">
              {project.project_name}
            </h1>
            <div className="text-[64px]">{project.emoji}</div>

            <div className="md:hidden text-[var(--text-secondary)] text-xl leading-10">
              {project.description}
            </div>

            <TagRibbon
              tags={project.tags}
              bgColor="bg-[var(--background-secondary)]"
            />
          </div>

          <div className="hidden md:block md:w-2/3 text-[var(--text-secondary)] text-xl leading-10 md:text-4xl md:leading-16 md:order-2">
            {project.description}
          </div>
        </div>

        <div className="flex flex-col rounded-2xl bg-[#FFFFFE] py-3 md:py-6 md:px-8 px-6 gap-5 border-2 border-[var(--border-grey)]">
          <Image
            height={800}
            width={800}
            src={
              isMobile
                ? project.showcase_img_src_mobile
                : project.showcase_img_src
            }
            alt={project.showcase_img_alt}
            className="w-full object-contain md:max-h-[930px]"
          />
        </div>
        <ArticleCard title="Challenges" description={project.challenges} />
        <div className="flex flex-col rounded-2xl bg-[#FFFFFE] py-3 md:py-6 md:px-8 px-6 gap-5 border-2 border-[var(--border-grey)]">
          <div className="text-[var(--text-default)] text-4xl font-bold">
            Outcome
          </div>
          <div className="text-[var(--text-secondary)] text-xl leading-8">
            {project.outcome_description}
          </div>
          <Image
            height={800}
            width={800}
            src={
              isMobile
                ? project.outcome_img_src_mobile
                : project.outcome_img_src
            }
            alt={project.outcome_img_alt}
            className="w-full object-cover md:max-h-[930px]"
          />
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
