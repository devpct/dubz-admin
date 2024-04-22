export default function Search({ onSearch, searchTerm }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="relative mx-[60%] sm:mx-0">
      <span className="cursor-pointer absolute inset-y-0 left-0 flex items-center pl-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 22L20 20" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <input
        type="text"
        className="sm:w-[352px] w-[252px] h-[48px] p-5 pl-12 border border-[#E0DEF7] rounded-[8px] focus:outline-none"
        placeholder="جستجو کنید"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
