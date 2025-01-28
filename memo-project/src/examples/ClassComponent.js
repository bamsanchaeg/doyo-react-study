// import React, { Component } from "react";

//컴포넌트의 규모가 커지면 코드 재활용성이 떨어져 함수형으로 변환하는 추세, 함수형에 State를 두기 위해 Hooks를 등장시킴
export default class ClassComponent extends Component {
  state = {
    value: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  //resetValue 를 this형으로 반환한다
  resetValue() {
    this.setState({ value: 0 });
  }

  render() {
    return (
      <div>
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
        <button onClick={this.resetValue.bind(this)}>Reset value</button>
      </div>
    );
  }
}
