import Image from "next/image";
import ArticleCard from "./components/ArticleCard";
import Navbar from "./components/Navbar";
import PageHeadline from "./components/PageHeadline";

export default function Home() {
  return (
    <div className="mx-5 md:mx-14">
      <Navbar />
      <main>
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
      </main>
    </div>
  );
}
