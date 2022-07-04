import { colorArr, contentArr,contentArr_3,protextboxArr } from "./data.js";
import { boxstyle, gridstyle, displayStyle } from "./function.js";
import pageMaker from "./pageMaker.js";
import {LoopMaker, LoopContent} from "./Loopfunction.js";
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
      let valueT = value.firstElementChild;
      valueT.children[0].innerHTML= "Project-01";
      valueT.children[1].innerHTML= "Pet's Life";
    } else if(value.id === contentArr[1]){
      let valueT = value.firstElementChild;
      valueT.children[0].innerHTML= "Project-02";
      valueT.children[1].innerHTML= "Pet's Life";
    }else if(value.id === contentArr[2]){
      let valueT = value.firstElementChild;
      valueT.children[0].innerHTML= "Project-03";
      valueT.children[1].innerHTML= "Pet's Life";
    }else if(value.id === contentArr[3]){
      let valueT = value.firstElementChild;
      valueT.children[0].innerHTML= "Contact";
      valueT.children[1].innerHTML= "";
    }
  });

  slider();

  target.addEventListener("mouseenter", function(e){
    console.log(target);
    const targetPar =e.target.parentNode;
    console.dir(target.firstElementChild);
    if(target.firstElementChild.id === "contents"){
      if(e.target.classList.value === "inline"){
        targetPar.style.marginBottom= `${+1}vw`;
        targetPar.style.marginTop=`${+1}vw`;
      }
    }
  });
  target.addEventListener("mouseleave", function(e){
    const targetPar =e.target.parentNode;
    console.log("leave")
    if(target.firstElementChild.id === "contents"){
      if(e.target.classList.value === "inline"){
        targetPar.style.marginBottom= `0vw`;
        targetPar.style.marginTop= `0vw`;
      }
    }
  });

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