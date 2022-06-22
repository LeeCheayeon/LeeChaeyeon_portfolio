// 2페이지로 넘어갈 div 박스 만들기 

import crateElem from "./divMaker.js";
import pageMaker from "./pageMaker.js";

// One.innerHTML = crateElem('#333', "Two", "div");

function indexMaker(parentTag){
  parentTag.innerHTML = crateElem('#333', "Two", "div");
}

export default indexMaker;