
const pageArr = [1,2,3,4,5,6];
const pageData = ["One", "Two", "Three", "Four", "Five", "Six"]
const colorArr = ["#333", "#d4d4d4", "#ff6666", "#333", "#d4d4d4", "#ff6666"]
// 만들 총 페이지 수? 

//root 요소 식별
const root =document.getElementById("root");

function crateElem(backColor, idName, tagName){
  const odject ={
    style : backColor,
    idName : idName,
    tagName : tagName
  }

  return `
  <${odject.tagName} id="${odject.idName}" style = "background-color : ${odject.style}">${idName}</${odject.tagName}>
  `;
}

//pageData만큼 페이지 생성
function pageMaker(array, tagname, backColor){
  let result = '';
  array.forEach((value) => {
  //   result += `<${tagname} id="${value}">${value}-${index}</${tagname}>`
  result += crateElem(backColor,value,tagname);
  });
  return result;
};

// 오류 예방으로 윈도우 로드 
window.addEventListener("load", function(){
  //root.innerHTML에 pageMaker생성 
  this.document.body.style.padding = 0;
  this.document.body.style.margin = 0; 
  root.innerHTML = pageMaker(pageData,"div","#ff6666");

  // 생성된 페이지 요소 식별
  const pages = Array.from(this.document.querySelectorAll("#root>div"));
  // console.log(pages);
  pages.forEach((value,index)=>{
    // console.log(value.id);
    value.style.width = "10vw";
    value.style.height = "10vw";
//     value.style.backgroundColor = colorArr[index];
//     if(value.id !== "One"){
//       //맨처음 보여야하는 One 페이지를 제외하고 'none' 처리
//       value.style.display = "none";
    // }
  });
  root.addEventListener("click",function(event){
    let elem = document.getElementById(`${event.target.id}`);
    console.log(elem.id);
    console.log(event.target.id);
  
  if(event.target.id === elem.id && elem.id !== "root"){
    // root를 만약 잘못 클릭하면 pages가 전부 사라지므로 조건을 더 붙였다.
    console.log("같음");
    event.target.style.display = "block";
    pages.forEach((value)=>{
      if(value.id !== event.target.id){
        value.style.display = "none";
      }
    });
    if(elem.id === "Two"){
      event.target.style.backgroundColor = "#333";
    }
  }
});
})