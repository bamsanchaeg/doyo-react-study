//props는 properties의 줄임말
//부모 컴포넌트에서 자식 컴포넌트로 내려주는 데이터이다.
//- 구조분해할당 구문 활용
//- 특정 Props에 기본 값을 지정 가능
// - Pros는 읽기 전용실습코드
export default function Heading(props) {
  if (props.type === "h2") {
    return <h2>{props.children}</h2>;
  }
  return <h1>{props.children}</h1>;
}
