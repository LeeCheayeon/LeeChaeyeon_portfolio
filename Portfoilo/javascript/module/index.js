import {boxstyle, displayStyle} from "./function.js";
import crateElem from "./divMaker.js";
import pageMaker from "./pageMaker.js";
import rootEvent from "./rootEvent.js";

// One.innerHTML = crateElem('#333', "Two", "div");
function indexMaker(parentTag){
  const imgname = "div.svg"
  parentTag.innerHTML = `
  ${crateElem("#333", "img", "div")}
  <div id="divbox">
  ${crateElem("#fff", "none", "div")}
  </div>
  ${crateElem('#d4d4d4', "Two", "div")}
  `
  // <img src=${imgname}></img>
  
  const One = document.getElementById("One");
  displayStyle(One, "flex", "center","center")
  const indexBox = Array.from(One.children);
  indexBox.forEach((value,index)=>{
    value.style.position = "absolute";
    if(value.id === "img"){
      boxstyle(value, "100vw", "100vh")
      value.style.display = "block";
    }else {
      if(value.id === "divbox"){
        boxstyle(value, "100vw", "100vh");
        console.log(value.style.opacity)
        value.style.opacity = 0;
        value.style.display = "none";
      }else if(value.id === "Two"){
        boxstyle(value, '50vw','30vh');
        displayStyle(value,"flex", "center","center")
        value.style.display = "none";
      }
    }
  });
}

export default indexMaker;