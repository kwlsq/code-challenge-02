import Image from "next/image";
import ArticleCard from "./components/ArticleCard";
import Navbar from "./components/Navbar";
import PageHeadline from "./components/PageHeadline";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="mx-5 md:mx-14">
      <Navbar />
      <main className="flex flex-col gap-6 md:gap-8 py-5 pb-15">
        <PageHeadline
          headline="Hi, I’m <b>Alex</b>"
          description="a <b>UI/UX Designer</b> based in <b>Los Angeles</b>. With over <b>3 years of experience</b>, I specialize in creating user-friendly digital products that solve real-world problems."
        />
        <div className="flex flex-col md:flex-row-reverse gap-6">
          <div className="flex md:w-1/4">
            <Image
              height={100}
              width={200}
              src="/img/about_me.jpg"
              alt="image of a girl to represent about me"
              className="object-cover object-top w-full h-[536px] md:max-h-[359px] rounded-2xl"
            />
          </div>
          <ArticleCard
            title="About Me"
            description="I’m a UI/UX designer with a passion for solving complex problemsthrough intuitive design. My journey started 5 years ago, and since then, I've worked with startups and established brands to bring their visions to life. <br/><br/>Over the years, I've had the privilege of working with companies like ShopEase, FinTrack, and Insightly, focusing on user-centric design solutions."
          />
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-6">
          <ProjectCard
            title="Insightly"
            href="/project"
            emoji="💡"
            description="Developed a SaaS-based analytics dashboard for Insightly, focusing on providing actionable insights through a user-centric design. The dashboard improved data accessibility and was adopted by 80% of users within the first three months."
            tags={["Web 3.0", "HTML", "Dashboard"]}
            containerWidth="md:w-1/2"
          />
          <ProjectCard
            title="ShopEase"
            href="/project"
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
            href="/project"
            emoji="️🌱"
            description="Designed and developed the UI/UX for FinTrack, a mobile banking application focused on financial management. The app's intuitive interface led to a 30% increase in daily active users and improved user satisfaction scores by 22%."
            tags={["Web", "Case Study", "Finance"]}
            containerWidth="md:w-2/5"
          />
          <ProjectCard
            title="ConnectMe"
            href="/project"
            imgSrc="/img/ConnectMe_thumbnail.webp"
            imgAlt="ConnectMe thumbnail"
            maxImgHeight="max-h-[272px]"
            tags={["Mobile", "Application", "Social"]}
            containerWidth="md:w-3/5"
          />
        </div>
      </main>
    </div>
  );
}
