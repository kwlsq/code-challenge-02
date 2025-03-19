import Navbar from "../components/Navbar";
import PageHeadline from "../components/PageHeadline";
import ProjectsContainer from "../components/ProjectsContainer";

const ProjectsPage = () => {
  return (
    <div className="mx-5 md:mx-16">
      <Navbar />
      <main className="flex flex-col gap-6 md:gap-8 py-5 ">
        <PageHeadline
          headline="<b>Projects</b>"
          description="Explore a selection of my work, showcasing how I approach design challenges. Each project reflects my commitment to creating user-centered experiences that blend functionality with aesthetic appeal."
        />
        <ProjectsContainer />
      </main>
    </div>
  );
};

export default ProjectsPage;
