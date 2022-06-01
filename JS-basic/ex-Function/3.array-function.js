// findSmallestElement 함수를 구현하세요

//  findSmallestElement 의 arr 인자는 숫자 값으로만 
// 이루어진 배열입니다.

// arr 의 값들 중 가장 작은 값을 리턴 해주세요.

// 만일 arr 가 비어있으면 0을 리턴해주세요.

// 예를 들어, 다음과 같은 배열이 인자(input)으로 
// 들어왔다면 1이 리턴 되어야합니다.

// 이용되는 배열
// [100,200,3,0,2,1]

function findSmallestElement(arr){
  //array가 비어 있다면 
  if(arr.length == 0){
    return 0
  } 
  let result = arr[0]
  for(let i=1; i < arr.length; i++){
    if(result > arr[i]){
      result = arr[i]
    }
  }

  return result
}

console.log(findSmallestElement([100,200,3,50,2,1]));

