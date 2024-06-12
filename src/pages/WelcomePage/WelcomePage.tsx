import Welcome from "@src/components/Welcome/Welcome";


const WelcomePage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col bg-custom-gradient bg-no-repeat">
      <Welcome />
    </div>
  );
};

export default WelcomePage;