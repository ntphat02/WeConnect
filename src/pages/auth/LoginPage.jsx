import React from "react";
import FormField from "@components/FormField";
import TextInput from "@components/FormInput/TextInput";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const { control } = useForm();
  return (
    <div>
      <p className="mb-5 text-center text-2xl font-bold">Login</p>
      <form action="" className="flex flex-col gap-4">
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
          Sign In
        </Button>
      </form>
      <p className="mt-4 text-center">
        New on our platform?{" "}
        <Link to="/register">
          <span className="text-[#246AA3]">Create an account</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
