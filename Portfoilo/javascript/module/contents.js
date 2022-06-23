import { colorArr, contentArr } from "./data.js";
import { boxstyle, gridstyle, displayStyle } from "./function.js";
import pageMaker from "./pageMaker.js";

function contentsMaker(parentTag){
  displayStyle(parentTag,"flex", "center", "flexEnd");
  // 왜 여기서 align-items: flex-end;가 안먹히는걸까?
  parentTag.innerHTML = `
  <div id="contents">
  ${pageMaker(contentArr, "div", "#333")}
  </div>
  `

  const content = document.getElementById("contents");
  boxstyle(content, "100vw", "50vh", "none");
  displayStyle(content, "flex","center", "flexEnd", "row");
  // 왜 여기서 align-items: flex-end;가 안먹히는걸까?
  const contents = Array.from(document.querySelectorAll("#contents>div"));
  contents.forEach((value, index)=>{
    // 목차 박스 카드용으로 간단하게 div 지정 
    boxstyle(value,"20vw", "40vh", colorArr[index]);
  });
}

export default contentsMaker;