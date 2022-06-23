import contentsMaker from "./contents.js";
import pageMaker from "./pageMaker.js";
import crateElem from "./divMaker.js";

function ViewMoreDiv(target){
  const targetParent = target.parentNode.parentNode.parentNode.parentNode;
  // console.log(targetParent);
  targetParent.style.display="block";
  const popUp = document.getElementById("popUp");
  popUp.style.display = "block";
  // popUp.innerHTML= `
  // <div id="popEsc">x</div>
  // <div>
  // </div>
  // `;

  // const popEsc =document.getElementById("popEsc");
  // popEsc.addEventListener("click", function(event){
  //   if(event.target.id === "popEsc"){
  //     const parent = event.target.parentNode.parentNode;
  //     console.log(parent);
  //     parent.style.display = "block";
  //     popUp.style.display = "none";
  //   }
  // });
}

export default ViewMoreDiv;