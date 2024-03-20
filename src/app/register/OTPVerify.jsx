import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Input,
  Typography
} from "@material-tailwind/react";
import { useState } from "react";

export default function OTPVerify({ confirmObj, open, data, openHandler: handleOpen }) {
  const { phone } = data;
  const [verifyCode, setVerifyCode] = useState('')
  const [error, setError] = useState('')


  const verifyPhone = () => {
    setError('')
    confirmObj.confirm(verifyCode).then(res => {
      handleOpen()
      console.log(res)
    }).catch(err => {
      setError("আপনার কোড ভুল হয়েছে")
    })
  }

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <div id="recaptcha" className="text-center">
            <Typography as="h2" variant="h3" color="blue-gray"> ওটিপি যাচাই </Typography>
            <Typography variant="paragraph" color="black"> <stron className="font-bold">{phone}</stron> এই নাম্বারে যাচাইকরণ কোড পাঠান হয়েছে। দয়া করে প্রবেশ করান</Typography>
          </div>
          <div className="flex gap-3 justify-center">
            <div>
              <div className="relative flex w-42 max-w-[14rem] ">
                <Input
                  containerProps={{
                    className: "min-w-0",
                  }}
                  value={verifyCode}
                  onChange={(e) => setVerifyCode(e.target.value)}
                  className={` ${error ? "!border-t-red-400 focus:!border-t-red-900": "!border-t-blue-gray-200 focus:!border-t-gray-900"}  w-full placeholder:opacity-100 pr-20`}
                  error={error}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Button
                  size="sm"
                  onClick={verifyPhone}
                  className="!absolute right-1 top-1 rounded"
                >
                  যাচাই করুন
                </Button>

              </div>
              {
                error ? <Typography
                  variant="small"
                  className="mt-2 font-normal text-center"
                  color="red"
                >
                  {error}
                </Typography> : null
              }
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>

        </DialogFooter>
      </Dialog>
    </>
  );
}