import FormField from "@components/FormField";
import TextInput from "@components/FormInput/TextInput";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const { control } = useForm();

  return (
    <div>
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
          name="password"
          label="Password"
          control={control}
          type="password"
          Component={TextInput}
        />
        <Button variant="contained" className="mt-4">
          Sign Up
        </Button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login">
          <span className="text-[#246AA3]"> Sign in instead</span>
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
