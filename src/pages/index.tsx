import { resumeLink } from "@/utils/constant";
import { footerLink, projectsData } from "@/utils/dummyvalues";
import { IProjectsData } from "@/utils/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  function viewProjects() {
    router.push("/projects");
  }

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.to(
      sectionRef.current,

      {
        translateX: "-250vw",
        ease: "linear",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          //trigger: sectionRef.current,
          //  markers: true,
          start: "top top",
          //end: "bottom 1000px",
          scrub: 1,
          pin: true
        }
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <>
      <div className="relative bg-black text-white min-h-screen pt-4 pb-[80px] px-10">
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
        <div className="h-[100vh] mb-[40px]">
          <div
            className=" mt-[120px] mx-[20px] lg:mx-[138px] flex justify-between 
             sm:gap-[90px] flex-col lg:flex-row items-center"
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
                    hidden px-[40px] rounded-[20px] pointer view-projects"
                onClick={viewProjects}
              >
                View Projects
              </button>
            </div>
            <div>
              <img className="my-[40px]" src="./avatar.svg" />
            </div>
          </div>
        </div>
        <div ref={triggerRef} className="mt-[80px]">
          <div className="mt-[0px] text-[white] text-center text-[24px] ">
            Projects
          </div>
          <div className="overflow-hidden w-[100%] max-w-[100vw]">
            <div>
              <div
                ref={sectionRef}
                className="flex justify-between items-center gap-[40px]  w-[300vw] h-[100vh]"
              >
                {projectsData?.map((item: IProjectsData, index) => (
                  <a
                    key={index}
                    href={item.linkToSite}
                    className=""
                    target="_blank"
                  >
                    <div
                      className="flex mt-[0px] sm:justify-between gap-[40px] !w-[100vw]
                         items-start sm:items-center sm:mx-[40px] max-sm:flex-col-reverse"
                    >
                      <div
                        className={`mt-[60px] mx-auto  w-[100%] max-w-[550px]
                         max-sm:px-[10px] text-center sm:text-left`}
                      >
                        <p className="lg:text-[1.5rem]  font-bold">
                          {item?.title}
                        </p>
                        <p
                          className=" mt-[1.125rem] text-[0.8125rem] lg:text-[1.125rem] 
                        font-normal"
                        >
                          {item?.description}
                        </p>
                      </div>
                      <img
                        ref={item?.ref}
                        className={`image-item pointer center-image-item
                        mx-auto w-[100%] max-w-[100vw]  sm:!h-[100vh] `}
                        src={`${item?.src}-main.svg`}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer flex mt-[120px] flex-row
         max-w-max m-auto gap-[10px] sm:gap-[60px] pointer"
        >
          {footerLink?.map((item) => (
            <Link href={item?.link} target={item?.link}>
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
