import { memo, useCallback, useState } from "react";
import "./App.css";
import MemoContainer from "./component/MemoContainer";
import SideBar from "./component/Sidebar";
import { setItem, getItem } from "./lib/Storage";
import debounce from "lodash.debounce";

const debouncedSetItem = debounce(setItem, 5000);
//모든 컴포넌트들의 root 컴포넌트
//컴포넌트가 변경되면(상태(State,Props)) 화면을 다시 그린다
function App() {
  const [memos, setMemos] = useState(getItem("memo") || []);

  //불변성을 항상 주의하면서 코드를 구현해야한다.
  //객체를 직접적으로 건들지 말고 하나의 배열로 만들어내야함
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0); // 기본값을 첫 번째 메모로 설정

  // 상태를 업데이트하는 함수
  // memos와selectedMemoIndex가 변경되면 함수를 새로 생성해준다
  const setMemo = useCallback(
    (newMemo) => {
      const newMemos = [...memos]; // 배열을 복사
      newMemos[selectedMemoIndex] = newMemo;
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos[selectedMemoIndex] = newMemo;
        debouncedSetItem("memo", newMemos);
        return newMemos;
      }); // 상태 업데이트
    },
    [selectedMemoIndex]
  );

  const addMemo = useCallback(() => {
    setMemos((memos) => {
      const now = new Date().getTime();
      const newMemos = [
        ...memos,
        {
          title: "untitled",
          content: "",
          createdAt: now,
          updatedAt: now,
        },
      ];
      debouncedSetItem("memo", newMemos);
      return newMemos;
    });
    setSelectedMemoIndex(memos.length);
  }, [memos]);

  //불변성 주의
  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        debouncedSetItem("memo", newMemos);
        return newMemos;
      });

      if (index === selectedMemoIndex) {
        // If the deleted memo was the selected one, select the first memo
        setSelectedMemoIndex(0);
      }
    },
    [selectedMemoIndex]
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
