import divMaker from "./divMaker.js";
import boxstyle from "./function.js";

function contentsMaker(parentTag){
  root.innerHTML = "";
  divMaker(parentTag, 'section', "contents");
  const contents = document.getElementById("contents");
  // 새로운 태그를 생성
  boxstyle(contents, "100vw", "50vh", "#d5d5d5");
  divMaker(contents, "div", "clickbox");
  const clickbox = document.getElementById("clickbox");
  // 새로 생성된 태그의 박스 스타일 지정 
  boxstyle(clickbox, "30vw", "30vw", "#ccc")
}

export default contentsMaker;