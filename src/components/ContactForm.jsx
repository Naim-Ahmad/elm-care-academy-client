"use client"
import {
  Button,
  Input,
  Textarea,
  Typography
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";

export default function ContactForm() {

  const { handleSubmit, register, formState: { errors } } = useForm()

  const handleForm = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleForm)} className="mt-8 mb-2">
      <div className="mb-3 flex flex-col gap-6 w-full">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Name
        </Typography>
        <Input
          size="lg"
          placeholder="Name"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          error={errors?.password?.type === "required"}
          {...register("user_name", { required: true })}
        />
        {errors && errors?.password?.type === "required" && (
          <Typography
            variant="small"
            className="-mt-5 font-normal"
            color="red"
          >
            This field is required
          </Typography>
        )}

        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Email
        </Typography>
        <Input
          size="lg"
          variant="outlined"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          error={errors?.password?.type === "required"}
          {...register("user_email", { required: true })}
        />
        {errors && errors?.password?.type === "required" && (
          <Typography
            variant="small"
            className="-mt-5 font-normal"
            color="red"
          >
            This field is required
          </Typography>
        )}

        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Message
        </Typography>

        <Textarea
          size="lg"
          placeholder="Your Message"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          error={errors?.password?.type === "required"}
          {...register("user_message", { required: true })}
        />
        {errors && errors?.password?.type === "required" && (
          <Typography
            variant="small"
            className="-mt-5 font-normal"
            color="red"
          ></Typography>
        )}
      </div>

      <Button type="submit">
        Send Message
      </Button>
    </form>
  )
}