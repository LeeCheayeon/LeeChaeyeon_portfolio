import contentsMaker from "./contents.js";
import { buttonData,proRightButnArr,protextboxArr } from "./data.js";
import pageMaker from "./pageMaker.js";

function proBaseMaker(target){
  target.innerHTML = `
  <div class="upButBox">
    ${pageMaker(buttonData,"div","#333")}
  </div>
    <artcle id="popUp" style="display:none;"></artcle>
  <div>
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
}

export default proBaseMaker;
