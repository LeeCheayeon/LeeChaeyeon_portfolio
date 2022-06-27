// js 파일
import {pageData} from "./module/data.js";
import pageMaker from "./module/pageMaker.js";
import indexMaker from "./module/index.js";
// import LoopMaker from "./module/Loopfunction.js";
import { EscClick, indexclick, popEscClick } from "./module/function.js";
import ViewMoreDiv from "./module/veiwmore.js";
import contentsMaker from "./module/contents.js";

const root= document.getElementById("root");

window.addEventListener("load", function(){
  // 전체 페이지 생성=============================================
  root.innerHTML = pageMaker(pageData,"section","none");
  const pages = Array.from(this.document.querySelectorAll("#root>section"));
  // 넓이, 높이값 지정 등 공통된 부분 스타일링 가능 =================
  pages.forEach((value,index)=>{
    value.style.width = "100vw";
    value.style.height = "100vh";
    if(value.id !== "One"){
      value.style.display = "none";
    }
  });
  indexMaker(root.children[0]);  
  // // 클릭시 다음 페이지(2)로 넘어감================================
  root.addEventListener("click", function(event){
    if(event.target.id === "Two"){
      pages[0].style.display = "none";
      // id의 값이 TWo일때 =======================================
      contentsMaker(pages[1],root.children[1],pages,pages[1]);
      // if(event.target.id === "contents"){
      //   console.log(event.target);

      // }
      // page 2의 목차 div를 눌렀을 때 ============================
      // root.children[1].addEventListener("click", function(event){
      //   console.log(event.target);
      //   pages[1].style.display = "none";
      //   LoopMaker(pages, event.target, pages, pages,"block", root.children[1])
      // });

    // esc 나가기 버튼을 눌렀을 때 ============================
    }else if(event.target.id === "esc"){
      // console.log(event.target.parentNode.parentNode);
      EscClick(event.target, pages);
    // 첫페이지에서 다음 페이지로 넘어가기전 div 클릭이벤트 ==== 
    }else if(event.target.id === "View More"){
      ViewMoreDiv(event.target);
    }else if(event.target.id === "popEsc"){
      popEscClick(event.target);
    } else if(event.target.id === "img"){
      indexclick(event.target);
    }else if(event.target.id === "none"){
      // console.dir(event.target);
      indexclick(event.target);
    }else if(event.target.id === "contents"){
      event.target.parentNode.style.display = "flex";
    }
  });
});


