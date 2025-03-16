import Navbar from "../components/Navbar";
import PageHeadline from "../components/PageHeadline";

const ProjectsPage = () => {
  return (
    <div className="mx-5 md:mx-14">
      <Navbar />
      <main>
        <PageHeadline
          headline="<b>Projects</b>"
          description="Explore a selection of my work, showcasing how I approach design challenges. Each project reflects my commitment to creating user-centered experiences that blend functionality with aesthetic appeal."
        />
      </main>
    </div>
  );
};

export default ProjectsPage;
