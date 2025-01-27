import ReactDOM from "react-dom";

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const element = (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {num.map((n) => {
      if (n >= 2 && n !== 5) {
        return (
          <div
            key={n} // 각 항목에 key를 추가
            style={{
              padding: 10,
              color: n % 2 ? "blue" : "black",
              margin: 5,
              border: "1px solid #ccc",
            }}
          >
            {num.map((m) => (
              <div key={m}>
                {" "}
                {/* 각 곱셈 항목에 key를 추가 */}
                {n} x {m} = {n * m}
              </div>
            ))}
          </div>
        );
      }
      return null; // 조건에 맞지 않으면 null을 반환
    })}
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
