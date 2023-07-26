import React from "react";

import dayjs from "dayjs";

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function DatePicker(props: DatePickerProps) {
  return (
    <input
      type="date"
      className="p-2 bg-woodsmoke-950 ring-1 ring-woodsmoke-800 rounded-md w-full"
      defaultValue={dayjs(new Date()).format("YYYY-MM-DD")}
      {...props}
    />
  );
}

export default DatePicker;
