import Navbar from "../components/Navbar";
import PageHeadline from "../components/PageHeadline";
import SocialMediaBtn from "../components/SocialMediaBtn";

const ConnectPage = () => {
  return (
    <div className="mx-5 md:mx-16 mb-15">
      <Navbar />
      <main className="flex flex-col gap-4 md:gap-8 md:py-5 mb-15">
        <PageHeadline
          headline="<b>Connect</b>"
          description="I’m always open to new opportunities and collaborations. Whether you’re looking to start a project or just want to chat, feel free to reach out."
        />
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
          <SocialMediaBtn
            imgAlt="Instagram logo"
            imgSrc="/icons/ic_instagram.svg"
            text="Instagram"
            href="https://www.instagram.com/"
          />
          <SocialMediaBtn
            imgAlt="Behance logo"
            imgSrc="/icons/ic_behance.svg"
            text="Behance"
            href="https://www.behance.net/"
          />
          <SocialMediaBtn
            imgAlt="Dribble logo"
            imgSrc="/icons/ic_dribble.svg"
            text="Dribble"
            href="https://dribbble.com/"
          />
          <SocialMediaBtn
            imgAlt="LinkedIn logo"
            imgSrc="/icons/ic_linkedin.svg"
            text="LinkedIn"
            href="https://www.linkedin.com/"
          />
        </div>
      </main>
    </div>
  );
};

export default ConnectPage;
