import image from "@/assets/images/banner-6.jpg";
import Image from "next/image";
import Container from "../shared/Container";
import SectionHeader from "../shared/SectionHeader";

export default function AboutPage() {
  return (
    <Container>
      <SectionHeader title="আমাদের পরিচয়" />

      <div className="flex flex-col lg:flex-row items-center gap-10 py-3 lg:py-6">
        <div data-aos="fade-right" className="flex-1">
          <Image className="rounded-lg" src={image} alt="About us" />
        </div>
        <div data-aos="fade-left " className="flex-1 space-y-6">
          <h1 className="text-2xl font-bold text-[#403F3F]">Company History</h1>
        </div>
      </div>
      <div className="flex gap-10 flex-col lg:flex-row-reverse items-center mt-16">
        <div data-aos="fade-up" className="flex-1">
          <Image className="rounded-lg" src={image} alt="About us" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-mirror="true"
          className="flex-1 flex-col lg:flex-row space-y-6"
        >
          <h1 className="text-2xl font-bold text-[#403F3F]">
            Mission and vision
          </h1>
        </div>
      </div>
    </Container>
  );
}
