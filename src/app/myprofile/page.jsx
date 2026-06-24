import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";

const MyProfile = async() => {
    const session = await auth.api.getSession({
  headers: await headers(),
});

if (!session) {
  redirect("/login");
}
    return (
<div className="max-w-xl mx-auto mt-10">

  <h1 className="text-3xl font-bold mb-5">
    My Profile
  </h1>

  {session.user.image && (
    <Image
      src={session.user.image}
      alt="profile"
      width={150}
      height={150}
      className="rounded-full"
    />
  )}

  <p>
    <strong>Name:</strong> {session.user.name}
  </p>

  <p>
    <strong>Email:</strong> {session.user.email}
  </p>

  <p>
    <strong>User ID:</strong> {session.user.id}
  </p>

<Link href="/myprofile/update-profile">
  <button className="btn btn-primary mt-5">
    Update Information
  </button>
</Link>

</div>
    );
};

export default MyProfile;