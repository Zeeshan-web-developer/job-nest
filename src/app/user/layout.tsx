import React from "react";
import Navbar from "./ui/navbar";

type Props = {
  children: React.ReactNode;
};

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default layout;
