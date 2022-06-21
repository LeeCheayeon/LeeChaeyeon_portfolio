
// function tagMaker(tagName,arr, StagName, idValue) {
  function divMaker(target, tagName, idValue) {
  target.innerHTML =`<${tagName} id ="${idValue}"></${tagName}>`;
};

export default divMaker;