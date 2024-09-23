"use server";
import { connectDB } from "../../../server/config/db";

import User from "../../../server/models/User";

// user action
type UserProps = {
  email: string;
  password: string;
};

export const registerUser = async ({ email, password }: UserProps) => {
  console.log("registerUser", email, password);
  try {
    await connectDB();
    const user = await User.create({ email, password });
    return "success";
  } catch (error) {
    return "error";
  }
};
