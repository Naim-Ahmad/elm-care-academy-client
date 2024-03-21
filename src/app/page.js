import Banner from "./pages/home/Banner";
import FreeCourseContainer from "./pages/home/freeCourses/CourseContainer";
import CourseContainer from "./pages/home/premiumCourses/CourseContainer";
import WhyChooseUs from "./pages/home/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <header>
        <Banner />
      </header>
      <main>
        <FreeCourseContainer />
        <CourseContainer />
        <WhyChooseUs />
      </main>
      <footer></footer>
    </>
  );
}
