import Navbar from "../components/Navbar";
import PageHeadline from "../components/PageHeadline";

const ConnectPage = () => {
  return (
    <div className="mx-5 md:mx-14">
      <Navbar />
      <main>
        <PageHeadline
          headline="<b>Connect</b>"
          description="I’m always open to new opportunities and collaborations. Whether you’re looking to start a project or just want to chat, feel free to reach out."
        />
      </main>
    </div>
  );
};

export default ConnectPage;
