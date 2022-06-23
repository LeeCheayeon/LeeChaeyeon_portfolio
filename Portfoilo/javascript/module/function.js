export function boxstyle(target, width, height, backColor) {
  target.style.width = width;
  target.style.height = height;
  target.style.backgroundColor = backColor;
}

export function indexclick(target){
  const eventsibling =target.nextElementSibling;  
  // console.dir(eventsibling);
  target.parentElement.style.display = "block";
  eventsibling.style.display = "block";
}

export function displayStyle(target,display,justcon,alitems,flexDirco){
  target.style.display = display;
  target.style.justifyContent = justcon;
  target.style.alignItems = alitems;
  target.style.flexDirection = flexDirco;
}

export function gridstyle(target,gridTemColumns,gridTemRows,gridGap){
  target.style.gridTemplateColumns = gridTemColumns;
  target.style.gridTemplateRows = gridTemRows;
  target.style.gridGap = gridGap;
}
// repeat(3, 200px)

export function popEscClick(target){
  if(target.id === "popEsc"){
    const parent = target.parentNode.parentNode;
    console.log(parent);
    parent.style.display = "block";
    target.parentNode.style.display = "none";
  }
}