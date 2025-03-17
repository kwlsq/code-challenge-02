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
        <ArticleCard
          title="About Me"
          imgSrc="/img/about_me.jpg"
          imgAlt="image of a girl to represent about me"
          description="I’m a UI/UX designer with a passion for solving complex problems through intuitive design. My journey started 5 years ago, and since then, I've worked with startups and established brands to bring their visions to life. <br/><br/>Over the years, I've had the privilege of working with companies like ShopEase, FinTrack, and Insightly, focusing on user-centric design solutions."
        />
      </main>
    </div>
  );
}
