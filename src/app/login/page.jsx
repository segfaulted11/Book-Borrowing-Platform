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

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Login successful!");
    router.push("/");
  };

  const handleLoginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md bg-neutral-800 text-neutral-content rounded-xl p-6 sm:p-8 shadow-md">

        <h2 className="font-bold text-2xl sm:text-3xl text-center mb-6">
          Login Your Account
        </h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              className="input input-bordered w-full text-black"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                Email is required
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <div className="relative">
              <input
                type={showPassword ? "password" : "text"}
                className="input text-black input-bordered w-full pr-10"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                Password is required
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="space-y-3 pt-2">

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>

            <button
              type="button"
              onClick={handleLoginWithGoogle}
              className="btn btn-outline w-full"
            >
              Login with Google
            </button>

          </div>
        </form>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            className="text-red-500 underline font-semibold"
            href="/register"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;