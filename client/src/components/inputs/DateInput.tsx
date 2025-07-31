import DatePicker from "react-datepicker";
import React from "react";

interface DateInputProps {
  range: [Date | null, Date | null];
  setRange: (range: [Date | null, Date | null]) => void;
}

const CustomInput = React.forwardRef<HTMLInputElement, any>(
  ({ value, onClick }, ref) => (
    <input
      readOnly // prevents typing
      ref={ref}
      value={value}
      onClick={onClick} // opens calendar on click
      className="text-sm rounded w-full focus:outline-none focus:ring-0 cursor-pointer"
      placeholder="Select a date range"
    />
  )
);
CustomInput.displayName = "CustomInput";

const DateInput = ({ range, setRange }: DateInputProps) => (
  <div className="flex flex-col w-full justify-center">
    <h1 className="hidden lg:block mb-1">Date</h1>
    <DatePicker
      selectsRange
      startDate={range[0]}
      endDate={range[1]}
      onChange={(update) => setRange(update as [Date | null, Date | null])}
      isClearable
      customInput={<CustomInput />}
    />
  </div>
);

export default DateInput;
