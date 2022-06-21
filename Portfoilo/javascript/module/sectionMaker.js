function sectionMaker(arr, tagName, idValue) {
  let result = "";
  arr.forEach((value, index) => {
    result += `<${tagName} id="${idValue}">${value}-${index}</${tagName}>`
  });
  return result;
}

export default sectionMaker;