import boxstyle from "./function.js";
import crateElem from "./divMaker.js";
import pageMaker from "./pageMaker.js";
import rootEvent from "./rootEvent.js";

// One.innerHTML = crateElem('#333', "Two", "div");
function indexMaker(parentTag){
  const imgname = "div.svg"
  parentTag.innerHTML = `
  ${crateElem("#fff", "img", "div")}
  ${crateElem("#fff", "none", "div")}
  ${crateElem('#333', "Two", "div")}
  `
  // <img src=${imgname}></img>
  
  const One = document.getElementById("One");
  const indexBox = Array.from(One.children);
  indexBox.forEach((value,index)=>{
    boxstyle(value, "100vw", "100vh")
    value.style.position = "absolute";
    if(value.id !== "img"){
      value.style.display = "none";
    }
  });
  
  console.log(indexBox[1])
  // One.addEventListener("click", function(event){
  //   indexBox[1].style.display = "block";
  //   // indexBox[1].style.rotate = "90deg";
  //   if(event.target === indexBox[1]){
  //     // console.log("none")
  //     indexBox[2].style.display = "block"
  //   }
  //   console.log(event.target.id);
  // })
}

export default indexMaker;