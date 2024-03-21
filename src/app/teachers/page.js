import profileImage from "@/assets/images/NaimAhmadProfilePic.jpg";
import Container from "../shared/Container";
import SectionHeader from "../shared/SectionHeader";
import ProfileCard from "./ProfileCard";

const teachers = [
  {
    profileImage: profileImage,
    name: "নাইম আহমাদ",
    about: "পরিচয় ",
    specialist: "ফকিহ",
  },
  {
    profileImage: profileImage,
    name: "নাইম আহমাদ",
    about: "পরিচয় ",
    specialist: "ফকিহ",
  },
  {
    profileImage: profileImage,
    name: "নাইম আহমাদ",
    about: "পরিচয় ",
    specialist: "ফকিহ",
  },
  {
    profileImage: profileImage,
    name: "নাইম আহমাদ",
    about: "পরিচয় ",
    specialist: "ফকিহ",
  },
];

export default function Teachers() {
  return (
    <Container>
      <SectionHeader title="আমাদের শিক্ষকবৃন্দ" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pb-10">
        {teachers.map((teacher, ind) => (
          <ProfileCard data={teacher} key={ind} />
        ))}
      </div>
    </Container>
  );
}
