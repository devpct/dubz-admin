import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import InputIcon from "react-multi-date-picker/components/input_icon";

export default function Date() {
  const [selectedDate, setSelectedDate] = useState(null);
  const initialText = "از تاریخ";

  return (
    <div>
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        mapDays={({ date }) => {
          let props = {};
          let isWeekend = date.weekDay.index === 6;

          if (isWeekend) props.className = "highlight highlight-red";

          return props;
        }}
        render={<InputIcon />}
        animations={[
          transition({
            from: 35,
            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
          }),
        ]}
        locale={persian_fa}
        calendar={persian}
        inputFormat={initialText}
      />
    </div>
  );
}
