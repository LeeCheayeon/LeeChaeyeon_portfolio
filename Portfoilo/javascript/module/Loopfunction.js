import contactTyping from "./contact.js";
import { buttonData,proRightButnArr, contentArr,pageData, lastPageData } from "./data.js";
import pageMaker from "./pageMaker.js";
import proBaseMaker from "./projectBase.js";

const lastpage = pageData[pageData.length-1];
// console.log(lastpage);
export function LoopMaker(lengthValue, ifOne, ifTwo,Target, displayValue){
  for(let i=0; i<lengthValue.length; i++){
    if(ifOne.id === ifTwo[i].id){
      Target[i].style.display = displayValue;
      // contentsMaker(contentPar);
      // console.log(Target[i]);
      if (ifOne.id !== "One" && ifOne.id !== "Two"){
        // 만약 이벤트 타겟의 아이디가 "One","Two"가 아니라면
        if(ifOne.id === lastpage){
          contactTyping(Target[i], lastPageData);
        }else{
        proBaseMaker(Target[i]);
      }
    }
    }
  }
}

const contentLength = contentArr.length * 3;
// for(let i=0; i<contentLength; i++){
export function LoopContent(array,tagname){
    let result = '';
  array.forEach((value) => {
    result += `<${tagname} id="${value}">${value}</${tagname}>`
    // result += pageMaker(contentArr,"div",in)
  });
  return result;
    console.log(contentLength);
    target.innerHTML=`
    ${pageMaker(contentArr, "div")}
    `;

  }
// }
// console.log(LoopContent(target));