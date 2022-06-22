import { contentArr } from "./data.js";
import pageMaker from "./pageMaker.js";

function contentsMaker(parentTag){
  parentTag.innerHTML = `
  <div id="contents">
  ${pageMaker(contentArr, "div", "#333")}
  </div>
  `

  const contents = Array.from(document.querySelectorAll("#contents>div"));
  contents.forEach((value)=>{
    // 목차 박스 카드용으로 간단하게 div 지정 
  });
  console.log(contents);
  // const co
}

export default contentsMaker;