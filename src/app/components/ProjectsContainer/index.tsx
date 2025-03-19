import ProjectCard from "../ProjectCard";

const ProjectsContainer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <ProjectCard
          title="Insightly"
          href="/projects/2"
          emoji="💡"
          description="Developed a SaaS-based analytics dashboard for Insightly, focusing on providing actionable insights through a user-centric design. The dashboard improved data accessibility and was adopted by 80% of users within the first three months."
          tags={["Web 3.0", "HTML", "Dashboard"]}
          containerWidth="md:w-1/2"
        />
        <ProjectCard
          title="ShopEase"
          href="/projects/1"
          imgSrc="/img/ShopEase_thumbnail.webp"
          imgAlt="ShopEase thumbnail"
          maxImgHeight="max-h-[240px]"
          tags={["Mobile", "Application", "E-Commerce"]}
          containerWidth="md:w-1/2"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <ProjectCard
          title="FinTrack"
          href="/projects/3"
          emoji="️🌱"
          description="Designed and developed the UI/UX for FinTrack, a mobile banking application focused on financial management. The app's intuitive interface led to a 30% increase in daily active users and improved user satisfaction scores by 22%."
          tags={["Web", "Case Study", "Finance"]}
          containerWidth="md:w-2/5"
        />
        <ProjectCard
          title="ConnectMe"
          href="/projects/4"
          imgSrc="/img/ConnectMe_thumbnail.webp"
          imgAlt="ConnectMe thumbnail"
          maxImgHeight="max-h-[272px]"
          tags={["Mobile", "Application", "Social"]}
          containerWidth="md:w-3/5"
        />
      </div>
    </>
  );
};

export default ProjectsContainer;
