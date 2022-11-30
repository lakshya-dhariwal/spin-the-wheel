import React, { useState } from "react";
import useStore from "../../store/index";
import { toast } from "react-hot-toast";
import confetti from "canvas-confetti";
import { toastStyle } from "../../utils";

const ITEMS = [
  "30% SITEWIDE OFF",
  "BUY 1 GET 1 FREE",
  "FREE COFFEE MUG  ON PURCHASE WORTH 1000+",
  " Buy 2 Effervescent tablets & get 1 free",
  "Free 50g teaon purchase of Rs. 500",
  "HOT CHOCLATE FREE WITH TEA",
];

function Spin() {
  const [changePage, setSelected] = useStore((state) => [
    state.changePage,
    state.setSelected,
  ]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const spinHandler = () => {
    if (selectedIndex === null) {
      setIsDisabled(true);
      const selectedItem = Math.floor(Math.random() * ITEMS.length + 1);
      setSelectedIndex(selectedItem);
      setSelected(ITEMS[selectedItem]);
      setTimeout(() => {
        toast(`You won: ${ITEMS[selectedItem]} `, {
          icon: "🎁",
          style: toastStyle,
        });
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
        });
      }, 5500);

      setTimeout(() => changePage("result"), 8000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative">
        <img
          src="assets/spin-wheel.svg"
          alt="wheel"
          className={` w-[400px] md:w-[900px] ${
            selectedIndex !== null ? `spinning spin-${selectedIndex}` : ""
          }`}
        />
        <img
          src="/assets/pointer.svg"
          alt="pointer"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <button
        onClick={spinHandler}
        disabled={isDisabled}
        className={`text-2xl ${
          isDisabled ? "bg-[#444745]" : "bg-[#146531]"
        }  text-white rounded-full p-4 px-6 my-5 font-black`}
      >
        Spin
      </button>
    </div>
  );
}

export default Spin;
