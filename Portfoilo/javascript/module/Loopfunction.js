import contentsMaker from "./contents.js";
import { buttonData,proRightButnArr, contentArr,pageData, lastPageData } from "./data.js";
import pageMaker from "./pageMaker.js";
import proBaseMaker from "./projectBase.js";

const lastpage = pageData[pageData.length-1];
console.log(lastpage);
function LoopMaker(lengthValue, ifOne, ifTwo,Target, displayValue, contentPar){
  for(let i=0; i<lengthValue.length; i++){
    if(ifOne.id === ifTwo[i].id){
      Target[i].style.display = displayValue;
      // contentsMaker(contentPar);
      console.log(Target[i]);
      if (ifOne.id !== "One" && ifOne.id !== "Two"){
        // 만약 이벤트 타겟의 아이디가 "One","Two"가 아니라면
        if(ifOne.id === lastpage){
          console.log("last");
          Target[i].innerHTML = pageMaker(lastPageData,"div");
        }else{
        proBaseMaker(Target[i]);
      }
    }
    }
  }
}

export default LoopMaker;

