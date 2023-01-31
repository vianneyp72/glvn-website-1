import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";


function Navbar() {
  const { user } = useUser();
  return (
    <nav className="container flex justify-between items-center py-4 px-10 mx-11">
      <p className="text-2xl font-bold text-grey-800">GLVN Registration 2023-2024</p>
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
