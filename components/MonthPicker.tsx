"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import { ComboBox } from "./ComboBox";

const inter = Inter({ subsets: ["latin"] });

function MonthPicker() {
  const [date, setDate] = useState(Date());

  // Test whether a new date input falls back to a text input or not
  const test = document.createElement("input");

  try {
    test.type = "month";
  } catch (e: any) {
    console.log(e.description);
  }

  const months = Array.from({ length: 12 }, (item, i) => {
    return new Date(0, i).toLocaleString("en-US", { month: "long" });
  });

  const years = Array.from({ length: 201 }, (item, i) => {
    return new Date(new Date().getFullYear() - 25 + i, 0).toLocaleString(
      "en-US",
      {
        year: "numeric",
      }
    );
  });

  // Fallback
  if (test.type === "text") {
    return (
      <div className="flex gap-2">
        <ComboBox
          options={months.map((month, id) => {
            return {
              label: month,
              value: id.toString(),
            };
          })}
        />
        <ComboBox
          title="year"
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
