let opacity=0;


export function show(CM1){
  let intervalID=0;
  let target = CM1;
  // let div = document.getElementById("Two");
  // opacity = Number(window.getComputedStyle(div).getPropertyValue("opacity"));
  opacity = 0;
  target.style.opacity=opacity;
  
  if(opacity<1){
    //Fade in 핵심 부분
    opacity = opacity+0.2;
    target.style.opacity=opacity;
    console.log("dd")
    //img.style.opacity=opacity;
  }
  else if(opacity = 0){
    clearInterval(intervalID);
  }
}	 


export function hide(){
  let opacity =0;
  let intervalID=0;
  let target = document.getElementById("One");
  let div = document.getElementById("One");
  opacity = Number(window.getComputedStyle(div).getPropertyValue("opacity"));
  
  if(opacity>0){
    //Fade out 핵심 부분
    opacity = opacity-0.2;
    target.style.opacity=opacity;
  }
  else{
    clearInterval(intervalID);
  }
}

export function fadeOut(idname, target, time){
  setInterval(hide(idname,target), time)
};