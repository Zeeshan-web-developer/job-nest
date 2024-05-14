import { Button } from "antd";
import Image from "next/image";

import Footer from "../components/UI/Footer";
export default function Home() {
  return (
    <>
      {/* header */}
      <div
        className="flex  justify-between  items-center  gap-4   
    shadow-lg p-8 bg-white rounded-lg
    "
      >
        <div>
          <h2>JobNest</h2>
        </div>
        <div>
          <p>Find your dream job</p>
        </div>
        <div className="flex gap-2">
          {/* user logo if logged in else show login/sigup */}
          <Button type="primary">Already Registered? Login here</Button>
          <Button type="primary">New User? Signup here</Button>
        </div>
      </div>

      {/* main section */}

      <div className="flex  gap-4  my-28">
        <div className="flex-1">
          <h4 className="text-yellow-500  font-bold  mb-4">Why choose us</h4>
          <h1 className="text-4xl  font-bold  mb-4  text-gray-800 ">
            A recruiting platform that helps you find the right job and the
            right candidate for your company
          </h1>
          <p className="text-sm text-gray-400">
            JobNest is a recruiting platform that helps you find the right job
            and the right candidate for your company. We have a large database
            of job seekers and employers. Our platform is easy to use and allows
            you to find the perfect match for your needs. Whether you are
            looking for a job or looking to hire, JobNest is the place to be.
          </p>
          <Button
            // type="primary"
            shape="round"
            className="mt-4 bg-yellow-500  hover:bg-yellow-600"
          >
            Get Started
          </Button>
          <div className="flex gap-2 mt-4">
            <Image
              src="https://cdn.pixabay.com/photo/2024/04/27/10/14/ai-generated-8723499_1280.jpg"
              alt="job"
              width={20}
              height={20}
              className="rounded-xl"
              // chnge the image direction little bit
            />
            <p className="text-xs">2500+ companies trust JobNest</p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/1.jpg"
            alt="job"
            width={1500}
            height={1500}
            className="transform -rotate-6    mt-4  shadow-lg  rounded-lg  bg-gray-100  p-4"
          />
        </div>
      </div>

      {/* why choose us */}

      <div className="my-28">
        <div className="flex items-center flex-col">
          <h4 className="text-yellow-500  font-bold  mb-4">
            Trusted by the top companies
          </h4>
          <h1 className="text-4xl  font-bold  mb-4  text-gray-800 ">
            Make the right hires faster, with confidence
          </h1>
          <Footer />
        </div>
      </div>
    </>
  );
}
