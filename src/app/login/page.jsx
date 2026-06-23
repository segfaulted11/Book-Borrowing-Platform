"use client";

import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email,
      password,
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Your login is successful!");
    router.push("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //state for password toggle
  const [showPassword, setShowPassword] = useState(true);

const handleLoginWithGoogle = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
};

  return (
    <div className="bg-base-100 container mx-auto flex justify-center items-center min-h-[60vh]">
      <div className="bg-base-300 rounded-xl flex flex-col p-5 gap-5">
        <h2 className="font-bold text-3xl text-center">Login Your Account</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">What is your Email?</legend>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Type Your name"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <div className="flex justify-between">
              <legend className="fieldset-legend">
                What is your password?
              </legend>
              <div
                className="absolute right-2 top-12  z-50"
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </div>
            </div>

            <input
              type={showPassword ? "password" : "text"}
              name="password"
              className="input"
              placeholder="Type Your password"
              {...register("password", { required: true })}
            />

            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </fieldset>
          <button type="submit" className="btn my-3 w-full btn-soft">
            Login
          </button>
          <button className="btn w-full btn-soft"
          onClick={handleLoginWithGoogle}
          >
            Login With Google
          </button>
        </form>
        <p className="text-center">
          Dont Have An Account?
          <Link className="text-red-500 underline font-bold" href={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
