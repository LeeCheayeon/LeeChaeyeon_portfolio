// js 파일
import { menuData, backColor } from "./module/data.js";
import boxstyle from "./module/function.js";
import tagMaker from "./module/divMaker.js";
// 기준 root 식별
const root = document.getElementById("root");
console.log(root);

window.addEventListener("load", function(){
  // 맨 첫화면 구성 =========================================
  tagMaker(root,'div', "fist");
  // 새로운 태그 생성
  const fist = this.document.getElementById("fist")
  // console.log(div);
  boxstyle(fist, "100vw", "100vh", "#333");

  // 클릭시 다음 페이지로 넘어가는 것처럼 생성과 삭제 목차 페이지===========
  fist.addEventListener("click", function(){
    // div를 클릭하면
    root.innerHTML = "";
    // 기존의 root innerHTML를 없애고
    tagMaker(root, 'section', "contents");
    const contents = document.getElementById("contents");
    // 새로운 태그를 생성
    boxstyle(contents, "100vw", "50vh", "#d5d5d5");
    tagMaker(contents, "div", "clickbox");
    const clickbox = document.getElementById("clickbox");
    // 새로 생성된 태그의 박스 스타일 지정 
    boxstyle(clickbox, "30vw", "30vw", "#ccc")

    // 클릭 박스를 누르면 project page ==========================
    clickbox.addEventListener("click", function(){
      console.log("ckc");
      root.innerHTML = "";
      tagMaker(root, "div", "projectOne");
      const projectOne = document.getElementById('projectOne');
      boxstyle(projectOne, "100vw", '100vh', "#ff6666");
      // 나가기 버튼
      tagMaker(projectOne, "div", "ESC");
      const ESC = document.getElementById("ESC");
      boxstyle(ESC, "10vw", "10vw", "#333");

      // 목차 페이지로 돌아가는 것 =================================
      ESC.addEventListener("click", function(){
        root.innerHTML = "";
        // 기존의 root innerHTML를 없애고
        tagMaker(root, 'section', "contents");
        const contents = document.getElementById("contents");
        // 새로운 태그를 생성
        boxstyle(contents, "100vw", "50vh", "#d5d5d5");
        tagMaker(contents, "div", "clickbox");
        const clickbox = document.getElementById("clickbox");
        boxstyle(clickbox, "30vw", "30vw", "#ccc");
      });
    });
  });
});