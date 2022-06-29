let nuri = 100;

// 1. 1초뒤에 누리가 +10 덧셈이 되고 콘솔에 출력
// 2. 1초뒤에 누리가 -30 뺄셈이 되고 콘솔에 출력
// 총 2초간 두번의 계산을 진행시킨다. 

function one(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      nuri = nuri + 10;
      console.log(nuri);
      resolve(nuri);
    }, 1000)
  })
}

one()
.then(function(data){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      nuri = nuri - 30;
      console.log(nuri);
    },1000)
  });
});