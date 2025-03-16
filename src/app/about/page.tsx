import Navbar from "../components/Navbar";
import PageHeadline from "../components/PageHeadline";

const AboutPage = () => {
  return (
    <div className="mx-5 md:mx-14">
      <Navbar />
      <main>
        <PageHeadline
          headline="<b>About</b> Alex"
          description="With 5+ years in design, I've worked on diverse projects, from mobile apps to web platforms, focusing on user-centered designs that are both visually appealing and practical."
        />
      </main>
    </div>
  );
};

export default AboutPage;
