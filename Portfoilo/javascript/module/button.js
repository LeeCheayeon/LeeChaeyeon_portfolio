import divMaker from "./divMaker.js";
import boxstyle from "./function.js";

function buttonMaker(parentTag){
  for(let i = 0; i<2; i++){
    divMaker(parentTag, "div", "popUp");
    const popUp = document.getElementById('popUp');
    boxstyle(popUp, "10vw", '10vw', "#d4d4d4");
    // 나가기 버튼
    divMaker(parentTag, "div", "ESC");
    const ESC = document.getElementById("ESC");
    boxstyle(ESC, "10vw", "10vw", "#333");
  }
}

export default buttonMaker;