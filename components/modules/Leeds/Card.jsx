import React from 'react';

export default function Card({ title, onClick, isActive, buttonHandler }) {
  const handleClick = () => {
    onClick(title);
  };

  return (
    <>
      <div
        className='lg:w-[346px] w-full h-[159px] grid rounded-[20px] lg:p-5 px-3 py-4 cursor-pointer bg-card'
        onClick={handleClick}
      >
        <label className="container-checkbox-card">
          <input type="checkbox" checked={isActive} onChange={() => {}} />
          <span className="checkmark-card"></span>
        </label>

        <p className={`my-3 text-center sm:text-[16px] text-[13px] ${isActive ? 'text-white' : 'text-[#FFFFFF]'} `}>
          {title}
        </p>

        <button
          className='w-[105px] h-[36px] text-center border rounded-[8px] text-[14px] border-[#FFFFFF] text-[#FFFFFF]
           mx-auto'
          onClick={()=>buttonHandler('')}
        >
          تنظیم تعرفه
        </button>
      </div>
    </>
  );
}
