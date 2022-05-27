// 변수 선언 
let handleId = 0;
const h1 = document.getElementById('time')
const go = document.getElementById('go')
const stop = document.getElementById('stop')



// 검색해서 추가 학습 해야하는 것 
// 시간에 관련된 메소드들 
// new Date() , const hour~ const seconds , 
// const time = `${hour}` 이게 뭐지? <- 탬플릿 리터럴로 
// 문자열을 만들어주는것. 탬플릿 리터럴 다시 학습하기 
// 브라우저 객체의 메소드? 
// setInterval() 


// 현재 시간 읽어오는 기능 만들기
function getTime() {
  const date = new Date()
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = `${hour}:${minutes}:${seconds}`
  h1.textContent = time;
}

getTime()

//go 버튼을 누르면 시간이 가고 , stop을 누르면 시간이 멈춤
//'click' EventHandler를 사용해야함. 

//go 버튼을 클릭하면 시간이 1초마다 1씩 증가함  
go.onclick = function() {
  if(handleId == 0) {
    handleId = setInterval(getTime, 1000)
  }
}


//Stop을 누르면 시간이 멈춤
stop.onclick = function(){
  clearInterval(handleId)
  handleId = 0;
}