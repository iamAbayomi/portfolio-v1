import { options } from "@/utils/dummyvalues";
import { IProjectsData } from "@/utils/types";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const router = useRouter();

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
      linkToSite: ""
    },
    {
      id: 2,
      ref: secondRef,
      src: "./open-dao",
      title: " Open DAO Challenge",
      description: `Join the OpenDAO Community to discover, invest in, and vote on
    exceptional DAOs. You have the power!`,
      showDescription: false,
      linkToSite: "https://dao-open-challenge.vercel.app/dao"
    },
    {
      id: 3,
      ref: thirdRef,
      src: "./spiinge",
      title: "Spiinge",
      description:
        "A product management application to build projects and track the lean development method.",
      showDescription: false,
      linkToSite: ""
    }
  ];

  const [projectsDataState, setProjectsDataState] =
    useState<IProjectsData[]>(projectsData);
  const projectSectionRef = useRef<HTMLDivElement>(null);

  function viewHomePage() {
    router.push("/");
  }

  function viewProjects(item: IProjectsData) {
    router.push(`${item.linkToSite}`);
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
    <div className="max-w-[1600px]">
      <div className="bg-black text-white min-h-screen pt-4 px-0 pb-[50px]">
        <div className="flex items-center px-10">
          <p className="text-[42px] font-bold pointer" onClick={viewHomePage}>
            {" "}
            O.A
          </p>
          <div className="flex ml-[71px] gap-6 pointer">
            <p>Resume</p>
            <p>Blog</p>
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
                  src={`${item?.src}-${index == 1 ? "main.jpg" : "side.svg"}`}
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
