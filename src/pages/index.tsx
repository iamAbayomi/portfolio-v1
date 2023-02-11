import { resumeLink } from "@/utils/constant";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  function viewProjects() {
    router.push("/projects");
  }

  return (
    <>
      <div className="bg-black text-white min-h-screen pt-4 pb-[80px] px-10">
        <div className="flex items-center pointer">
          <p className=" text-[42px] font-bold"> O.A</p>
          <div className="flex ml-[71px] gap-6 pointer">
            <Link href={resumeLink} target={"_blank"}>
              <p>Resume</p>
            </Link>
            <Link href={"https://blog.oladiniabayomi.com/"} target={"_blank"}>
              <p>Blog</p>
            </Link>
          </div>
        </div>
        <div
          className=" mt-[120px] mx-[20px] lg:mx-[138px] flex justify-between 
            gap-[90px] flex-col lg:flex-row items-center"
        >
          <div className="max-w-lg">
            <p className="text-[64px] font-bold font-['Fira Sans']">
              Hi,
              <br /> I am Abayomi
            </p>
            <p className="mt-8 leading-[30px] font-light">
              Experienced Front-End Developer with over 4 years of experience
              building web applications with React and Vue.js. I have scaled
              applications from zero to thousands of users and built products
              that generated millions in revenue.
            </p>
            <button
              className="bg-[#1560D7]  mt-[40px]  max-w-max py-[12px]
               px-[40px] rounded-[20px] pointer view-projects"
              onClick={viewProjects}
            >
              View Projects
            </button>
          </div>
          <div>
            <img className="mt-[40px]" src="./avatar.svg" />
          </div>
        </div>
        {/* <div className="flex mt-[120px] max-w-max m-auto gap-[60px]">
          <p>LinkedIn</p>
          <p>GitHub</p>
          <p>Mail</p>
          <p>Twitter</p>
        </div> */}
      </div>
    </>
  );
}
