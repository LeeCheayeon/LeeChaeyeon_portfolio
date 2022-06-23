import contentsMaker from "./contents.js";
import { buttonData,proRightDiv,proRightButnArr } from "./data.js";
import pageMaker from "./pageMaker.js";


function LoopMaker(lengthValue, ifOne, ifTwo,Target, displayValue, contentPar){
  for(let i=0; i<lengthValue.length; i++){
    if(ifOne.id === ifTwo[i].id){
      Target[i].style.display = displayValue;
      contentsMaker(contentPar);
      if (event.target.id !== "One" && event.target.id !== "Two"){
        Target[i].innerHTML = `
        <div class="butnBox"> 
        ${pageMaker(buttonData, "div", "#333")}
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
        console.log(Target[i]);

        const rightButnBox = document.getElementById("butnBox");
        rightButnBox.innerHTML = "";
        rightButnBox.innerHTML = `
        ${pageMaker(proRightButnArr,"div","#fff")}
        `;
        const popUP = document.getElementById("popUp");
        popUP.style.display = "none";

      }
    }
  }
}

export default LoopMaker;

