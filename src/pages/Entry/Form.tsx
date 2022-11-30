import useStore from "../../store";

const Form = () => {
  const changePage = useStore((state) => state.changePage);
  const buttonHandler = () => {
    changePage("spin");
  };
  return (
    <div className="flex justify-center  flex-col w-[450px]">
      <h1 className="font-bold text-3xl m-1 font leading-relaxed">
        This is how EngageBud looks like in action!
      </h1>
      <div className="bg-white flex mx-1 my-2 border-0 border-b-2 border-green-700">
        <img src="/assets/email.svg" alt="email" className="w-[20px] mx-3" />
        <input type="text" placeholder="Email" className="w-full p-3" />
      </div>
      <div className="bg-white flex mx-1 my-2 border-0 border-b-2 border-green-700">
        <img src="/assets/phone.svg" alt="email" className="w-[20px] mx-3" />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 placeholder-pl-5"
        />
      </div>
      <div className="border border-3 rounded-md items-center border-black flex py-4 mx-1 my-4">
        <div className=" bg-black p-5 mx-4"></div>
        <h3 className="text-sm text-light ">
          I agree to receiving recurring automated messages at the number I have
          provided. Consent is not a condition to purchase.
        </h3>
      </div>
      <button
        onClick={buttonHandler}
        className="text-3xl bg-[#146531] text-white rounded-full p-5 font-black"
      >
        Try Your Luck
      </button>
      <p className="text-xs m-3  font-light">
        *You can spin the wheel only once! *If you win, you can claim your
        coupon for 10 minutes only!
      </p>
      <h3 className="font-bold flex text-lg  justify-end">
        No, I don’t feel lucky{" "}
        <img src="assets/cross.svg" alt="close" className="w-5 mx-3" />
      </h3>{" "}
    </div>
  );
};

export default Form;
