// js 파일
import { menuData, backColor } from "./module/data.js";
import boxstyle from "./module/function.js";
import divMaker from "./module/divMaker.js";
import indexMaker from "./module/index.js";
import contentsMaker from "./module/contents.js";
import thrMaker from "./module/3th.js";
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
  // 맨 첫화면 구성 =========================================
  indexMaker(root);
  // divMaker(root,'div', "fist");
  // // 새로운 태그 생성
  // const fist = this.document.getElementById("fist")
  // // console.log(div);
  // boxstyle(fist, "100vw", "100vh", "#333");

  // const fist = this.document.getElementById("index");
  // // 클릭시 다음 페이지로 넘어가는 것처럼 생성과 삭제 목차 페이지===========
  root.addEventListener("click", function(event){
    console.dir(event.target.id);
    if(event.target.id === "index"){
      contentsMaker(root);
    }else if(event.target.id === "clickbox"){
      console.log('ㅇㅇ');
      thrMaker(root);
    }else if(event.target.id === "ESC"){
      contentsMaker(root);
    }
  });
});