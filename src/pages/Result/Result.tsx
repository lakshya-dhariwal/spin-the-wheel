import React from "react";
import WheelLayout from "../../layout/Wheel";
import { copyToClipboard } from "../../utils";
import useStore from "../../store/index";

function Result() {
  const COUPON_CODE = "XAXPDF20";
  const won = useStore((state) => state.selected);
  return (
    <>
      <WheelLayout>
        <div className="">
          <h2 className="font-bold text-center text-xl m-1 font leading-relaxed">
            Congrats! You Won:
          </h2>
          <h1 className="font-bold text-center text-4xl m-1 font leading-relaxed w-[300px]">
            {won}
          </h1>
          <div className="flex font-bold  text-white justify-between my-4 rounded-lg bg-[#a2c3a4] bg-blur ">
            <h2 className="p-4 text-2xl ">{COUPON_CODE}</h2>
            <button
              className="bg-[#146531] rounded-0 rounded-r-lg p-3 "
              onClick={() => {
                copyToClipboard(COUPON_CODE);
              }}
            >
              COPY
            </button>
          </div>
          <button
            className="text-2xl bg-[#146531] text-white rounded-full p-4 w-full font-black"
            onClick={() => {
              copyToClipboard(COUPON_CODE);
            }}
          >
            Close Panel & Copy
          </button>
          <p className="text-xs m-3  font-light">
            *You can claim your coupon for 10 minutes only!
          </p>
        </div>
      </WheelLayout>
    </>
  );
}

export default Result;
