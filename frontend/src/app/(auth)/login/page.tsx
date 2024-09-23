"use client";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import type { FormProps } from "antd";
import Link from "next/link";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App: React.FC = () => (
  <div className="min-h-screen flex justify-center items-center bg-gray-100">
    <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-500"
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-500"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked">
          <Checkbox className="text-gray-600">Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </Form.Item>
      </Form>
      <div className="flex items-center justify-between mt-4">
        <div className="text-center mt-4">
          <Button type="link" className="text-indigo-600">
            Forgot password?
          </Button>
        </div>
        <Link href="/register" className="text-center mt-4">
          <Button type="link" className="text-indigo-600">
            Create an account
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default App;
