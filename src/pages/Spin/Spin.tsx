import React from "react";

function Spin() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img
        src="assets/spin-wheel.svg"
        alt="wheel"
        className="w-[400px] md:w-[900px]"
      />{" "}
      <button className="text-2xl bg-[#146531] text-white rounded-full p-4 px-6 my-5 font-black">
        Spin
      </button>
    </div>
  );
}

export default Spin;
