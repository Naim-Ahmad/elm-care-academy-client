import logo from '@/assets/ইলম-কেয়ার-বিডি.png';
import { Typography } from "@/components/MaterialTailwind";
import Image from "next/image";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const LINKS = [
  {
    title: "কোর্স সমূহ",
    items: ["ফ্রি কোর্স", "প্রিমিয়াম কোর্স", "একাডেমীক টিউশন"],
  },
  {
    title: "পেজ",
    items: ["হোম", "কোর্স", "শিক্ষকবৃন্দ", "পরিচয়", "যোগাযোগ"],
  },
  {
    title: "কোর্স রিসোর্স",
    items: ["তাজবিদ শিক্ষা কোর্স", "নাহু সরফ কোর্স", "মান্তেক কোর্স", "ফারায়েয কোর্স"],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full mt-10">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Image src={logo} alt="ইলম কেয়ার বিডি" className='w-32 md:w-40' />
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">ইলম কেয়ার একাডেমী</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href="https://www.facebook.com/ilmcarebd" className="opacity-80 transition-opacity hover:opacity-100">
              <FaFacebook />
            </Typography>
            <Typography as="a" href="https://api.whatsapp.com/send?phone=+8801978951953" className="opacity-80 transition-opacity hover:opacity-100">
              <FaWhatsapp />
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <BiLogoGmail />
            </Typography>
            <Typography as="a" href="https://www.youtube.com/@ilmcarebd" className="opacity-80 transition-opacity hover:opacity-100">
              <FaYoutube />
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaTwitter />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}