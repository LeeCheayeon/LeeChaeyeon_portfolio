import contentsMaker from "./contents.js";
import { buttonData,proRightDiv,proRightButnArr } from "./data.js";
import pageMaker from "./pageMaker.js";

function proBaseMaker(target){
  target.innerHTML = `
  <div class="upButBox">
    ${pageMaker(buttonData,"div","#333")}
  </div>
    <artcle id="popUp"></artcle>
  <div>
    <div id="imgOne"></div>
    <div class="rightBox">
      ${pageMaker(proRightDiv,"div","none")}
    </div>
    </div>
  </div>
  `;
  
  const butBox = document.getElementById("butnBox");
  console.log(butBox);
  butBox.innerHTML="";
  butBox.innerHTML = `
  ${pageMaker(proRightButnArr,"div","#fff")}
  `;

  const popUp = document.getElementById("popUp");
  // popUp.style.alignItems
  popUp.style.display = "none";
}

export default proBaseMaker;
