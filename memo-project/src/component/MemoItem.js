function MemoItem({ children, onClick, isSelected }) {
  //클릭 이벤트 전달
  return (
    <div
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default MemoItem;
