import { animatePortfolioItem } from "../helpers";
import { IProjectsData, ISocialLink } from "../types";

export const options = {
    threshold: 1,
    delay: 1000,
    onChange(inView: boolean, entry: any) {
  //   animatePortfolioItem(inView, entry);
    }
  };

export const footerLink: ISocialLink[]  = [{
  name: "LinkedIn",
  link: "https://www.linkedin.com/in/oladiniabayomi/"
},
{
  name:"GitHub",
  link: "https://github.com/iamAbayomi"
}, 
{
  name:"Mail",
  link: "mailto:oladinifolawiyo@gmail.com"
},
{
  name: "Twitter",
  link: "https://twitter.com/oladinifolawiyo"
}
]

 
export const projectsData: IProjectsData[] = [
  {
    id: 1,
    src: "./kole",
    title: "Kole",
    description: `At Kólé, we are committed to transforming resource utilization in the construction industry. Our mission is to empower construction companies and other stakeholders to minimize construction waste and debris, fostering a more profitable and sustainable approach to construction.`,
    showDescription: false, 
    linkToSite: "https://getkole.co/"
  },
  {
    id: 2,
    src: "./tiber-aii",
    title: "Tiber AI",
    description: `Get AI-driven market insights in minutes not weeks to stay ahead of the game and market trends.`,
    showDescription: false, 
    linkToSite: "https://tiber.ai/"
  },
  {
    id: 3,
    src: "./sendme",
    title: "Sendme",
    description:
      "Focus on the things that matter while we handle your animal protein needs by giving you premium quality meat at the best prices.",
    showDescription: false,
    linkToSite: "https://www.sendme.ng/"
  },
  {
    id: 4,
    src: "./open-dao",
    title: " Open DAO Challenge",
    description: `Join the OpenDAO Community to discover, invest in, and vote on
    exceptional DAOs. You have the power!`,
    showDescription: false,
    linkToSite: "https://dao-open-challenge.vercel.app/"
  },
  // {
  //   id: 3,
  //   src: "./design-system",
  //   title: "Design System",
  //   description: "A design system to help you build your react components.",
  //   showDescription: false,
  //   linkToSite:
  //     "https://6207da00fd8970003a4b561e-qngsmazzda.chromatic.com/?path=/story/design-system-avatar--primary"
  // },
 
  // {
  //   id: 4,
  //   src: "./spiinge",
  //   title: "Spiinge",
  //   description:
  //     "A product management application to build projects and track the lean development method.",
  //   showDescription: false,
  //   linkToSite: "https://github.com/iamAbayomi/kms"
  // },
  
];

