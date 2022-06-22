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