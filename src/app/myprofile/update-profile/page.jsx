import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UpdateProfileForm from "@/Components/UpdateProfileForm";

export default async function UpdateProfilePage() {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <UpdateProfileForm
      user={session.user}
    />
  );
}