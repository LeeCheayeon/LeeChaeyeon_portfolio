import contentsMaker from "./contents.js";
import {show, hide, fadeOut} from "./fadein.js"

function inTwoEvent(target,CM1,CM2,CM3){
  console.log(target);

  function one(){
    return new Promise(function(resolve){
      setTimeout(function(){
        target.style.backgroundColor = "#ff6666";
        console.log("#ff6666");
        resolve()
      }, 500)
    })
  }
  
  one()
  .then(function(data){
    return new Promise(function(resolve){
      setTimeout(function(){
        console.log("fade out");
        setInterval(hide,200);
        resolve()
      },1000)
    });
  })
  .then(function(data){
    return new Promise(function(resolve){
      setTimeout(function(){
        console.log("fade in + contentMaker");
        target.parentNode.style.display="none";
        contentsMaker(CM1,CM2,CM3,CM1);
      },2500)
    });
  });
}



export default inTwoEvent;