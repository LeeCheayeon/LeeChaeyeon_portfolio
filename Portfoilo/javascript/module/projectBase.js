import { buttonData,proRightButnArr,protextboxArr,popArr, popelemArr } from "./data.js";
import {boxstyle, displayStyle, popUpMaker } from "./function.js";
import pageMaker from "./pageMaker.js";

function proBaseMaker(target){
  target.innerHTML = `
  <div class="upButBox">
    ${pageMaker(buttonData,"div")}
  </div>
  ${popUpMaker('artcle',"popUp",popArr)}
  <div id="downBox">
  <div id="imgOne"></div>
  <div class="rightBox">
    <div class="textBox">
    ${pageMaker(protextboxArr,"div")}
    </div>
    <div>
    ${pageMaker(proRightButnArr,"div","#fff")}
    </div>
    <div id="imgTwo"></div>
    </div>
    </div>
  </div>
  `;

  const popelem = document.getElementById("view");
  const popEsc = document.getElementById("popEsc");
  const Esc = document.getElementById("esc");
  Esc.classList.add("esc");
  Esc.innerHTML="";
  popEsc.classList.add("esc");
  popEsc.innerHTML="";
  popelem.innerHTML = `
  ${pageMaker(popelemArr,"div","none")}
  `;
  boxstyle(popelem, "90vw", "75vh","none")

  const LB= document.getElementById("LB");
  const RB= document.getElementById("RB");
  const elem= document.getElementById("elem");
  LB.innerHTML='';
  RB.innerHTML='';

  boxstyle(elem, "75vw", "75vh","#d4d4d4");
}

export default proBaseMaker;
