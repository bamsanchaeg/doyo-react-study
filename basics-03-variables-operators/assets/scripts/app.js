const defaultResult = 0;
let currentResult = defaultResult;

//한 줄로 된 표현식에는 세미콜론을 붙이지만, 중괄호 함수는 세미콜론을 붙이지 않음
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = "(" + defaultResult + " + 10) * 3 / 2 - 1";

// ${} 이 안에 있는 상수의 값 출력
// 쌍따옴표와 따옴표 사용 차이는 상관없는데 통일시켜야한다.
let calcluateionDescriptionTwo = `(${defaultResult} + 10) * 3 / 2 -1`;
let errorMessage = "An error occurred" + "occured!";

outputResult(currentResult, calculationDescription);
