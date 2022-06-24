let intervalID =0;

function show(target){
  let opacity =0;
  let targetS = target;
  opacity = Number(window.getComputedStyle(target).getPropertyValue("opacity"));

  if(opacity<1){
    opacity = opacity+0.1;
    targetS.style.opacity = opacity;
  }else{
    clearInterval(intervalID);
  }
}

export default show;