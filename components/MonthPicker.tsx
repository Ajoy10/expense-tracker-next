"use client";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { ComboBox } from "@/components/customUI/ComboBox";
import { months, years } from "@/lib/utils";
import dayjs from "dayjs";

const inter = Inter({ subsets: ["latin"] });

type MonthPickerProps = {
  onChange?: (value: Date) => void;
  date?: Date;
};

function MonthPicker(props: MonthPickerProps) {
  const [date, setDate] = useState(props.date || new Date());

  useEffect(() => {
    props.onChange && props.onChange(date);
  }, [date, props]);

  //#region Test for input:month
  // Test whether a new date input falls back to a text input or not
  const test = document.createElement("input");

  try {
    test.type = "month";
  } catch (e: any) {
    console.log(e.description);
  }
  //#endregion

  //#region Fallback
  if (test.type === "text") {
    return (
      <div className="flex gap-1 w-full">
        <ComboBox
          placeholder="Month"
          defaultValue={new Date().getMonth().toString()}
          options={months.map((month, id) => {
            return {
              label: month,
              value: id.toString(),
            };
          })}
          onChange={(value) => {
            console.log(value);
            setDate((prevDate) => {
              const newDate = prevDate;
              newDate.setMonth(value);
              return newDate;
            });
          }}
        />
        <ComboBox
          title="year"
          placeholder="Year"
          defaultValue={new Date().getFullYear().toString()}
          options={years.map((year) => {
            return {
              label: year,
              value: year,
            };
          })}
          onChange={(value) => {
            console.log(value);
          }}
        />
      </div>
    );
  }

  //#endregion

  return (
    <>
      <input
        type="month"
        name="month"
        id=""
        className="bg-oxford-blue-950 bg-opacity-20 p-2 w-max border border-white rounded-md"
        value={dayjs(date).format("YYYY-MM")}
        onChange={(e) => {
          setDate(e.target.valueAsDate || new Date());
        }}
        // value={date}
      />
    </>
  );
}

export default MonthPicker;
