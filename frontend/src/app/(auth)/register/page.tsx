"use client";
import React from "react";
import { registerUser } from "../../actions";
import Image from "next/image";
import Link from "next/link";

type UserProps = {
  email: string;
  password: string;
  role: string;
};

const App: React.FC = () => {
  const onFinish = (formdata: UserProps): void => {
    // const email = formdata.get("email");
    // const password = formdata.get("password");
    // const role = formdata.get("role");
    // registerUser({ email, password, role });
    console.log("Success:", formdata);
  };

  React.useEffect(async () => {
    console.log("hello");
    const response = await fetch("http://localhost:3000/api/hello");
    const data = await response.json();
    console.log(data);
    return () => {};
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen w-full">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-8 bg-gray-200 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Find the best <span className="text-indigo-600">talent</span> for your
          project
        </h2>
        <p className="text-sm text-gray-500 mb-4 max-w-sm text-center">
          Get quality candidates for your business with ease, ensuring maximum
          productivity.
        </p>
        <Image
          src="https://cdn.pixabay.com/photo/2023/01/03/18/00/interview-7695015_1280.png"
          alt="Find Talent"
          width={400}
          height={400}
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center shadow-lg">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-center">Create an Account</h3>
        </div>

        <form onSubmit={onFinish} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500"
              required
            />
          </div>

          {/* Role selection */}
          <div>
            <label className="block text-gray-600">Register as</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  className="mr-2"
                  required
                />
                Student
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="mr-2"
                  required
                />
                Recruiter
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition duration-200"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
