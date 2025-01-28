import logo from "./logo.svg";
import "./App.css";

//모든 컴포넌트들의 root 컴포넌트
//컴포넌트가 변경되면(상태(State,Props)) 화면을 다시 그린다
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div></div>
      </header>
    </div>
  );
}

export default App;
