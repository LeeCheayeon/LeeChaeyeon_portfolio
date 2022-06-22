import contentsMaker from "./contents.js";
import { buttonData } from "./data.js";
import pageMaker from "./pageMaker.js";


function LoopMaker(lengthValue, ifOne, ifTwo,Target, displayValue, contentPar){
  for(let i=0; i<lengthValue.length; i++){
    if(ifOne.id === ifTwo[i].id){
      Target[i].style.display = displayValue;
      contentsMaker(contentPar);
      if (event.target.id !== "One" && event.target.id !== "Two"){
        Target[i].innerHTML = pageMaker(buttonData, "div", "#333");
      }
    }
  }
}

export default LoopMaker;

