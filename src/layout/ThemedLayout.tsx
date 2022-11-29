import React from "react";

const ThemedLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="max-h-100vh">
      <div className="absolute top-0 w-full ">
        <img
          src="/assets/theme-top-desktop.svg"
          alt="theme"
          className="hidden tablet:block object-cover w-full opacity-50"
        />
        <img
          src="/assets/theme-top-mobile.svg"
          alt="theme"
          className="block tablet:hidden object-cover w-full "
        />
      </div>
      {children}
      <div className="absolute bottom-0 w-full">
        <img
          src="/assets/theme-bottom-desktop.svg"
          alt="theme"
          className="hidden tablet:block object-cover w-full opacity-50"
        />
        <img
          src="/assets/theme-bottom-mobile.svg"
          alt="theme"
          className="block tablet:hidden object-cover w-full "
        />
      </div>
    </div>
  );
};

export default ThemedLayout;
