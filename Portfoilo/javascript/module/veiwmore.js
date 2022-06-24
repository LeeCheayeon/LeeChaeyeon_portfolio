import contentsMaker from "./contents.js";
import pageMaker from "./pageMaker.js";
import crateElem from "./divMaker.js";

function ViewMoreDiv(Target){
  const targetParent = Target.parentNode.parentNode.parentNode.parentNode;
  targetParent.style.display="block";
  const popUp = Target.parentNode.parentNode.parentNode.previousElementSibling;
  popUp.style.display="block";
}

export default ViewMoreDiv;