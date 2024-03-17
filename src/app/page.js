import StickyNavbar from "@/app/components/home/Navbar";
import Banner from "./components/home/Banner";
import CourseContainer from "./components/home/course/CourseContainer";

export default function Home() {
  return (
    <>
      <nav>
        <StickyNavbar />
      </nav>
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
