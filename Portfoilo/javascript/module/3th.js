import divMaker from "./divMaker.js";
import boxstyle from "./function.js";

function thrMaker(parentTag){
  root.innerHTML = "";
  divMaker(parentTag, "div", "projectOne");
  const projectOne = document.getElementById('projectOne');
  boxstyle(projectOne, "100vw", '100vh', "#ff6666");
  // 나가기 버튼
  divMaker(projectOne, "div", "ESC");
  const ESC = document.getElementById("ESC");
  boxstyle(ESC, "10vw", "10vw", "#333");
}

export default thrMaker;