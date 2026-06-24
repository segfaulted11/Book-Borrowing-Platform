"use client";
import { authClient } from "@/lib/auth-client";
import { Menu, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  console.log(session);
  const getUser = session?.user;

  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); 
        },
      },
    });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-56 shadow"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>All Books</Link>
            </li>
            <li>
              <Link href={"/"}>My Profile</Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl">
          Book Borrowing
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/allbooks"}>All Books</Link>
          </li>
          <li>
            <Link href={"/myprofile"}>My Profile</Link>
          </li>
        </ul>
      </div>

      {isPending ? (
        <span className="loading loading-spinner loading-xl"></span>
      ) : getUser ? (
        <div className="navbar-end">
          Hi, {getUser.name}!
          <Image src={getUser.image} alt="" width={50} height={50}></Image>
          <Link href={"/login"} className="btn" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      ) : (
        <div className="navbar-end">
          <UserIcon />
          <Link href={"/login"} className="btn">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
