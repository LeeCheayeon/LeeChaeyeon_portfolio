import crateElem from "./divMaker.js";

function pageMaker(array, tagname, backColor){
  let result = '';
  array.forEach((value) => {
    //result += `<${tagname} id="${value}">${value}-${index}</${tagname}>`
    result += crateElem(backColor,value,tagname);
  });
  return result;
};

export default pageMaker;