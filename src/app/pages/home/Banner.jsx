"use client"
import { Button, Carousel, IconButton, Typography } from "@/components/MaterialTailwind";

export default function Banner() {
  return (
    <Carousel
      className="h-[90svh]"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div className="hero flex justify-center items-center">
        <div className="bg-white rounded-xl p-4 text-center">
          <Typography as="h1" variant="h2">
            ইলম কেয়ার বিডি 
          </Typography>
          <Typography>
            ইলম হোক উন্মুক্ত নারী পুরুষ উভয়ের জন্য। 
          </Typography>
          <Button className="mt-3 mx-auto">কোর্স গুলো দেখুন</Button>
        </div>
      </div>

    </Carousel>
  );
}