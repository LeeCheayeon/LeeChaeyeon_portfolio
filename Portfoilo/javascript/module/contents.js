import { contentArr } from "./data.js";
import pageMaker from "./pageMaker.js";

function contentsMaker(parentTag){
  parentTag.innerHTML = pageMaker(contentArr, "div", "#333");
}

export default contentsMaker;