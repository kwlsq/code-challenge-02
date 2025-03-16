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
      </main>
    </div>
  );
}
