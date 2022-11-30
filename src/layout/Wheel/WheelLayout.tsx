import React from "react";

const WheelLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className=" h-full justify-evenly items-center flex flex-col sm:flex-row">
      <img
        src="/assets/wheel.svg"
        alt="wheel"
        className="max-sm:absolute max-sm:-top-32 sm:max-lg:absolute sm:max-lg:-left-24 left lg:static w-1/2 sm:w-1/4"
      />
      {children}
    </div>
  );
};

export default WheelLayout;
