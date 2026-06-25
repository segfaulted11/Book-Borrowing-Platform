"use client";

import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { email, password, name, photo } = data;

    const { error } = await authClient.signUp.email({
      email,
      password,
      name,
      image: photo,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Registration successful!");
    router.push("/login");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md bg-neutral-800 text-neutral-content  rounded-xl p-6 sm:p-8 shadow-md">

        <h2 className="font-bold text-2xl sm:text-3xl text-center mb-6">
          Register Your Account
        </h2>

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">

          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              type="text"
              className="input input-bordered text-black w-full"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                Name is required
              </p>
            )}
          </div>

          {/* Photo */}
          <div>
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>

            <input
              type="text"
              className="input input-bordered text-black w-full"
              placeholder="Enter photo URL"
              {...register("photo", { required: true })}
            />

            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">
                Photo URL is required
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              className="input input-bordered text-black w-full"
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
                className="input input-bordered text-black w-full pr-10"
                placeholder="Enter password"
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

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link
            className="text-red-500 font-semibold underline"
            href="/login"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;