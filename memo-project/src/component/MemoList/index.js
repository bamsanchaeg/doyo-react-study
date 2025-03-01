//memos는 배열이므로 title 속성을 직접 참조할 수 없다.

import MemoItem from "../MemoItem";

// 대신, map 콜백 함수의 매개변수 memo에서 title을 참조해야 한다.
function MemoList({
  memos,
  setSelectedMemoIndex,
  selectedMemoIndex,
  deleteMemo,
}) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClickItem={() => {
            setSelectedMemoIndex(index);
          }}
          onClickDelete={(e) => {
            deleteMemo(index);
            e.preventDefault(); // Prevents the event from bubbling up
            e.stopPropagation(); // Prevents the event from reaching parent elements
          }}
          isSelected={index === selectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;
