import { boxstyle, positionStyle } from "./function.js";
import pageMaker from "./pageMaker.js";


function contactTyping(target, array){
  target.innerHTML = pageMaker(array,"div");

  target.children[1].innerHTML = `
  <div class="conImgL"></div>
  <div class="conImgR"></div>
  <p>
  <span class="typed-text"></span><span class="cursor"></span></p>
  `;

  target.children[2].innerHTML=`
  <p>yeontachi@gmail.com <br> github.com/LeeCheayeon </p>
  <div></div>
  `;

  //======================================================
  
  const Esc = document.getElementById("Esc");
  Esc.classList.add("esc");
  Esc.innerHTML="";
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  const typingBox =document.querySelector("#container");
  const textArray = ["안녕하세요.", "호랑이 항아리"]

  const conImgL = typingBox.children[0];
  const conImgR = typingBox.children[1];
  console.log(conImgL);
  console.log(conImgR);
  // boxstyle(imgbox, "4vw","4vw","#c4c4c4");

  //콘솔인식됨 =================================
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  //=================================
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
  
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
      
    } 
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
  
    if (charIndex > 0) {
  
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
  
    } 
    else {
  
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if(textArrayIndex>=textArray.length) textArrayIndex=0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  
  target.addEventListener("mouseover", function() { 
    if(textArray.length) setTimeout(type, newTextDelay + 250);
  }, { once : true});
  }

export default contactTyping;

// { once : true} : 이벤트 한번만 실행 