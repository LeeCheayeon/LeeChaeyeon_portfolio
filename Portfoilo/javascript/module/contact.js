import pageMaker from "./pageMaker.js";


function contactTyping(target, array){
  target.innerHTML = pageMaker(array,"div");

  target.children[1].innerHTML = `
  <p>
  <span class="typed-text"></span><span class="cursor"></span></p>
  `

  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  const typingBox =document.querySelector("#container");
  const textArray = ["안녕하세요.", "호랑이 항아리"]
  //콘솔인식됨 =================================
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  //=================================
  let textArrayIndex = 0;
  let charIndex = 0;
  
  //=================================
  // function type(){
  //   if(Cindex < textArr[Tindex].length){
  //     // 만약 커런트의 값이 텍스트배열의 인덱스의 랭스값보다 작다면
  //     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
  //       typeText.textContent += textArr[Tindex].charAt(Cindex);
  //       Cindex++;
  //       setTimeout(type, typingDelay);
  //     }else{
  //       cursorSpan.classList.remove("typing");
  //       setTimeout(erase, newTextDelay);
  //     }
  //   }
  //   function erase(){
  //     if(Cindex>0){
  //       if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
  //       typeText.textContent = textArr[Tindex].substring(0,Cindex-1);
  //       Cindex--;
  //       setTimeout(erase, erasingDelay);
  //     }else{
  //       cursorSpan.classList.remove("typing");
  //       Tindex++;
        
  //       if(Tindex>=textArr.length) Tindex=0;
  //       setTimeout(type, typingDelay + 1100);
  //     }
  //   }

  //   document.addEventListener("DOMContentLoaded", function(){
  //     if(textArr.length) setTimeout(type, newTextDelay + 250);
  //   });

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
  
  typingBox.addEventListener("mouseover", function() { 
    // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
  }, { once : true});
  }

export default contactTyping;

// { once : true} : 이벤트 한번만 실행 