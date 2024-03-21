import Banner from "@/app/home/Banner";
import FreeCourseContainer from "@/app/home/freeCourses/CourseContainer";
import CourseContainer from "@/app/home/premiumCourses/CourseContainer";
import WhyChooseUs from "@/app/home/whyChooseUs/WhyChooseUs";

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
