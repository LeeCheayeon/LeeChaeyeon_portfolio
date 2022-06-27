import pageMaker from "./pageMaker.js";


function contactTyping(target, array){
  target.innerHTML = pageMaker(array,"div");

  console.log(target.children[1].innerHTML);
  target.children[1].innerHTML = `
  <h1 class="typeText"><span class="cursor"></span></h1>
  `

  const textArr = ["요안녕하세요.", "호랑이 항아리"]
  const typeText = document.querySelector(".typeText");
  const cursor = document.querySelector(".cursor");
  console.log(typeText);
  console.log(cursor);
  //=================================
  let typingDelay = 200;
  let erasingDelay = 100;
  let newTextDelay = 2000;
  //=================================
  let Tindex = 0;
  let Cindex =0;

  function type(){
    if(Cindex < textArr[Tindex].length){
      // 만약 커런트의 값이 텍스트배열의 인덱스의 랭스값보다 작다면
      if(!cursor.classList.contains("typing"))
        cursor.classList.add("typing");
        typeText.textContent += textArr[Tindex].charAt(Cindex);
        Cindex++;
        setTimeout(type, typingDelay);
      }else{
        cursor.classList.remove("typing");
        setTimeout(erase, erasingDelay);
      }
    }
    function erase(){
      if(Cindex>0){
        if(!cursor.classList.contains("typing"))
        cursor.classList.add("typing");
        typeText.textContent = textArr[Tindex].substring(0,Cindex-1);
        Cindex--;
        setTimeout(erase, erasingDelay);
      }else{
        cursor.classList.remove("typing");
        Tindex++;
        
        if(Tindex>=textArr.length)
        Tindex=0;
        setTimeout(type, typingDelay+1100);
      }
    }

    document.addEventListener("DOMContentLoaded", function(){
      if(textArr.length) setTimeout(type, newTextDelay+250);
    });

  }


  // function type() {
  //   if (charIndex < textArray[textArrayIndex].length) {
  //     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
  //     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
  //     charIndex++;
  //     setTimeout(type, typingDelay);
  //   } 
  //   else {
  //     cursorSpan.classList.remove("typing");
  //     setTimeout(erase, newTextDelay);
  //   }
  // }
  
  // function erase() {
  //   if (charIndex > 0) {
  //     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
  //     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
  //     charIndex--;
  //     setTimeout(erase, erasingDelay);
  //   } 
  //   else {
  //     cursorSpan.classList.remove("typing");
  //     textArrayIndex++;
  //     if(textArrayIndex>=textArray.length) textArrayIndex=0;
  //     setTimeout(type, typingDelay + 1100);
  //   }
  // }
  
  // document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  //   if(textArray.length) setTimeout(type, newTextDelay + 250);
  // });


export default contactTyping;