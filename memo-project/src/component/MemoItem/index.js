import "./index.css";

function MemoItem({ children, onClickItem, onClickDelete, isSelected }) {
  //클릭 이벤트 전달
  return (
    <div
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onClickItem}
    >
      {children}
      <button className="MemoItem__deleted" onClick={onClickDelete}>
        x
      </button>
    </div>
  );
}

export default MemoItem;
