import { memo, useState } from "react";
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
      createdAt: 1641225302265, //시간 값
      updatedAt: 1641225302265, //t시간 값
    },
    {
      title: "memo 2",
      content: "this is memo 2",
      createdAt: 1641225309267, //시간 값
      updatedAt: 1641225309267, //시간 값
    },
  ]);

  //불변성을 항상 주의하면서 코드를 구현해야한다.
  //객체를 직접적으로 건들지 말고 하나의 배열로 만들어내야함
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0); // 기본값을 첫 번째 메모로 설정

  // 상태를 업데이트하는 함수
  const setMemo = (newMemo) => {
    const newMemos = [...memos]; // 배열을 복사
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos); // 상태 업데이트
  };

  const addMemo = () => {
    const now = new Date().getTime();
    setMemos([
      ...memos,
      {
        title: "untitled",
        content: "",
        createdAt: now,
        updatedAt: now,
      },
    ]);
    //마지막의 인덱스
    setSelectedMemoIndex(memos.length);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
