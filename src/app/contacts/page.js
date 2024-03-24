import brilliant from "@/assets/images/brilliant.jpeg";
import ContactForm from "@/components/ContactForm";
import { Card, CardBody, Typography } from "@/components/MaterialTailwind";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import Container from "../shared/Container";
import SectionHeader from "../shared/SectionHeader";

export default function Contacts() {
  return (
    <Container>
      <SectionHeader title="যোগাযোগ করুন" />

      <div className="grid md:grid-cols-2 xl:grid-cols-4 md:gap-5 xl:gap-10 text-center">
        <Card className="mt-6">
          <CardBody>
            <Typography className="flex justify-center">
              <Image src={brilliant} alt="brilliant number" className="w-16" />
            </Typography>
            <div className="mt-3">
              <Typography variant="h5" color="blue-gray">
                হেল্প লাইন
              </Typography>
              <Typography variant="lead" className="font-medium">
                09638598696
              </Typography>
            </div>
          </CardBody>
        </Card>
        <Card className="mt-6">
          <CardBody>
            <Typography as="a" href="tel:+8801978951953">
              <FaPhone
                size={40}
                className="mb-5 mx-auto text-deep-purple-500"
                color="deep-purple-500"
              />
            </Typography>
            <div>
              <Typography variant="h5" color="blue-gray">
                ফোন নাম্বার
              </Typography>
              <Typography variant="lead" className="font-medium">
                01978-951953
              </Typography>
            </div>
          </CardBody>
        </Card>
        <Card className="mt-6">
          <CardBody>
            <Typography as="a" href="mailto:ilmcarebd@gmail.com">
              <FaEnvelope
                size={40}
                className="mb-5 mx-auto text-deep-purple-500"
                color="deep-purple-500"
              />
            </Typography>
            <div>
              <Typography variant="h5" color="blue-gray">
                ই-মেইল করুন
              </Typography>
              <Typography variant="lead" className="font-medium">
                ilmcarebd@gmail.com
              </Typography>
            </div>
          </CardBody>
        </Card>
        <Card className="mt-6">
          <CardBody>
            <Typography
              as="a"
              href="https://api.whatsapp.com/send?phone=+8801978951953"
            >
              <FaWhatsapp
                size={40}
                className="mb-5 mx-auto text-deep-purple-500"
                color="deep-purple-500"
              />
            </Typography>
            <div>
              <Typography variant="h5" color="blue-gray" className=" mx-auto">
                হোয়াটসঅ্যাপ
              </Typography>
              <Typography variant="lead" className="font-medium">
                01978-951953
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="flex w-full flex-col md:flex-row gap-16 justify-between items-center">
        <div className="flex-1 w-full">
          <Card className="mt-6 w-full">
            <CardBody>
              <HiOutlineOfficeBuilding
                size={50}
                className="mb-5 text-deep-purple-500"
              />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                হেড অফিস
              </Typography>
              <Typography>
                দারুস সালাম (সুপার মার্কেট), হাটহাজারি, চট্টগ্রাম, বাংলাদেশ
              </Typography>
            </CardBody>
          </Card>
        </div>

        <div className="flex-1 w-full">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
