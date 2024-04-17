export default function Input({ label, onChange, value }) {
 

  return (
    <>
      <div className='w-full'>
        <p className='text-[rgb(35,47,67)] mb-1'>{label}</p>
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          type="text"
          className="py-3 px-4 block w-full h-[48px] border-[#E0DEF7] border rounded-lg bg-[#F7F7FA] text-gray-600 focus:ring-gray-300 focus:outline-none"
        />
      </div>
    </>
  );
}
