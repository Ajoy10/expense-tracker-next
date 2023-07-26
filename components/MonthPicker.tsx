"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import { ComboBox } from "@/components/customUI/ComboBox";
import { months, years } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

function MonthPicker() {
  const [date, setDate] = useState(Date());

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
        onChange={(e) => {
          setDate(e.target.value);
        }}
        value={date}
      />
    </>
  );
}

export default MonthPicker;
