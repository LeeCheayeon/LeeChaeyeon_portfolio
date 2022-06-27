import { colorArr, contentArr,contentArr_3,protextboxArr } from "./data.js";
import { boxstyle, gridstyle, displayStyle } from "./function.js";
import pageMaker from "./pageMaker.js";
import {LoopMaker, LoopContent} from "./Loopfunction.js";

function contentsMaker(parentTag,target,targetP, targetPS){
  displayStyle(parentTag,"flex", "center", "flexEnd");
  parentTag.innerHTML = `
  <div id="contents">
  ${pageMaker(contentArr_3, "div")}
  </div>
  `
  const content = document.getElementById("contents");
  boxstyle(content, "100vw", "80vh", "flex");
  displayStyle(content, "flex","center", "flexEnd", "column");
  content.classList.add("items");
  const contents = Array.from(document.querySelectorAll("#contents>div"));
  contents.forEach((value)=>{
    //   boxstyle(value,"20vw", "40vh", colorArr[i]);
    displayStyle(value,"flex","center", "center");
    value.classList.add('item');
    value.innerHTML="";
    value.innerHTML=`
    <div class="inline">
    ${pageMaker(protextboxArr, "div")}
    <div>
    `;

    if(value.id === contentArr[0]){
      let valueT = value.firstElementChild;
      valueT.children[0].innerHTML= "Project-01";
      valueT.children[1].innerHTML= "Pet's Life";
    } else if(value.id === contentArr[1]){
      let valueT = value.firstElementChild;
      valueT.children[0].innerHTML= "Project-02";
      valueT.children[1].innerHTML= "Pet's Life";
    }else if(value.id === contentArr[2]){
      let valueT = value.firstElementChild;
      valueT.children[0].innerHTML= "Project-03";
      valueT.children[1].innerHTML= "Pet's Life";
    }else if(value.id === contentArr[3]){
      let valueT = value.firstElementChild;
      valueT.children[0].innerHTML= "Contact";
      valueT.children[1].innerHTML= "";
    }
  });

  const slider = document.querySelector("#contents")
let isMouseDown = false;
let startX, scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  slider.classList.add("active");

  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isMouseDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isMouseDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if(!isMouseDown) return;

  e.preventDefault();
  const x = e.pageX -slider.offsetLeft;
  const walk = (x-startX) * 1;
  slider.scrollLeft = scrollLeft - walk;
});

target.addEventListener("click", function(event){
  targetPS.style.display = "none";
  console.dir(event.target);
  if(event.target.classList.value === "inline"){
    const targetpar =event.target.parentNode;
    LoopMaker(targetP, targetpar, targetP, targetP,"block", target)
  }else{
    const targetpar =event.target.parentNode.parentNode;
    LoopMaker(targetP, targetpar, targetP, targetP,"block", target)
  }
});
}


export default contentsMaker;