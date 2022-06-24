import contentsMaker from "./contents.js";
import { buttonData,proRightButnArr,protextboxArr,popArr } from "./data.js";
import { boxstyle, displayStyle,popUpMaker } from "./function.js";
import pageMaker from "./pageMaker.js";
import crateElem from "./divMaker.js";

function proBaseMaker(target){
  target.innerHTML = `
  <div class="upButBox">
    ${pageMaker(buttonData,"div","#333")}
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

  // const popUp = document.getElementById("popUp");
  // console.log(popUp);
  // popUp.style.display = "none";
}

export default proBaseMaker;
