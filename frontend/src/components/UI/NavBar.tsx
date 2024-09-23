"use client";

import React from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

export default function NavBar({}: Props) {
  const router = useRouter();

  return (
    <div
      className="flex  justify-between  items-center  gap-4   
    shadow-lg p-8 bg-white rounded-lg mb-4
    "
    >
      <Link href="/">
        <h2 className="text-4xl  font-bold  text-yellow-500  cursor-pointer  hover:text-yellow-600  transition-all  duration-300  ease-in-out">
          JobNest
        </h2>
      </Link>
      {/* <div>
        <p className="text-gray-400  text-sm  cursor-pointer  hover:text-gray-600  transition-all  duration-300  ease-in-out">
          Find your dream job
        </p>
      </div> */}
      <Link className="flex gap-2" href="/login">
        {/* user logo if logged in else show login/sigup */}
        <Button className="border-2  border-yellow-500  text-yellow-500  hover:bg-yellow-500  hover:text-white">
          Already Registered? Login here
        </Button>
      </Link>
    </div>
  );
}
