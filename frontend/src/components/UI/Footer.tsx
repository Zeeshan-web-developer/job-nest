import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="absolute  bottom-0  w-3/4  bg-gray-100  p-4 ">
      <div className="text-center">
        {/*  */}
        <div className="flex items-center gap-4 my-4">
          <div className="w-1/2 h-0.5 bg-gray-300"></div>
          <div className="text-gray-400">
            <h2>Desgined with ❤️ by Zeeshan Ahmed</h2>
          </div>
          <div className="w-1/2 h-0.5 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
