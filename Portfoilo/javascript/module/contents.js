import {contentArr,contentArr_3,protextboxArr } from "./data.js";
import { boxstyle, contentPageText, displayStyle } from "./function.js";
import pageMaker from "./pageMaker.js";
import {LoopMaker} from "./Loopfunction.js";
import slider from "./slider.js";

function contentsMaker(parentTag,target,targetP, targetPS){
  parentTag.classList.add('slider');
  displayStyle(parentTag,"flex", "center", "flexEnd");
  parentTag.innerHTML = `
  <div id="contents">
  ${pageMaker(contentArr_3, "div")}
  </div>
  `
  const content = document.getElementById("contents");
  boxstyle(content, "100vw", "100vh", "flex");
  displayStyle(content, "flex","center", "flexEnd", "column");
  content.classList.add("items");
  const contents = Array.from(document.querySelectorAll("#contents>div"));
  contents.forEach((value)=>{
    displayStyle(value,"flex","center", "center");
    value.classList.add('item');
    value.innerHTML="";
    value.innerHTML=`
    <div class="inline">
    ${pageMaker(protextboxArr, "div")}
    <div>
    `;

    if(value.id === contentArr[0]){
      contentPageText(value,0)
    } else if(value.id === contentArr[1]){
      contentPageText(value,1)
    }else if(value.id === contentArr[2]){
      contentPageText(value,2)
    }else if(value.id === contentArr[3]){
      contentPageText(value,3)
    }
  });

  slider();

  target.addEventListener("click", function(e){
    const targetPP =e.target.parentNode.parentNode;
    const targetPar =e.target.parentNode;
    targetPS.style.display = "none";
    if(e.target.classList.value === "inline"){
      console.log('inline');
      LoopMaker(targetP, targetPar, targetP, targetP,"block", target)
    }else{
      LoopMaker(targetP, targetPP, targetP, targetP,"block", target)
    }
  });
}

export default contentsMaker;