import Image from "next/image";
import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import PageHeadline from "../components/PageHeadline";

const AboutPage = () => {
  return (
    <div className="mx-5 md:mx-16">
      <Navbar />
      <main className="flex flex-col gap-4 mb-15">
        <PageHeadline
          headline="<b>About</b> Alex"
          description="With 5+ years in design, I've worked on diverse projects, from mobile apps to web platforms, focusing on user-centered designs that are both visually appealing and practical."
        />

        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:max-h-[845px]">
          <div className="flex flex-col gap-4">
            <ArticleCard
              className="md:h-full"
              title="My Journey"
              description="I began my career with a degree in Graphic Design from the University of California, Berkeley, where I discovered my love for user experience. Since then, I’ve worked with various startups and established companies, helping them transform their digital presence and improve user engagement.<br/><br/>Throughout my career, I’ve been driven by the belief that great design is the result of a deep understanding of both the user and the problem at hand. I specialize in taking complex ideas and translating them into intuitive, easy-to-use interfaces."
            />
            <Image
              src="/img/project_timeline.webp"
              height={600}
              width={800}
              alt="photo of project timeline with sticky notes and 2 person"
              className="w-full object-cover max-h-[300px] rounded-2xl md:h-1/2"
            />
          </div>

          <Image
            src="/img/about_me.webp"
            height={500}
            width={500}
            alt="photo of the about me person"
            className="w-full object-cover object-top max-h-[497px] rounded-2xl md:h-full md:max-h-[845px]"
          />
        </div>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:max-h-[845px]">
          <Image
            src="/img/laptop.webp"
            height={500}
            width={500}
            alt="photo of a laptop"
            className="w-full object-cover object-top max-h-[497px] rounded-2xl md:h-full md:max-h-[845px]"
          />

          <div className="flex flex-col gap-4">
            <ArticleCard
              className="md:h-full"
              title="Experience"
              description="Over the years, I’ve collaborated with clients like ShopEase, FinTrack, and Insightly, working on everything from e-commerce platforms to SaaS dashboards. My approach combines creativity with a strong foundation in design principles and user research, ensuring that every project I undertake not only meets but exceeds expectations."
            />
            <Image
              src="/img/dog.webp"
              height={600}
              width={800}
              alt="photo of a dog on sofa"
              className="w-full object-cover max-h-[300px] rounded-2xl md:h-1/2"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
