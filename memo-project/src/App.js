import { useState } from "react";
import "./App.css";
import MemoContainer from "./component/MemoContainer";
import SideBar from "./component/SideBar";
//모든 컴포넌트들의 root 컴포넌트
//컴포넌트가 변경되면(상태(State,Props)) 화면을 다시 그린다
function App() {
  const [memos, setMemos] = useState([
    {
      title: "memo 1",
      content: "this is memo 1",
      createdAt: 164122502265, //시간 값
      updatedAt: 164122502265, //t시간 값
    },
    {
      title: "memo 2",
      content: "this is memo 2",
      createdAt: 164122502265, //시간 값
      updatedAt: 164122502265, //t시간 값
    },
  ]);

  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;
