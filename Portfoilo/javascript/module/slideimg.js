import { slideimgArr} from "./data.js";
import pageMaker from "./pageMaker.js";

let count = 0;
function slideimg(target,elem){
  elem.innerHTML = `
  ${pageMaker(slideimgArr,"div","none")}`;
  const elems = Array.from(document.querySelectorAll("#elem>div"));
  console.log(elems);

  elems.forEach((value)=>{
    value.style.display = "block";
    if(value.id !== slideimgArr[0]){
      value.style.display="none";
    }
  });
  
  target.addEventListener("click",function(e){
    console.log(e.target);
    if(e.target.id === "RB"){
      count++;
      elems.forEach((value,index)=>{
        if(value.id === slideimgArr[count]){
          value.style.display="block"
        }else if(count === 5){
          value.style.display="block"
          count=-1;
        }else{
          value.style.display="none";
        }
      });
      console.log("rb");
    }else if(e.target.id === "LB"){
      count--;
      elems.forEach((value)=>{
        if(value.id === slideimgArr[count]){
          value.style.display="block"
        }else if(count === -1){
          value.style.display="block"
          count=0;
        }else{
          value.style.display="none";
        }
      });
    }
  });
}

export default slideimg;