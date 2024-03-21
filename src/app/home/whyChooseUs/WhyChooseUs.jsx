import Container from "@/app/shared/Container";
import SectionHeader from "@/app/shared/SectionHeader";
import experiencedTeacher from '@/assets/images/images578.jpeg';
import porda from '@/assets/images/images667.jpeg';
import onlineQuran from '@/assets/images/online-quran-teacher-728x427-2-1024x597.webp';
import { Typography } from '@/components/MaterialTailwind';
import Image from "next/image";

const ourFeatures = [
    {
        title: 'মেয়েদের জন্য পরিপূর্ণ পর্দা',
        description: '',
        img: porda
    },
    {
        title: 'অভিজ্ঞ শিক্ষক',
        description: '',
        img: experiencedTeacher
    },
    {
        title: 'ছাত্রের মান অনুযায়ী এগিয়ে নেওয়া',
        description: '',
        img: porda
    },
    {
        title: 'পরিপূর্ণ স্বাধীন',
        description: '',
        img: experiencedTeacher
    },
]

export default function WhyChooseUs() {

    return (
        <Container>
            <SectionHeader title="আমাদের বিশিষ্ট সমূহ" description="" />

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-10 my-5 lg:my10">

                <div className="md:col-span-2 lg:col-span-1">
                    {
                        ourFeatures.slice(0, 2).map(feature => {
                            const { title, img } = feature;
                            return (
                                <div key={title} className="flex flex-col lg:flex-row text-center lg:text-left mb-12 gap-6">
                                    <div className="border-4 border-deep-purple-500 overflow-hidden mx-auto lg:w-[100px] flex justify-center align-center w-[70px] h-[70px] lg:h-[55px] rounded-[50%]">
                                        <Image src={img} alt={title} />
                                    </div>
                                    <div className="lg:text-left">
                                        <Typography as="h3" variant='h3' className="text-2xl lg:text-left font-extrabold"> {title} </Typography>
                                        <span className="w-[100px] mx-auto lg:mx-0 h-[2px] bg-deep-purple-500 my-3 block"></span>
                                        <p className="text-base lg:text-left  font-medium">Professional employees are there for you to pick the most amazing and fresh
                                            fruits.</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="order-first md:order-first md:col-span-4 lg:col-span-1 lg:order-none">
                    <Image src={onlineQuran} alt="" className='object-cover' />
                </div>

                <div className="md:col-span-2 lg:col-span-1">
                    {
                        ourFeatures.slice(2).map(feature => {
                            const { title, img } = feature;
                            return (
                                <div key={title} className="flex flex-col lg:flex-row-reverse mb-12 gap-6">
                                    <div className="border-4 border-deep-purple-500 overflow-hidden mx-auto lg:w-[100px] flex justify-center align-center w-[70px] h-[70px] lg:h-[55px] rounded-[50%]">
                                        <Image src={img} alt={title} />
                                    </div>
                                    <div className="text-center relative lg:text-right">
                                        <Typography as="h3" variant='h3' className="text-2xl font-extrabold">{title}</Typography>
                                        <span className="w-[100px] mx-auto lg:mx-0 h-[2px] bg-deep-purple-500 my-3 block lg:absolute lg:right-0"></span>
                                        <p className="text-base mt-5 font-medium">Professional employees are there for you to pick the most amazing and fresh
                                            fruits.</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}