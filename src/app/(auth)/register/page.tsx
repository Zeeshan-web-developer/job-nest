"use client";
import React from "react";
import { Button, Form, Input, Select, Space } from "antd";
import Image from "next/image";
import { Facebook } from "lucide-react";
import Link from "next/link";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" });
  };

  return (
    <div className="">
      <div className="flex md:flex-row  bg-gray-100  md:min-h-screen w-full flex-col rounded-lg">
        <div
          className="w-1/2   hidden md:block  
        
        shadow-l p-8 bg-gray-200 rounded-lg
        "
        >
          <h2 className="text-4xl  font-bold  mb-4  text-gray-800  cursor-pointer  hover:text-yellow-500  transition-all  duration-300  ease-in-out">
            Find the best <span className="text-primary">talent</span> for your
            project
          </h2>
          <p
            className="text-sm text-gray-400  cursor-pointer  hover:text-gray-600  transition-all  duration-300  ease-in-out"
            style={{ maxWidth: 400 }}
          >
            Get quality candidates for your business with ease maximum
            productivity
          </p>
          <Image
            src="https://cdn.pixabay.com/photo/2023/01/03/18/00/interview-7695015_1280.png"
            alt="hero"
            width={500}
            height={500}
          />
        </div>

        {/* right side */}
        <div
          className=" w-1/2  flex flex-col 
          
        
        shadow-l p-8 bg-white rounded-lg  
        
        "
        >
          <div className="flex justify-between my-10">
            <h2 className="text-xl  font-bold  text-yellow-500  cursor-pointer  hover:text-yellow-600  transition-all  duration-300  ease-in-out">
              JobNest
            </h2>
            <h5>
              Don't have an account?{" "}
              <Link
                className="text-xs text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out"
                href="/auth/register"
              >
                Sign up
              </Link>
            </h5>
          </div>
          <div className="text-center my-4">
            <h3 className="text-2xl font-bold">Login to your account</h3>
          </div>
          <div className="text-center">
            <p className="text-gray-400  text-xs  cursor-pointer  hover:text-gray-600  transition-all  duration-300  ease-in-out">
              Login to your account to find your dream job or hire the best
            </p>
          </div>

          <div className="flex justify-center  gap-4 my-8">
            <div className="flex">
              <Button className="bg-blue-500  hover:bg-blue-600  text-white  border-2  border-blue-500">
                Login with Facebook
              </Button>
            </div>
            <div>
              <Button className="bg-yellow-500  hover:bg-yellow-600  text-white  border-2  border-yellow-500">
                Login with Google
              </Button>
            </div>
          </div>
          {/* Or in center of horizontal line */}
          <div className="flex items-center gap-4 my-4">
            <div className="w-1/2 h-0.5 bg-gray-300"></div>
            <div className="text-gray-400">Or</div>
            <div className="w-1/2 h-0.5 bg-gray-300"></div>
          </div>

          <Form
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
          >
            <div className="my-2">
              <Form.Item
                name="email"
                // label="Email"
                rules={[{ required: true }]}
                className=""
              >
                <label htmlFor="email">Email</label>
                <Input placeholder="Enter your email" />
              </Form.Item>
            </div>
            <div className="my-2">
              <Form.Item
                name="password"
                // label="Password"
                rules={[{ required: true }]}
                className=""
              >
                <label htmlFor="password">Password</label>
                <Input placeholder="Enter your password" type="password" />
              </Form.Item>
              <Form.Item
                name="role"
                // label="Select Role"
                rules={[{ required: true }]}
              >
                <label htmlFor="role">Select Role</label>
                <Select
                  placeholder="Select a option and change input text above"
                  onChange={onGenderChange}
                  allowClear
                >
                  <Option value="male">Candidate</Option>
                  <Option value="female">Employer</Option>
                </Select>
              </Form.Item>
            </div>

            <div className="my-4">
              <Form.Item>
                <div className="flex justify-between items-center">
                  <div>
                    <Link
                      className="text-xs text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out"
                      href="/auth/register"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-xs text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out"
                      href="/auth/register"
                    >
                      Don't have an account?
                    </Link>
                  </div>
                </div>
              </Form.Item>
            </div>

            <Form.Item>
              <div className=" flex items-center mt-4 justify-center w-full">
                <Button className="px-20" type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default App;
