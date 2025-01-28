import React, { Component } from "react";

//클래스형 컴포넌트의 라이프 사이클
/**
 * 의미- 컴포넌트가 실행되는 것 = 컴포넌트의 마운트
 * - 마운트가 되었을 때 constructor 실행
 * → getDerivedStateFromProps 메소드 실행
 * →render 메소드 실행
 * → componentDidMount라는 메소드 실행
 *  - 메소드에서 컴포넌트를 다시 rendering 할 것인지,
 *  이번 상태 변화에 따른 -rerendering은 생략할 것인지를 결정
 *  - 함수가 false를 반환하면 렌더링을 진행하지 않고 true를 반환하면 렌더링을 진행
 *  - rendering이 완료되면 마무리로 componentDidUpdate를 실행컴포넌트가 지워지는 것 = 언마운트16
 */
class ClassComponent2 extends Component {
  state = {
    value: 0,
  };

  // 컴포넌트가 생성될 때 가장 먼저 실행
  constructor(props) {
    console.log("[Class] constructor");
    super(props);
    this.state = {
      value: 0,
    };
  }

  // 컴포넌트가 렌더링 되기 전에 실행
  // (return 값이 false면 렌더링 중단)
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Class] shouldComponentUpdate");
    return true;
  }

  // 컴포넌트의 마운트가 끝나면 실행
  componentDidMount() {
    console.log("[Class] componentDidMount");
  }

  // 컴포넌트가 업데이트 된 후 실행
  componentDidUpdate(prevProps, prevState) {
    console.log("[Class] componentDidUpdate");
  }

  // 컴포넌트 언마운트 되기 직전에 실행
  componentWillUnmount() {
    console.log("[Class] componentWillUnmount");
  }

  render() {
    console.log("[Class] render");

    return (
      <div>
        <h1>ClassComponent</h1>
        <h1>value: {this.state.value}</h1>
        <button
          onClick={() => {
            this.setState((state) => ({
              value: state.value + 1,
            }));
          }}
        >
          Increase value
        </button>
      </div>
    );
  }
}

export default ClassComponent;
