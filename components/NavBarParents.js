import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from 'next/image'
import Link from "next/link";

function Navbar() {
  const { user } = useUser();
  return (
    <nav className="flex justify-between items-center px-5 mx-10 my-2">
      <div>
          <Link href="/">
              <Image
                  src="/GLVN_Minimal_small.png"
                  alt="GLVN Icon"
                  width={150}
                  height={150}
              ></Image>
          </Link>
      </div>
      <div className="flex">
        {user && (
          <a
            href="/api/auth/logout"
            className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
          >
            Logout
          </a>
        )}
        {!user && (
          <a
            href="/api/auth/login"
            className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
