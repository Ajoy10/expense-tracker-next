"use client";
import Keypad from "@/components/Keypad";
import MonthPicker from "@/components/MonthPicker";
import { useAppStore } from "@/stores";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const Add = () => {
  const { money, loss, setLoss, title, setTitle } = useAppStore();

  const titleInput = useRef(null);

  const params = useSearchParams();

  useEffect(() => {
    setLoss(params.get("loss") == "true" ? -1 : 1);
    console.log(params);
  }, [params, setLoss]);

  const OnTitleButtonHandler = () => {
    (titleInput.current as any).focus();
  };

  return (
    <>
      <form
        className="w-full p-2 h-full flex flex-col gap-5 "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div id="money-title-wrapper" className="w-full">
          <input
            ref={titleInput}
            type="text"
            className="w-full px-2 py-1 text-lg bg-transparent text-gray-300 text-center focus:outline-none"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                console.log("Enter pressed!");
                (e.target as any).blur();
              }
            }}
          />
        </div>
        <div
          id="money"
          className="text-3xl font-bold bg-oxford-blue-950 bg-opacity-30 flex justify-center items-center gap-2 rounded-md w-full py-4"
        >
          <span className="opacity-10 font-light">₹</span>
          {money * loss}
        </div>

        <MonthPicker />
        <Keypad className=" mt-auto" OnTitlePress={OnTitleButtonHandler} />
      </form>
    </>
  );
};

export default Add;
