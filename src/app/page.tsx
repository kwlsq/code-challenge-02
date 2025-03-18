import Image from "next/image";
import ArticleCard from "./components/ArticleCard";
import Navbar from "./components/Navbar";
import PageHeadline from "./components/PageHeadline";
import ProjectsContainer from "./components/ProjectsContainer";

export default function Home() {
  return (
    <div className="mx-5 md:mx-14 mb-15">
      <Navbar />
      <main className="flex flex-col gap-6 md:gap-8 py-5 ">
        <PageHeadline
          headline="Hi, I’m <b>Alex</b>"
          description="a <b>UI/UX Designer</b> based in <b>Los Angeles</b>. With over <b>3 years of experience</b>, I specialize in creating user-friendly digital products that solve real-world problems."
        />
        <div className="flex flex-col md:flex-row-reverse gap-6">
          <div className="flex md:w-1/4">
            <Image
              height={100}
              width={200}
              src="/img/about_me.webp"
              alt="image of a girl to represent about me"
              className="object-cover object-top w-full h-[536px] md:max-h-[359px] rounded-2xl"
            />
          </div>
          <ArticleCard
            className="md:w-3/4"
            title="About Me"
            description="I’m a UI/UX designer with a passion for solving complex problemsthrough intuitive design. My journey started 5 years ago, and since then, I've worked with startups and established brands to bring their visions to life. <br/><br/>Over the years, I've had the privilege of working with companies like ShopEase, FinTrack, and Insightly, focusing on user-centric design solutions."
          />
        </div>
        <ProjectsContainer/>
      </main>
    </div>
  );
}
