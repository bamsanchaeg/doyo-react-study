const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const cellStyle = (isOdd) => ({
  padding: 10,
  color: isOdd ? "blue" : "black",
  margin: 5,
  border: "1px solid #ccc",
});

export default function MiltipleNine() {
  return (
    <div style={wrapperStyle}>
      {num.map((n) => {
        if (n >= 2 && n !== 5) {
          return (
            <div key={n} style={cellStyle(n % 2)}>
              {num.map((m) => (
                <div key={`${n}-${m}`}>
                  {n} x {m} = {n * m}
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
