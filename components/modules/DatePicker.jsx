import { useRef, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import { useResizeDetector } from 'react-resize-detector';

export default function Date({ label }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const { width, ref } = useResizeDetector()

  const datePickerRef = useRef()

  return (
    <div className="relative lg:w-[214px] w-full cursor-pointer" ref={ref}>
      <div className='relative'>
        <p onClick={() => datePickerRef.current.openCalendar()} className={`text-[#232F43] text-[14px] absolute top-2.5 right-[10px] ${isInputFocused ? 'hidden' : ''}`}>{label}</p>
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
          onOpen={handleInputFocus}
          ref={datePickerRef} 
          mapDays={({ date }) => {
            let props = {};
            let isWeekend = date.weekDay.index === 6;

            if (isWeekend) props.className = "highlight highlight-red";

            return props;
          }}
          animations={[
            transition({
              from: 35,
              transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
            }),
          ]}
          locale={persian_fa}
          calendar={persian}
          style={{ cursor: "pointer", height: '40px', border: '1px solid #E8E6F9', paddingRight: '10px', borderRadius: '8px', width: `${width}px` }}
        />
        <svg
            className="absolute top-2.5 left-[11px] " onClick={() => datePickerRef.current.openCalendar()} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66675 1.66699V4.16699" stroke="#7F8393" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3333 1.66699V4.16699" stroke="#7F8393" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.91675 7.5752H17.0834" stroke="#7F8393" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 7.08366V14.167C17.5 16.667 16.25 18.3337 13.3333 18.3337H6.66667C3.75 18.3337 2.5 16.667 2.5 14.167V7.08366C2.5 4.58366 3.75 2.91699 6.66667 2.91699H13.3333C16.25 2.91699 17.5 4.58366 17.5 7.08366Z" stroke="#7F8393" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.0788 11.4167H13.0863" stroke="#7F8393" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.0788 13.9167H13.0863" stroke="#7F8393" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.99632 11.4167H10.0038" stroke="#7F8393" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.99632 13.9167H10.0038" stroke="#7F8393" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.91185 11.4167H6.91933" stroke="#7F8393" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.91185 13.9167H6.91933" stroke="#7F8393" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}





