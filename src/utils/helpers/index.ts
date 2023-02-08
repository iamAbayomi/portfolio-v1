export function animatePortfolioItem (inView: boolean, entry: any) {
    if (inView) {
        let x = entry.target;
        x.style.maxWidth = "700px";
        x.style.width = "700px";
        x.nextSibling.style.display = "block";
      //  console.log("target", x);
      } else {
        let x = entry.target;
        x.style.maxWidth = "520px";
        x.style.width = "520px";
        x.nextSibling.style.display = "none";
      }
}