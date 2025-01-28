import { useEffect, useState } from "react";

// 가능마운트 → 바로 자기 자신을 실행
//  → 반환된 JSX 값을 DOM에 반영
//  → useEffect라는 Hook을 실행
//  → 클래스형 컴포넌트의 componentDidMount, componentDidUpdate,componentWillUnmount 메소드 = useEffect hook으로 통일→ 데이트 할 때는 다시 함수를 실행
//  → 그 JSX를 DOM에 반영 → useEffect hook을 실행언마운트 시엔 useEffect 함수만 마지막으로 실행

function FunctionalComponent() {
  console.log("[Function] Beginning");
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("[Function] useEffect []");

    return () => {
      console.log("[Function] useEffect return []");
    };
  }, []);

  useEffect(() => {
    console.log("[Function] useEffect [value]");

    return () => {
      console.log("[Function] useEffect return [value]");
    };
  }, [value]);

  console.log("[Function] End");

  return (
    <div>
      <h1>FunctionComponent</h1>
      <h1>value: {value}</h1>
      <button
        onClick={() => {
          setValue((state) => state + 1);
        }}
      >
        Increase value
      </button>
    </div>
  );
}

export default FunctionalComponent;
