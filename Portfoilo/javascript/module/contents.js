import { colorArr, contentArr } from "./data.js";
import { boxstyle, gridstyle, displayStyle } from "./function.js";
import pageMaker from "./pageMaker.js";
import LoopMaker from "./Loopfunction.js";

function contentsMaker(parentTag,target,targetP, targetPS){
  displayStyle(parentTag,"flex", "center", "flexEnd");
  // 왜 여기서 align-items: flex-end;가 안먹히는걸까?
  parentTag.innerHTML = `
  <div id="contents">
  ${pageMaker(contentArr, "div", "#333")}
  </div>
  `

  const content = document.getElementById("contents");
  // boxstyle(content, "100vw", "50vh", "none");
  // displayStyle(content, "inlineFlex","center", "flexEnd", "column");
  // 왜 여기서 align-items: flex-end;가 안먹히는걸까?
  const contents = Array.from(document.querySelectorAll("#contents>div"));
  contents.forEach((value, index)=>{
    // 목차 박스 카드용으로 간단하게 div 지정 
    boxstyle(value,"20vw", "40vh", colorArr[index]);
    value.classList.add('items');
  });

  const slider = document.querySelector("#contents")
  console.log(slider);
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
  console.log(event.target);
  targetPS.style.display = "none";
  LoopMaker(targetP, event.target, targetP, targetP,"block", target)
});
}


export default contentsMaker;