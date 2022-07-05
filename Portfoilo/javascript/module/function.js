import crateElem from "./divMaker.js";
import pageMaker from "./pageMaker.js"
import { colorArr, pageData, subTArr, tilteArr} from "./data.js";

export function boxstyle(target, width, height, backColor) {
  target.style.width = width;
  target.style.height = height;
  target.style.backgroundColor = backColor;
}

export function indexclick(target){
  if(target.id === "none"){
    const eventsibling =target.parentNode.nextElementSibling;  
    eventsibling.style.display = "block";
  }else if(target.id === "img"){
    // 만약 img라면 클릭 후 dispaly가 블락이 되고.. 
    // 오퍼시티가 점점 증가 후 다음 형제 페이지로 넘어가기
    console.log(target)
    const eventsibling =target.nextElementSibling;  
    eventsibling.style.display = "block";
    eventsibling.style.opacity = 1;
    // setInterval(show(target), 100);
  }else{
    const eventsibling =target.nextElementSibling;  
    eventsibling.style.display = "block";
    // intervalID = setInterval(show,200);
  }
}

export function displayStyle(target,display,justcon,alitems,flexDirco){
  target.style.display = display;
  target.style.justifyContent = justcon;
  target.style.alignItems = alitems;
  target.style.flexDirection = flexDirco;
}

export function popEscClick(target){
  if(target.id === "popEsc"){
    const parent = target.parentNode.parentNode;
    console.log(parent);
    parent.style.display = "block";
    target.parentNode.style.display = "none";
  }
}

export function popUpMaker(tagname,idname,array){
  const inMake = pageMaker(array,"div");
  return `
  <${tagname} id="${idname}" style = "display: none;">${inMake}</${tagname}>
  `;
}

const lastpage = pageData[pageData.length-1];
console.log(lastpage);
export function EscClick (target, displayviewDiv){
  if(target.parentNode.id === lastpage){
    console.log("last");
    const targetEsc = target.parentNode;
    targetEsc.style.display = "none";
    displayviewDiv[1].style.display = "flex";
  }else{
    const targetEsc = target.parentNode.parentNode;
    targetEsc.style.display = "none";
    displayviewDiv[1].style.display = "flex";
  }
}

export function subProPage(target,index){
boxstyle(target,"18vw", "55vh",colorArr[index]);
displayStyle(target,"flex", "center","center","column");
let valueT = target.children[0];
valueT.children[0].innerHTML= tilteArr[index];
valueT.children[1].innerHTML= subTArr[index];
}

export function contentPageText(target,index){
boxstyle(target,"18vw", "55vh",colorArr[index]);
let valueT = target.firstElementChild;
valueT.children[0].innerHTML= tilteArr[index];
valueT.children[1].innerHTML= subTArr[index];
}