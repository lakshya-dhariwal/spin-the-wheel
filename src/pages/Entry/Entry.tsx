import React from "react";
import Form from "./Form";

function Entry() {
  return (
    <div className="flex justify-evenly items-center h-full">
      <img
        src="/assets/wheel.svg"
        alt="wheel"
        className="absolute -right-1/2 tablet:static w-1/4"
      />
      <Form />
    </div>
  );
}

export default Entry;
