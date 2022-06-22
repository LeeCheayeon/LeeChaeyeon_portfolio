// js 파일
// import LoopMaker from "./module/Loopfunction.js";
import LoopMaker from "./Loopfunction.js";

const pages = Array.from(document.querySelectorAll("#root>section"));
  // 클릭시 다음 페이지(2)로 넘어감================================

  function rootEvent(target){
    target.addEventListener("click", function(event){
      let elem = document.getElementById(`${event.target.id}`);
      if(event.target.id === elem.id){
        event.target.style.display = "block";
        pages.forEach((value)=>{
          if(value.id !== event.target.id){
            value.style.display = "none";
          }
        });
        if(event.target.id === "Two"){
        // id의 값이 TWo일때 =======================================
        LoopMaker(pages, event.target, pages, pages,"block", root.children[1]);
        // page 2의 목차 div를 눌렀을 때 ============================
          root.children[1].addEventListener("click", function(event){
            LoopMaker(pages, event.target, pages, pages,"block", root.children[1])
          });
        }else if(event.target.id === "esc"){
          // esc 나가기 버튼을 눌렀을 때 ============================
          console.log("esc");
          event.target.style.display = "none";
          pages[1].style.display = "block";
        }
      }
    });
  }
  
    

  export default rootEvent;