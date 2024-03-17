"use client";
import animationData from "@/assets/salam.json";
import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Spinner,
  Typography,
} from "@/components/MaterialTailwind";
import Lottie from "lottie-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Container from "../pages/shared/Container";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <div className="flex mx-auto flex-col-reverse lg:flex-row py-6 justify-between gap-10">
        <Card color="transparent" shadow={false} className="flex-1">
          <Typography
            variant="h1"
            color="blue-gray"
            className={`text-center text-3xl sm:text-5xl`}
          >
            রেজিস্টার করুন
          </Typography>
          <Typography color="gray" className="mt-1 font-normal text-center">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form onSubmit={handleSubmit(handleRegister)} className="mt-8 mb-2">
            <div className="mb-1 flex flex-col gap-6 w-full">
              <Typography variant="h6" color="blue-gray" className="-mb-6">
                নাম লিখুন
              </Typography>
              <Input
                size="lg"
                placeholder="মুহাম্মাদ"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full placeholder:opacity-100"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                error={errors?.password?.type === "required"}
                {...register("name", { required: true })}
              />
              {errors && errors?.name?.type === "required" && (
                <Typography
                  variant="small"
                  className="-mt-5 font-normal"
                  color="red"
                >
                  নাম আবশ্যক
                </Typography>
              )}

              <Typography variant="h6" color="blue-gray" className="-mb-6">
                ফোন নাম্বার লিখুন
              </Typography>
              <Input
                size="lg"
                type="number"
                variant="outlined"
                placeholder="+8801XXXXXXXX"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full placeholder:opacity-100"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                error={errors?.password?.type === "required"}
                {...register("phone", { required: true })}
              />
              {errors && errors?.password?.type === "required" && (
                <Typography
                  variant="small"
                  className="-mt-5 font-normal"
                  color="red"
                >
                  ফোন নাম্বার আবশ্যক
                </Typography>
              )}

              <Typography variant="h6" color="blue-gray" className="-mb-6">
                ইমেইল লিখুন
              </Typography>
              <Input
                size="lg"
                variant="outlined"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full placeholder:opacity-100"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                error={errors?.password?.type === "required"}
                {...register("email", { required: true })}
              />
              {errors && errors?.password?.type === "required" && (
                <Typography
                  variant="small"
                  className="-mt-5 font-normal"
                  color="red"
                >
                  ইমেইল আবশ্যক
                </Typography>
              )}

              {/* ===========   password    =============*/}

              <Typography variant="h6" color="blue-gray" className="-mb-6">
                পাসওয়ার্ড লিখুন
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 placeholder:opacity-100"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                error={errors?.password?.type === "required"}
                {...register("password", { required: true })}
              />
              {errors && errors?.password?.type === "required" && (
                <Typography
                  variant="small"
                  className="-mt-5 font-normal"
                  color="red"
                >
                  পাসওয়ার্ড আবশ্যক
                </Typography>
              )}

              <Typography variant="h6" color="blue-gray" className="-mb-6">
                আপনি ছাত্র/শিক্ষক?
              </Typography>
              <Select
                size="lg"
                variant="outlined"
                name="bloodGroup"
                onChange={(v) => setBloodGroup(v)}
                required
              >
                <Option value="ছাত্র">ছাত্র</Option>
                <Option value="শিক্ষক">শিক্ষক </Option>
              </Select>
            </div>

            <Button disabled={loading} type="submit" className="mt-6" fullWidth>
              {loading ? (
                <div className="flex justify-center">
                  {" "}
                  <Spinner />
                </div>
              ) : (
                "রেজিস্টার করুন"
              )}
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              আপনার কি অ্যাকাউন্ট আছে?{" "}
              <Link href="/login" className="font-medium text-gray-900">
                লগইন করুন
              </Link>
            </Typography>
          </form>
        </Card>
        <div
          className="hidden
         md:block min-w-[300px] lg:min-w-[500px] mb-6 mx-auto lg:m-auto flex-1"
        >
          <Lottie
            animationData={animationData}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>
      </div>
    </Container>
  );
}
