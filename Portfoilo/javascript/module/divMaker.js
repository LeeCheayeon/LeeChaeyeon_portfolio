
// function tagMaker(tagName,arr, StagName, idValue) {
  function tagMaker(target, tagName, idValue) {
  target.innerHTML =`<${tagName} id ="${idValue}"></${tagName}>`;
};

export default tagMaker;