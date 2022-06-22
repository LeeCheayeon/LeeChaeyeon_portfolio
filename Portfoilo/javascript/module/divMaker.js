function crateElem(backColor, idName, tagName){
  const odject ={
    style : backColor,
    idName : idName,
    tagName : tagName
  }
  
  return `
  <${odject.tagName} id="${odject.idName}" style = "background-color : ${odject.style}">${idName}</${odject.tagName}>
  `;
}

export default crateElem;