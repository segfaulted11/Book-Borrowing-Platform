"use client";

import { authClient } from "@/lib/auth-client";
import { Menu, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
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
    <div className="navbar bg-neutral-800 text-neutral-content shadow-sm px-3 md:px-6">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <Menu size={22} />
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/allbooks">All Books</Link>
            </li>
            <li>
              <Link href="/myprofile">My Profile</Link>
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="btn btn-ghost text-base sm:text-lg md:text-xl px-2"
        >
          Book Borrowing
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/allbooks">All Books</Link>
          </li>
          <li>
            <Link href="/myprofile">My Profile</Link>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        {isPending ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : getUser ? (
          <div className="flex items-center gap-2 md:gap-3">
            <span className="hidden sm:block text-sm md:text-base truncate max-w-[120px] md:max-w-[180px]">
              Hi, {getUser.name}!
            </span>

            <Image
              src={getUser.image}
              alt={getUser.name || "User"}
              width={40}
              height={40}
              className="rounded-full object-cover w-9 h-9 md:w-10 md:h-10"
            />

            <button
              onClick={handleLogout}
              className="btn btn-sm md:btn-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <UserIcon size={20} />

            <Link
              href="/login"
              className="btn btn-sm md:btn-md"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;