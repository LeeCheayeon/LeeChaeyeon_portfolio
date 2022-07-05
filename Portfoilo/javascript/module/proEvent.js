import { conClick } from "./Loopfunction.js";
import proBaseMaker from "./projectBase.js";

function proEvent(target){
  console.log(target);

  function one(){
    return new Promise(function(resolve){
      setTimeout(function(){
        conClick(target);
        resolve();
        console.log("서브페이지");
      },800)
    });
  }
  one()
  .then(function(data){
    return new Promise(function(resolve){
      setTimeout(function(){
        console.log("스케일 인터렉션");
        resolve()
      },800)
    });
  })
  one()
  .then(function(data){
    return new Promise(function(resolve){
      setTimeout(function(){
        console.log("서브페이지 삭제 페이지 생성");
        target.innerHTMl= "";
        proBaseMaker(target);
      },4000)
    });
  });
}

export default proEvent;