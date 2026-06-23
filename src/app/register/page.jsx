"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterPage = () => {
    const router = useRouter();
  const handleRegister = async(data) => {
    const {email,password,name,photo} = data;
    const {data:res, error} = await authClient.signUp.email({
email,
password,
name,
photo
    })
if(error){ 
    toast.error(error.message);
    return;
}
toast.success("Your registration is successful!");
router.push("/login")
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="bg-base-100 container mx-auto flex justify-center items-center min-h-[80vh]">
      <div className="bg-base-300 rounded-xl flex flex-col p-5 gap-5">
        <h2 className="font-bold text-3xl text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">What is your Name?</legend>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Type Your name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">What is your Photo URL?</legend>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Type Your photo url"
              {...register("photo", { required: true })}
            />
            {errors.photo && (
              <span className="text-red-500">This field is required</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">What is your Email?</legend>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Type Your Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">What is your password?</legend>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Type Your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </fieldset>
          <button type="submit" className="btn w-full btn-soft">
            Register
          </button>
        </form>
        <p>
          Already Have An Account?{" "}
          <Link className="text-red-500 underline" href={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
