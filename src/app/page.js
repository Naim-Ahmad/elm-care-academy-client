import Banner from "./pages/home/Banner";
import CourseContainer from "./pages/home/course/CourseContainer";

export default function Home() {
  return (
    <>
      <header>
        <Banner />
      </header>
      <main>
        <CourseContainer />
      </main>
      <footer></footer>
    </>
  );
}
