import contentsMaker from "./contents.js";
import divMaker from "./divMaker.js";
import boxstyle from "./function.js";

function indexMaker(parentTag){
  divMaker(parentTag,'div', "index");
  const first = document.getElementById("index")
  boxstyle(first, "100vw", "100vh", "#333");
}

export default indexMaker;
