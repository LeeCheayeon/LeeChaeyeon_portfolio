import contactTyping from "./contact.js";
import { contentArr,pageData, lastPageData, protextboxArr } from "./data.js";
import { boxstyle, displayStyle, subProPage } from "./function.js";
import pageMaker from "./pageMaker.js";
import proEvent from "./proEvent.js";
import proBaseMaker from "./projectBase.js";

const lastpage = pageData[pageData.length-1];
export function LoopMaker(lengthValue, ifOne, ifTwo,Target, displayValue){
  for(let i=0; i<lengthValue.length; i++){
    if(ifOne.id === ifTwo[i].id){
      Target[i].style.display = displayValue;
      if (ifOne.id !== "One" && ifOne.id !== "Two"){
        // 만약 이벤트 타겟의 아이디가 "One","Two"가 아니라면
        if(ifOne.id === lastpage){
          conClick(Target[i]);
          contactTyping(Target[i], lastPageData);
        }else{
          Target[i].innerHTML = "";
          proEvent(Target[i]);
        //   conClick(Target[i]);
        // proBaseMaker(Target[i]);
      }
    }
    }
  }
}

export function conClick(target){
  target.style.overflow = "hidden";
  console.log(target);
  target.innerHTML = `
  <article id="${target.id}" class="itemSub">
  <div class="inline">
  ${pageMaker(protextboxArr,"div","none")}
  </div>
  </article>
  `;

  displayStyle(target, "flex", "center","center","column");

  // funcion 정리하기
  if(target.id === contentArr[0]){
    subProPage(target.children[0],0);
  } else if(target.id === contentArr[1]){
    subProPage(target.children[0],1);
  }else if(target.id === contentArr[2]){
    subProPage(target.children[0],2);
  }else if(target.id === contentArr[3]){
    subProPage(target.children[0],3);
  }
  }
