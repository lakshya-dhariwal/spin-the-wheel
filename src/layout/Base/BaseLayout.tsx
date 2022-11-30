import React from "react";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-h-100vh">
      <div className="absolute top-0 w-full -z-10">
        <img
          src="/assets/theme-top-desktop.svg"
          alt="theme"
          className="hidden tablet:block object-cover w-full opacity-50 -z-10 "
        />
        <img
          src="/assets/theme-top-mobile.svg"
          alt="theme"
          className="block tablet:hidden object-cover w-full -z-10"
        />
      </div>
      <div className=" w-[100vw] h-[100vh] text-primary relative">
        {children}
      </div>
      <div className="absolute bottom-0 w-full -z-10">
        <img
          src="/assets/theme-bottom-desktop.svg"
          alt="theme"
          className="hidden tablet:block object-cover w-full opacity-50 -z-10"
        />
        <img
          src="/assets/theme-bottom-mobile.svg"
          alt="theme"
          className="block tablet:hidden object-cover w-full -z-10"
        />
      </div>
    </div>
  );
};

export default BaseLayout;
