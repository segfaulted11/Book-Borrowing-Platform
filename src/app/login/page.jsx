"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPage = () => {
    const router = useRouter();

  const handleLogin = async(data) => {
    const {email,password} = data;
    const {data:res, error} = await authClient.signIn.email({
email,
password
    })
if(error){ 
    toast.error(error.message);
    return;
}
toast.success("Your login is successful!");
router.push("/")
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
              {...register("email",{required:true})}
            />
              {errors.email && <span  className="text-red-500">This field is required</span>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">What is your password?</legend>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Type Your password"
              {...register("password",{required:true})}
            />
              {errors.password && <span className="text-red-500">This field is required</span>}
          </fieldset>
          <button type="submit" className="btn w-full btn-soft">
            Login
          </button>
        </form>
        <p>Dont Have An Account? <Link className="text-red-500 underline" href={'/register'}>Register</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;