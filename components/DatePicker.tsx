import React, { useEffect, useState } from "react";

import dayjs from "dayjs";

interface DatePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: Date) => void;
  date?: Date;
}

function DatePicker(props: DatePickerProps) {
  const [date, setDate] = useState(props.date || new Date());

  useEffect(() => {
    props.onChange && props.onChange(date);
    console.log("Date changed: " + date);
  }, [date, props]);

  return (
    <>
      <input
        type="date"
        className="p-2 bg-woodsmoke-950 ring-1 ring-woodsmoke-800 rounded-md w-full"
        value={dayjs(date).format("YYYY-MM-DD")}
        {...props}
        onChange={(e) => {
          setDate(dayjs(e.target.value, "YYYY-MM-DD").toDate());
        }}
      />
    </>
  );
}

export default DatePicker;
