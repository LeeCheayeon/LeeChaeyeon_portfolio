// js 파일
import {pageData,buttonData,colorArr,contentArr} from "./module/data.js";
import pageMaker from "./module/pageMaker.js";
import crateElem from "./module/divMaker.js";
import indexMaker from "./module/index.js";
import contentsMaker from "./module/contents.js";
import thrMaker from "./module/3th.js";
import Loop from "./module/Loopfunction.js";
// 기준 root 식별
// const seletor = {
//   root : document.querySelector("#root"),
//   first :document.querySelector("#index")
// }
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
    // value.style.display = "block";
    // 첫페이지만 보이도록 제어 -========================
    if(value.id !== "One"){
      // id값이 one이 아닌 섹션은 전부 보이지않게 처리
      value.style.display = "none";
    }
  });
  // console.log(root.children[0]);
  indexMaker(root.children[0]);


  // 클릭시 다음 페이지(2)로 넘어감===========
  root.addEventListener("click", function(event){
    let elem = document.getElementById(`${event.target.id}`);
    console.log(elem.id);
    console.log(event.target.id);
    if(event.target.id === elem.id){
      event.target.style.display = "block";
      pages.forEach((value)=>{
        if(value.id !== event.target.id){
          value.style.display = "none";
        }
      });
      if(event.target.id === "Two"){
        Loop(pages, event.target, pages, pages,"none");
            // contentsMaker(root.children[1]);
            root.children[1].addEventListener("click", function(event){
              for(let i=0; i<pages.length; i++){
                if(event.target.id === pages[i].id){
                  pages[i].style.display = "block";
                  pages[i].innerHTML = pageMaker(buttonData, "div", "#333")
                }
              }
            });
          }
      }
  });
});