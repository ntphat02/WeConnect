import React from "react";
import FormField from "@components/FormField";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import OTPinput from "@components/FormInput/OTPinput";
const OTPVerifyPage = () => {
  const { control } = useForm();
  return (
    <div>
      <p className="mb-5 text-center text-2xl font-bold">
        Two-Step Verification 💬
      </p>
      <form action="" className="flex flex-col gap-4">
        <FormField
          name="email"
          label="Verify OTP"
          control={control}
          Component={OTPinput}
        />
        <Button variant="contained" className="mt-4">
          Verify my account
        </Button>
      </form>
      <p className="mt-4 text-center">
        Didn't receive the code?
        <Link to="/register">
          <span className="text-[#246AA3]">Resend</span>
        </Link>
      </p>
    </div>
  );
};

export default OTPVerifyPage;
