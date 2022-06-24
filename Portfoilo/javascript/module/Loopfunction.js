import contentsMaker from "./contents.js";
import { buttonData,proRightButnArr, contentArr } from "./data.js";
import pageMaker from "./pageMaker.js";
import proBaseMaker from "./projectBase.js";


function LoopMaker(lengthValue, ifOne, ifTwo,Target, displayValue, contentPar){
  for(let i=0; i<lengthValue.length; i++){
    if(ifOne.id === ifTwo[i].id){
      Target[i].style.display = displayValue;
      contentsMaker(contentPar);
      if (ifOne.id !== "One" && ifOne.id !== "Two"){
      // 만약 이벤트 타겟의 아이디가 "One","Two"가 아니라면
      Target[i].style.display = displayValue;
      proBaseMaker(Target[i]);
    }
    }
  }
}

export default LoopMaker;

