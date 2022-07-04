import { boxstyle, displayStyle } from "./function.js";

function ViewMoreDiv(Target){
  const targetParent = Target.parentNode.parentNode.parentNode.parentNode;
  targetParent.style.display="block";
  const popUp = Target.parentNode.parentNode.parentNode.previousElementSibling;
  displayStyle(popUp, "flex","center", "center", "column")
}

export default ViewMoreDiv;