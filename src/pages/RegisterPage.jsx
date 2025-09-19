import FormField from "@components/FormField";
import TextInput from "@components/FormInput/TextInput";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { control } = useForm();
  return (
    <div className="flex h-screen items-center justify-center bg-[#F8F7FA]">
      <div className="h-fit w-[450px] bg-white px-8 py-10">
        <img src="/weconnect-logo.png" className="mx-auto mb-6" />
        <p className="mb-5 text-center text-2xl font-bold">Register</p>
        <form action="" className="flex flex-col gap-4">
          <FormField
            name="fullName"
            label="Full Name"
            control={control}
            Component={TextInput}
          />
          <FormField
            name="email"
            label="Email"
            control={control}
            Component={TextInput}
          />
          <FormField
            name="passWord"
            label="PassWord"
            control={control}
            type="password"
            Component={TextInput}
          />
          <Button variant="contained" className="mt-4">
            Sign Up
          </Button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? Sign in instead
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
