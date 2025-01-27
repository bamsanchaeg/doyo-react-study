import CourseCard from "./CourseCard";

//원래는 App에서 시도된다고 생각해야한다.
function main() {
  return (
    <div style={{ padding: 30 }}>
      <CourseCard
        img="https://dst6jalxvbuf5.cloudfront.net/media/images/Course/cover_image/210909_191531/23.png"
        tags={["발표", "패키지", "최대할인"]}
        title="방구석 리액트 패키지"
        startPrice={349000}
        types={["동영상 강의"]}
      />
    </div>
  );
}

export default App;
