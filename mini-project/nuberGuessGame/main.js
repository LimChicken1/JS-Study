// 로직 
//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다! 출력
//랜덤 번호 < 유저번호 Down!! 
//랜덤번호가 > 유저번호 Up!! 
// Reset버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측불가, 버튼 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다 기회를 깍지 않는다 
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다 , 기회를 깍지 않는다 


//1.랜덤번호 지정
let computerNum = 0;
// Button 을 가져오고 변수에 담기
let playButton = document.getElementById("Play-Button")
// 유저 번호 가져오기 input tag 가져오기 
let userInput = document.getElementById("user-Input")
// 결과값 가져오기 
let resultArea = document.getElementById("result-Area")
// 리셋 버튼 가져오기 
let resetButton =document.getElementById("reset-button")
// 남은 기회 변수 선언
let chances = 5;
// 게임 오버 변수 
let GameOver = false;
// 남은 기회 html로 띄워주기?
let chanceArea = document.getElementById("chance-area")
// 유저가 입력한 값 배열로 저장하기
let historry = [];

//go 라는 버튼에 click 이벤트 넣기
playButton.addEventListener('click',play)
//resetButton에 click 이벤트 넣기 
resetButton.addEventListener('click',reset)

//랜덤 함수 선언 
function pickRandomNum(){
  //Math.random 0~1사이 숫자를 반환(소수점)
  //Math.floor 소수점을 버려주는 함수 
  //단, 프로그램은 0~99까지 표현하기 때문에 100을 표현하고싶다면 +1을 붙여준다
  computerNum = Math.floor(Math.random()*100)
  console.log('정답',computerNum);
}
pickRandomNum();


//2.유저가 번호를 입력한 값을 가져온다 
function play(){
  let userValue = userInput.value
  // 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다 기회를 깍지 않는다
  if(userValue <1 || userValue > 100){
    resultArea.textContent = "1과 100사이 숫자를 입력해주세요"
    return;
  } 
 // 유저가 이미 입력한 숫자를 또 입력하면 알려준다
  if(historry.includes(userValue)){
    resultArea.textContent= "이미 입력한 숫자입니다 다른 숫자를 입력하세요"
    return;
  }
   // play를 누를때마다 chances가 1씩 줄어든다 
  chances -- ;
  chanceArea.textContent = `남은기회:${chances}번`;
  console.log("chance",chances);
  if(userValue < computerNum){
    resultArea.textContent = "Up!!!"
  } else if(userValue > computerNum){
    resultArea.textContent = "Down!!"
  } else {
    resultArea.textContent = "정답입니다.!"
  }
  //유저가 입력한 값을 배열로 저장하기 
  historry.push(userValue)
  
//4. 5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측불가, 버튼 disable)
  if(chances < 1){
    GameOver = true;
  }

  if(GameOver == true){
    playButton.disabled = true;
  }
}


//3. reset function 만들기 
function reset(){
  // user-input창이 깨끗하게 정리 되고 
  userInput.value = ""
  // 새로운 번호(정답) 생성되야함
  pickRandomNum()
  //up , down, 정답입니다 텍스트 바꿔주기 
  resultArea.textContent = "결과값이 여기 나옵니다"
}


