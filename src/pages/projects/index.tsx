import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  function viewHomePage() {
    router.push("/");
  }
  return (
    <div>
      <div className="bg-black text-white min-h-screen pt-4 px-0 pb-[50px]">
        <div className="flex items-center px-10">
          <p className="text-[42px] font-bold pointer" onClick={viewHomePage}>
            {" "}
            O.A
          </p>
          <div className="flex ml-[71px] gap-6">
            <p>Resume</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="h-[320px]" src="./design-system-side.svg" />
          <div className="mx-auto mt-[100px] max-w-max">
            <img className="" src="./open-dao-main.jpg" />
            <div className="mt-[70px] mx-auto max-w-[650px] text-center">
              <p className="text-center text-[24px] font-bold">
                Open DAO Challenge
              </p>
              <p className=" mt-[18px] font-normal">
                Join the OpenDAO Community to discover, invest in, and vote on
                exceptional DAOs. You have the power!
              </p>
            </div>
          </div>
          <img className="h-[320px]" src="./spiinge-side.jpg" />
        </div>
        <div className="flex mt-[120px] max-w-max m-auto gap-[60px]">
          <p>LinkedIn</p>
          <p>GitHub</p>
          <p>Mail</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
