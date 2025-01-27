import "./CourseCard.css";

function CourseCard({ img, tags, title, startPrice, types }) {
  return (
    <div className="CourseCard">
      <div className="cover">
        <img src={img}></img>
      </div>
      <div className="info">
        <ul className="tags">
          {tags.map((item) => (
            <li className="tag">{item}</li>
          ))}
        </ul>
        <h4 className="name">{title}</h4>
        <div className="prices">
          //toLocaleString은 3자리수마다 컴마 찍는 기능
          <span className="monthly-price">
            월 {startPrice.toLocaleString()}원 부터
          </span>
          <ul className="types">
            {types.map((item, i) => (
              <li key={i} className="type">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
