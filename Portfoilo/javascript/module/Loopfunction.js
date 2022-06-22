import contentsMaker from "./contents";
import { buttonData } from "./data.js";
import pageMaker from "./pageMaker.js";
import contentsMaker from "./contents.js";

function Loop(lengthValue, ifOne, ifTwo,Target, displayValue){
  for(let i=0; i<lengthValue.length; i++){
    if(ifOne.id === ifTwo[i].id){
      Target[i].style.display = displayValue;
      // contentsMaker(parentValue);
      if (event.target.id !== "One" && event.target.id !== "Two"){
        Target.innerHTML = pageMaker(buttonData, "div", "#333");
      }
    }
  }
}

export default Loop;

