import Container from "@/app/shared/Container";
import CourseCard from "../shared/CourseCard";
import SectionHeader from "../shared/SectionHeader";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@/components/MaterialTailwind";

export default function CoursesPage() {
  const data = [
    {
      label: "সমস্থ কোর্স",
      value: "সমস্থ কোর্স",
      desc: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      ),
    },
    {
      label: "প্রিমিয়াম কোর্স",
      value: "প্রিমিয়াম কোর্স",
      desc: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      ),
    },

    {
      label: "ফ্রি কোর্স",
      value: "ফ্রি কোর্স",
      desc: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      ),
    },
  ];
  return (
    <Container>
      <SectionHeader title="আমাদের সকল কোর্স" />

      <div>
        <div>
          <Tabs id="custom-animation" value="html">
            <TabsHeader className="lg:w-1/2 mx-auto">
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </Container>
  );
}
