import React, { useState, useEffect } from 'react';

const DropdownMenu = ({ items,label,setFormState,name,title, width = true, color = false, widthFull = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setFormState(prevState => ({
      ...prevState,
      [title]: item
    }));
    setIsOpen(false);
  };

  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (isOpen && !e.target.closest('.relative')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener('click', closeMenuOnOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={`${widthFull ? 'w-full' : width ? 'lg:w-[156px]' : 'lg:w-[220px]'} w-full h-[40px]`}>
    <p className='text-[#232F43]'>{label}</p>
    <div className="relative">
      <div className={`w-full h-[40px] ${color ? 'bg-[#F7F7FA]' :  'bg-white'} flex justify-between items-center overflow-hidden border-[#E8E6F9] border rounded-[8px]`}>
        <button
          onClick={toggleMenu}
          className={`w-full text-right px-4 py-2 sm:text-[14px] text-[12px] ${color ? 'text-[#434C5D]' : 'text-[#232F43]'}`}
        >
          {name}
        </button>

        <button
          onClick={toggleMenu}
          className="h-full p-2 text-[#7F8393]"
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className={`absolute z-10 mt-2 w-full border-[#E8E6F9] border rounded-[8px] ${color ? 'bg-[#F7F7FA]' :  'bg-white'} shadow-lg`} role="menu">
          <div className="p-2 cursor-pointer">
            {items.map((item, index) => (
              <a
                key={index}
                onClick={() => handleItemClick(item)}
                className={`block rounded-lg px-4 py-2 text-sm  ${item === name ? 'text-white bg-[#26397F]' : 'text-gray-500 hover:text-gray-700'}`}
                role="menuitem"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default DropdownMenu;
