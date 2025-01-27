// import { useState } from "react";

//userState 와 같은 Hooks는 React 버전 16.8부터 등장한다
//이외에는 클래스 형태로 컴포넌트를 구성하는 경우가 있다.
export default function State() {
  const [value, setValue] = useState(0); // 상태 초기화(초기값을 넣어줘야한다.)

  //setter를 통해 값이 변경되면 다시 리렌더링이 되어 setValue가 바뀐다.
  const handleIncrease = () => {
    //값이 변경되면 새로운 값이 업데이트 되면서 새로운 JSX파일이 생성된다
    //(처음부터 렌더링 된것이 다시 렌더링 되면서 숫자 업데이트)
    setValue((prevValue) => prevValue + 1); // 상태 업데이트
  };

  const handleReset = () => {
    setValue(0); // 상태 초기화
    console.log("Value Reset:", 0);
  };

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={handleIncrease}>Increase Value</button>
      <button onClick={handleReset}>Reset Value</button>
    </div>
  );
}
