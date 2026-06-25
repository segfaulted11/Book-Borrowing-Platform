import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const MyProfile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md bg-base-100 shadow-md rounded-xl p-6 sm:p-8">

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          My Profile
        </h1>

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          {user.image && (
            <Image
              src={user.image}
              alt="profile"
              width={120}
              height={120}
              className="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover"
            />
          )}
        </div>

        {/* Info */}
        <div className="space-y-3 text-sm sm:text-base">

          <p>
            <span className="font-semibold">Name:</span> {user.name}
          </p>

          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>

          <p className="break-all">
            <span className="font-semibold">User ID:</span> {user.id}
          </p>

        </div>

        {/* Button */}
        <div className="mt-6">
          <Link href="/myprofile/update-profile">
            <button className="btn btn-primary w-full">
              Update Information
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MyProfile;