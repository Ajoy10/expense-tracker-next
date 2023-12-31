"use client";
import DatePicker from "@/components/DatePicker";
import Keypad from "@/components/Keypad";
import MonthPicker from "@/components/MonthPicker";
import YearPicker from "@/components/YearPicker";
import { ComboBox } from "@/components/customUI/ComboBox";
import { useAppStore } from "@/stores";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const Add = () => {
  const { money, loss, setLoss, title, setTitle } = useAppStore();

  const [typeOfDate, setTypeOfDate] = useState<"day" | "month" | "year">("day");

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const titleInput = useRef(null);

  const params = useSearchParams();

  useEffect(() => {
    setLoss(params.get("loss") == "true" ? -1 : 1);
  }, [params, setLoss]);

  const OnTitleButtonHandler = () => {
    (titleInput.current as any).focus();
  };

  const onMonthPickedHandler = (value: Date) => {
    setSelectedDate(value);
  };

  const onDayPickedHandler = (value: Date) => {
    setSelectedDate(value);
  };

  const onYearPickedHandler = (value: Date) => {
    setSelectedDate(value);
  };

  return (
    <>
      <form
        className="w-full p-2 h-full flex flex-col gap-5 "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {dayjs(selectedDate).format("DD/MM/YYYY")}
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

        <div id="date" className="flex">
          <ComboBox
            options={[
              { label: "Day", value: "day" },
              { label: "Month", value: "month" },
              { label: "Year", value: "year" },
            ]}
            defaultValue="month"
            disableDeselect
            onChange={(type) => {
              setTypeOfDate(type);
              console.log(typeOfDate);
            }}
          />
          {typeOfDate == "day" && (
            <DatePicker onChange={onDayPickedHandler} date={selectedDate} />
          )}
          {typeOfDate == "month" && (
            <MonthPicker onChange={onMonthPickedHandler} date={selectedDate} />
          )}
          {typeOfDate == "year" && (
            <YearPicker onChange={onYearPickedHandler} date={selectedDate} />
          )}
        </div>
        <Keypad className=" mt-auto" OnTitlePress={OnTitleButtonHandler} />
      </form>
    </>
  );
};

export default Add;
