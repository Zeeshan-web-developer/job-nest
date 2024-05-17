import { Button } from "antd";
import Link from "next/link";
import React from "react";

function navbar() {
  return (
    <ul
      className="flex justify-between items-center 

    shadow-lg p-8 bg-white rounded-lg
      
      flex-col md:flex-row
      "
    >
      <div>
        <h2 className="text-4xl  font-bold  text-yellow-500  cursor-pointer  hover:text-yellow-600  transition-all  duration-300  ease-in-out">
          JobNest
        </h2>
      </div>
      <div className="flex flex-col gap-2  md:flex-row">
        <Link href="/apply-for-jobs">
          <Button className="border-2  border-yellow-500  text-yellow-500  hover:bg-yellow-500  hover:text-white hover:border-yellow-600 ">
            Apply for Jobs
          </Button>
        </Link>
        <Link href="/view-applications">
          <Button className="border-2  border-yellow-500  text-yellow-500  hover:bg-yellow-500  hover:text-white">
            View Applications
          </Button>
        </Link>
      </div>
      <Link href="/login">
        <Button
          className="bg-yellow-500  hover:bg-yellow-600  text-white  border-2  border-yellow-500
            hover:border-yellow-600
            hover:text-white
            "
        >
          Logout
        </Button>
      </Link>
    </ul>
  );
}

export default navbar;
