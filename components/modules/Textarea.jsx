import React from 'react';

export default function Textarea({ label, value, setFormState, title, placeholder }) {
  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [title]: value
    }));
  };

  return (
    <div className='w-full'>
      <p className='text-[#232F43] sm:text-[18px] text-[14px] mb-1'>{label}</p>
      <div className="relative">
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className="p-4 pb-12 block w-full sm:h-[148px] h-[100px] bg-[#F7F7FA] border-[#E0DEF7] border rounded-lg text-sm focus:outline-none"
        ></textarea>
        <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-gray-100 "></div>
      </div>
    </div>
  );
}
