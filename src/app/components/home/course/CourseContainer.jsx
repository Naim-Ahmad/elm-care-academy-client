import CourseCard from "../../shared/CourseCard";
import SectionHeader from "../../shared/SectionHeader";

export default function CourseContainer() {

  return (
    <section>
      <SectionHeader title="প্রিমিয়াম কোর্স সমূহ" 
      description="আত তাদরীস অনলাইন মাদরাসার এই প্রিমিয়াম কোর্সগুলো করে নিজেকে অন্যান্যদের থেকে একধাপ এগিয়ে রাখতে পারবে। কেননা, এই কোর্সগুলো করিয়েছেন বাংলাদেশের সনামধন্য মাদরাসার অভিজ্ঞ উস্তাদগণ।"/>

      {/* premium courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
      </div>
    </section>
  )
}