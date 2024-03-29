import { resumeLink } from "@/utils/constant";
import { footerLink, options } from "@/utils/dummyvalues";
import { IProjectsData } from "@/utils/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const router = useRouter();
  //const link =

  const { ref } = useInView(options);
  const { ref: secondRef } = useInView(options);
  const { ref: thirdRef } = useInView(options);

  let projectsData: IProjectsData[] = [
    {
      id: 1,
      ref: ref,
      src: "./design-system",
      title: "Design System",
      description: "A design system to help you build your react components.",
      showDescription: false,
      linkToSite:
        "https://6207da00fd8970003a4b561e-qngsmazzda.chromatic.com/?path=/story/design-system-avatar--primary"
    },
    {
      id: 2,
      ref: secondRef,
      src: "./open-dao",
      title: " Open DAO Challenge",
      description: `Join the OpenDAO Community to discover, invest in, and vote on
    exceptional DAOs. You have the power!`,
      showDescription: false,
      linkToSite: "https://dao-open-challenge.vercel.app/"
    },
    {
      id: 3,
      ref: thirdRef,
      src: "./spiinge",
      title: "Spiinge",
      description:
        "A product management application to build projects and track the lean development method.",
      showDescription: false,
      linkToSite: "https://github.com/iamAbayomi/kms"
    }
  ];

  const [projectsDataState, setProjectsDataState] =
    useState<IProjectsData[]>(projectsData);
  const projectSectionRef = useRef<HTMLDivElement>(null);

  function viewHomePage() {
    router.push("/");
  }

  function viewProjects(item: IProjectsData) {
    window.open(`${item.linkToSite}`, "_newtab");
  }

  function nextPortfolio() {
    const tempProjectsData = projectsDataState;
    let temp = tempProjectsData[0];
    let temp2 = tempProjectsData[2];
    tempProjectsData[0] = tempProjectsData[1];
    tempProjectsData[2] = temp;
    tempProjectsData[1] = temp2;
    setProjectsDataState(JSON.parse(JSON.stringify(tempProjectsData)));
  }

  function previousPoftfolio() {
    const tempProjectsData = projectsDataState;
    let temp = tempProjectsData[0];
    let temp2 = tempProjectsData[2];
    tempProjectsData[0] = temp2; //tempProjectsData[2];
    tempProjectsData[2] = tempProjectsData[1];
    tempProjectsData[1] = temp; //tempProjectsData[0];
    setProjectsDataState(JSON.parse(JSON.stringify(tempProjectsData)));
  }

  return (
    <div className="">
      <div className="bg-black text-white min-h-screen pt-4 px-0 pb-[50px]">
        <div className="flex items-center px-10">
          <p className="text-[42px] font-bold pointer" onClick={viewHomePage}>
            {" "}
            O.A
          </p>
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
          className="projects-section flex
             justify-between gap-[0px] mt-[50px] "
          ref={projectSectionRef}
        >
          {projectsDataState?.map((item: IProjectsData, index) => (
            <div className="projects-container flex mt-[40px] items-center">
              {index == 1 && (
                <img
                  src="./backward-arrow.svg"
                  className="arrow mx-[10px] sm:mx-[1.56rem] pointer"
                  onClick={() =>
                    setTimeout(() => {
                      previousPoftfolio();
                    }, 500)
                  }
                />
              )}
              <div
                className={`image-container pointer ${
                  index == 1 && "center-image-container"
                }`}
              >
                <img
                  ref={item?.ref}
                  className={`image-item pointer ${
                    index == 1 ? "center-image-item" : "side-image"
                  }`}
                  onClick={
                    index == 1
                      ? () => viewProjects(item)
                      : index == 0
                      ? () => previousPoftfolio()
                      : () => nextPortfolio()
                  }
                  src={`${item?.src}-${index == 1 ? "main.svg" : "side.svg"}`}
                />
                <div
                  className={`projects-description mt-[70px] mx-auto max-w-[550px] text-center ${
                    index == 1 ? " block " : "hidden"
                  }`}
                >
                  <p className="text-center lg:text-[1.5rem]  font-bold">
                    {item?.title}
                  </p>
                  <p className=" mt-[1.125rem] text-[0.8125rem] lg:text-[1.125rem] font-normal">
                    {item?.description}
                  </p>
                </div>
              </div>
              {index == 1 && (
                <img
                  src="./forward-arrow.svg"
                  className="arrow mx-[10px] sm:mx-[1.56rem]  pointer"
                  onClick={() =>
                    setTimeout(() => {
                      nextPortfolio();
                    }, 500)
                  }
                />
              )}
            </div>
          ))}
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
    </div>
  );
};

export default Index;
