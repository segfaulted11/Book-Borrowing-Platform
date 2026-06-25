"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const UpdateProfileForm = ({ user }) => {
  const router = useRouter();

  const [name, setName] = useState(user.name);
  const [image, setImage] = useState(user.image);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { data, error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Profile Updated Successfully");
    router.push("/myprofile");
  };

  return (
    <div className="max-w-lg mx-auto mt-6 md:mt-10 px-4">
      <div className="bg-base-100 rounded-lg shadow-sm p-5 md:p-8">
        
        <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center md:text-left">
          Update Profile
        </h2>

        <form
          onSubmit={handleUpdate}
          className="space-y-4"
        >
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">
                Profile Image URL
              </span>
            </label>

            <input
              type="text"
              value={image}
              onChange={(e) =>
                setImage(e.target.value)
              }
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Update Information
          </button>
        </form>

      </div>
    </div>
  );
};

export default UpdateProfileForm;