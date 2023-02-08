import { options } from "@/utils/dummyvalues";
import { animatePortfolioItem } from "@/utils/helpers";
import { IProjectsData } from "@/utils/types";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const router = useRouter();

  const { ref } = useInView(options);
  const { ref: secondRef } = useInView({
    threshold: 1,
    onChange(inView, entry) {
      // let x = entry
      animatePortfolioItem(inView, entry);
    }
  });
  const { ref: thirdRef } = useInView(options);
  const [projectsData, setProjectsData] = useState<IProjectsData[]>([
    {
      ref: ref,
      src: "./design-system-main.svg",
      title: "Design System",
      description: "A design system to help you build your react components.",
      showDescription: false
    },
    {
      ref: secondRef,
      src: "./open-dao-main.jpg",
      title: " Open DAO Challenge",
      description: `Join the OpenDAO Community to discover, invest in, and vote on
    exceptional DAOs. You have the power!`,
      showDescription: false
    },
    {
      ref: thirdRef,
      src: "./spiinge-main.jpg",
      title: "Spiinge",
      description:
        "A product management application to build projects and track the lean development method.",
      showDescription: false
    }
  ]);

  const projectSectionRef = useRef<HTMLDivElement>(null);

  function handleScroll() {
    let divScroll = projectSectionRef.current;
    let total = divScroll!!.scrollLeft + divScroll!!.clientWidth;
  }

  function viewHomePage() {
    router.push("/");
  }
  return (
    <div className="max-w-[1600px]">
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
        <div
          className=" projects-section flex  items-center
             gap-[120px] mt-[50px] "
          ref={projectSectionRef}
          onScroll={handleScroll}
        >
          {projectsData?.map((item: IProjectsData, index) => (
            <div ref={item?.ref} className="mt-[10px] image-container">
              <img className="image-item" src={item?.src} />
              {item?.showDescription && (
                <div className="mt-[70px] mx-auto w-[550px] text-center">
                  <p className="text-center text-[24px] font-bold">
                    {item?.title}
                  </p>
                  <p className=" mt-[18px] font-normal">{item?.description}</p>
                </div>
              )}
            </div>
          ))}
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
