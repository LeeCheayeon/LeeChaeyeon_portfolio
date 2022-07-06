import { buttonData,proRightButnArr,protextboxArr,popArr, popelemArr, slideimgArr } from "./data.js";
import {boxstyle, displayStyle, popUpMaker } from "./function.js";
import pageMaker from "./pageMaker.js";
import slideimg from "./slideimg.js"

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

  const popelem = target.children[1].children[1]; //view
  const popEsc = target.children[1].children[0];
  const Esc = target.children[0].children[2];
  console.dir(Esc);
  Esc.classList.add("esc");
  Esc.innerHTML="";
  popEsc.classList.add("esc");
  popEsc.innerHTML="";
  popelem.innerHTML = `
  ${pageMaker(popelemArr,"div","none")}
  `;
  boxstyle(popelem, "90vw", "75vh","none")

  const LB= popelem.children[0];
  const elem= popelem.children[1];
  const RB= popelem.children[2];
  LB.innerHTML='';
  RB.innerHTML='';

  boxstyle(elem, "75vw", "75vh","#d4d4d4");
  elem.innerHTML="";
  slideimg(popelem,elem);
}

export default proBaseMaker;
