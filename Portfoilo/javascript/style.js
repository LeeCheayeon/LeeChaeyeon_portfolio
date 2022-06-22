// js 파일
import {pageData,buttonData,colorArr,contentArr} from "./module/data.js";
import pageMaker from "./module/pageMaker.js";
import crateElem from "./module/divMaker.js";
import indexMaker from "./module/index.js";
import contentsMaker from "./module/contents.js";
import LoopMaker from "./module/Loopfunction.js";

const root= document.getElementById("root");
console.log(root);

window.addEventListener("load", function(){
  this.document.body.style.padding = 0;
  this.document.body.style.margin = 0; 
  // 전체 페이지 생성
  root.innerHTML = pageMaker(pageData,"section","#ff6666");
  // 생성된 페이지 요소 식별
  const pages = Array.from(this.document.querySelectorAll("#root>section"));
  // 넓이, 높이값 지정 등 공통된 부분 스타일링 가능
  pages.forEach((value,index)=>{
    value.style.width = "100vw";
    value.style.height = "100vh";
    // 첫페이지만 보이도록 제어 -========================
    if(value.id !== "One"){
      // id값이 one이 아닌 섹션은 전부 보이지않게 처리
      value.style.display = "none";
    }
  });
  indexMaker(root.children[0]);


  // 클릭시 다음 페이지(2)로 넘어감===========
  root.addEventListener("click", function(event){
    let elem = document.getElementById(`${event.target.id}`);
    // console.log(elem.id);
    // console.log(event.target.id);
    if(event.target.id === elem.id){
      event.target.style.display = "block";
      pages.forEach((value)=>{
        if(value.id !== event.target.id){
          value.style.display = "none";
        }
      });
      if(event.target.id === "Two"){
        // id의 값이 TWo일때 ============================
        LoopMaker(pages, event.target, pages, pages,"block", root.children[1]);
        // page 2의 목차 div를 눌렀을 때 =================
          root.children[1].addEventListener("click", function(event){
            LoopMaker(pages, event.target, pages, pages,"block", root.children[1])
          });
        }else if(event.target.id === "esc"){
          // esc 나가기 버튼을 눌렀을 때 =================
          console.log("esc");
          event.target.style.display = "none";
          pages[1].style.display = "block";
        }
        }
  });
});