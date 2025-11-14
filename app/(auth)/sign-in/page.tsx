"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import InputField from "../../../components/forms/InputField";
import { Button } from "../../../components/ui/button";
import FooterLink from "../../../components/forms/FooterLink";

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log("Form Data:", data);
      //   const result = await signUpWithEmail(data);
      //   if (result.success) router.push("/");
    } catch (e) {
      console.error(e);
      toast.error("Sign in failed", {
        description: e instanceof Error ? e.message : "Failed to sign in.",
      });
    }
  };

  return (
    <>
      <h1 className="form-title">Welcome back</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email"
          placeholder="contact@example.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email address is required",
            pattern: {
              value: /^\w+@\w+\.\w+$/,
              message: "Email address is invalid",
            },
          }}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Logging in" : "Log In"}
        </Button>

        <FooterLink
          text="Don't have an account?"
          linkText="Sign up"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SignIn;
