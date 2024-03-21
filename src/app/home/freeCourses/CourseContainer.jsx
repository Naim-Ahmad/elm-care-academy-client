import Container from "@/app/shared/Container";
import CourseCard from "@/app/shared/CourseCard";
import SectionHeader from "@/app/shared/SectionHeader";
import { Button } from "@/components/MaterialTailwind";

export default function FreeCourseContainer() {

  return (
    <Container>
      <SectionHeader title="ফ্রি কোর্স সমূহ" 
      description="আমাদের এই ফ্রি কোর্স গুলো থেকে আপনি ব্যাসিক বিষয়গুলো খুব সহজেই শিখে নিতে পারেন"/>

      {/* premium courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
      </div>
      <div className="text-center mt-4">
        <Button variant="outlined">সমস্থ প্রিমিয়াম কোর্স দেখুন</Button>
      </div>
    </Container>
  )
}