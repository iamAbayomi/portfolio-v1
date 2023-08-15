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
    src: "./design-system",
    title: "Design System",
    description: "A design system to help you build your react components.",
    showDescription: false,
    linkToSite:
      "https://6207da00fd8970003a4b561e-qngsmazzda.chromatic.com/?path=/story/design-system-avatar--primary"
  },
  {
    id: 2,
    src: "./open-dao",
    title: " Open DAO Challenge",
    description: `Join the OpenDAO Community to discover, invest in, and vote on
  exceptional DAOs. You have the power!`,
    showDescription: false,
    linkToSite: "https://dao-open-challenge.vercel.app/"
  },
  {
    id: 3,
    src: "./spiinge",
    title: "Spiinge",
    description:
      "A product management application to build projects and track the lean development method.",
    showDescription: false,
    linkToSite: "https://github.com/iamAbayomi/kms"
  }
];
