import Link from "next/link";

import { IconX, IconTag, IconEdit, IconCaretUp } from "@tabler/icons-react";

import { useAppStore } from "@/stores";

const digitBtns: (number | string)[] = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  ".",
  0,
  "l/p",
];

type KeypadProps = {
  className: string;
  OnTitlePress: () => void;
};

const Keypad = (props: KeypadProps) => {
  const { money, setMoney, loss, setLoss } = useAppStore();

  const OnDigitPressHandler = (digit: string) => {
    window.navigator.vibrate([1, 1]); // Haptic feedback in android devices
    let newMoney = Number.parseInt(money.toString().concat(digit.toString()));
    setMoney(newMoney);
  };

  const OnDigitBackspaceHandler = () => {
    window.navigator.vibrate([1, 1]); // Haptic feedback in android devices

    let newMoney = Number.parseInt(money.toString().slice(0, -1));
    if (Number.isNaN(newMoney)) {
      newMoney = 0;
    }

    setMoney(newMoney);
  };

  const OnLossProfitSwitch = () => {
    setLoss((loss * -1) as -1 | 1);
  };

  return (
    <div id="btns-wrap" className={"flex mb-12 " + props.className}>
      <div className="grid-cols-3 grid w-full">
        {digitBtns.map((btn, id) => {
          if (btn == "l/p") {
            return (
              <button
                type="button"
                key={id}
                className="numpad-btns px-2 py-4 mx-2 my-3 flex items-center justify-center bg-oxford-blue-950 rounded-md font-bold"
                onClick={OnLossProfitSwitch}
              >
                <LossProfitSwitch money={money * loss} />
              </button>
            );
          }
          return (
            <button
              type="button"
              key={id}
              className="numpad-btns px-2 py-4 mx-2 my-3 flex items-center justify-center bg-oxford-blue-950 rounded-md font-bold"
              onClick={() => OnDigitPressHandler(btn as string)}
            >
              {btn}
            </button>
          );
        })}

        {/* Last row buttons */}

        {/* Cancel button */}
        <Link
          className="bg-[#742525] px-2 py-4 mx-2 my-3 flex justify-center rounded-md cursor-pointer"
          href=".."
        >
          <IconX size={18} />
        </Link>
        {/* Tag edit button */}
        <button
          type="button"
          className="bg-[#364663] px-2 py-4 mx-2 my-3 flex justify-center rounded-md"
        >
          <IconTag size={18} />
        </button>
        {/* Title edit button */}
        <button
          type="button"
          className="bg-[#28584B] px-2 py-4 mx-2 my-3 flex justify-center rounded-md"
          onClick={props.OnTitlePress}
        >
          <IconEdit size={18} />
        </button>
        {/* Last row buttons end */}
      </div>
      <div
        id="side-btns"
        className=" w-max h-max flex flex-col gap-4 items-center py-2"
      >
        <button
          type="button"
          className="flex justify-center items-center p-3 m-1 rounded-full bg-oxford-blue-950 "
          onClick={OnDigitBackspaceHandler}
        >
          <IconX size={18} />
        </button>
      </div>
    </div>
  );
};

const LossProfitSwitch = (props: { money: number }) => {
  return (
    <div id="loss-profit-switch" className="flex flex-col gap-2">
      <IconCaretUp fill={props.money >= 0 ? "white" : ""} className="-m-3" />
      <IconCaretUp
        fill={props.money < 0 ? "white" : ""}
        className=" rotate-180 -m-3"
      />
    </div>
  );
};

export default Keypad;
