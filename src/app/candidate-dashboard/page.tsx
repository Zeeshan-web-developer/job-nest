import { Button } from "antd";
import Link from "next/link";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
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
          <Link
            href="/find-jobs"
            className="text-gray-400  text-sm  cursor-pointer  hover:text-gray-600  transition-all  duration-300  ease-in-out"
          >
            <Button className="border-2  border-yellow-500  text-yellow-500  hover:bg-yellow-500  hover:text-white">
              Find Jobs
            </Button>
          </Link>
          {/* <li>Apply for Jobs</li>
          <li>View Applications</li>
          <li>View Profile</li> */}
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
          <Link href="/view-profile">
            <Button className="border-2  border-yellow-500  text-yellow-500  hover:bg-yellow-500  hover:text-white">
              View Profile
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
      {/*  

          cards 

          no of jobs applied
            no of jobs accepted
            no of jobs rejected

          
          */}

      <div className="grid grid-cols-2 gap-4  my-28">
        {[
          {
            title: "No of Jobs Applied",
            value: "10",
            // yellow color for this
            // add a blinking effect
            className:
              "text-4xl  animate-blink font-bold  text-yellow-500  cursor-pointer  hover:text-yellow-600  transition-all  duration-300  ease-in-out",
          },
          {
            title: "No of Jobs Accepted",
            value: "5",
            // green color for this
            className:
              "text-4xl  animate-blink font-bold  text-green-500  cursor-pointer  hover:text-green-600  transition-all  duration-300  ease-in-out",
          },
          {
            title: "No of Jobs Rejected",
            value: "5",
            //   red color fo this
            className:
              "text-4xl  font-bold  text-red-500  cursor-pointer  hover:text-red-600  transition-all  duration-300  ease-in-out",
          },
        ].map((item) => (
          <div className="flex justify-between items-center gap-4 shadow-lg p-16 bg-white rounded-lg flex-col">
            <h2 className={item.className}>{item.title}</h2>

            <h2 className={item.className}>{item.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
