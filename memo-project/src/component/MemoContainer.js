function MemoContainer({ memo, setMemo }) {
  return (
    <div className="MemoContainer">
      <div>
        <input
          type="text"
          className="MemoContainer_title"
          value={memo.title}
          //e는 이벤트 발생이다
          onChange={(e) => {
            setMemo({
              ...memo,
              title: e.target.value,
              updatedAt: new Date().getTime(),
            });
          }}
        />
      </div>
      <div>
        <textarea
          className="MemoContainer_content"
          value={memo.content}
          onChange={(e) => {
            setMemo({
              ...memo,
              content: e.target.value,
              updatedAt: new Date().getTime(),
            });
          }}
        />
      </div>
    </div>
  );
}

export default MemoContainer;
