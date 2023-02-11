import { animatePortfolioItem } from "../helpers";
import { ISocialLink } from "../types";

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