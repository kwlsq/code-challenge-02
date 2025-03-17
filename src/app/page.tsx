import Image from "next/image";
import ArticleCard from "./components/ArticleCard";
import Navbar from "./components/Navbar";
import PageHeadline from "./components/PageHeadline";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="mx-5 md:mx-14">
      <Navbar />
      <main className="flex flex-col gap-4 md:gap-8">
        <PageHeadline
          headline="Hi, I’m <b>Alex</b>"
          description="a <b>UI/UX Designer</b> based in <b>Los Angeles</b>. With over <b>3 years of experience</b>, I specialize in creating user-friendly digital products that solve real-world problems."
        />
        <div className="flex flex-col md:flex-row-reverse gap-4">
          <div className="flex md:w-1/4">
            <Image
              height={100}
              width={200}
              src="/img/about_me.jpg"
              alt="image of a girl to represent about me"
              className="object-cover object-top w-full h-[536px] md:h-[359px] rounded-2xl"
            />
          </div>
          <ArticleCard
            title="About Me"
            description="I’m a UI/UX designer with a passion for solving complex problems<br/>through intuitive design. My journey started 5 years ago, and since then, <br/>I've worked with startups and established brands to bring their visions to <br/>life. <br/><br/>Over the years, I've had the privilege of working with companies like <br/>ShopEase, FinTrack, and Insightly, focusing on user-centric design <br/>solutions."
          />
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-4">
          <ProjectCard
            title="Insightly"
            href="/project"
            emoji="💡"
            description="Developed a SaaS-based analytics dashboard for Insightly, focusing on providing actionable insights through a user-centric design. The dashboard improved data accessibility and was adopted by 80% of users within the first three months."
            tags={["Web 3.0", "HTML", "Dashboard"]}
            containerWidth="w-1/2"
          />
          <ProjectCard
            title="ShopEase"
            href="/project"
            imgSrc="/img/ShopEase_thumbnail.webp"
            imgAlt="ShopEase thumbnail"
            tags={["Mobile", "Application", "E-Commerce"]}
            containerWidth="w-1/2"
          />
        </div>
      </main>
    </div>
  );
}
