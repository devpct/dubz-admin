import { useState } from "react";

export default function WithdrawalRequest() {
    
  const [withdrawAmount, setWithdrawAmount] = useState('۲۰۰،۰۰۰');

  return (
    <div className='mt-6 w-full bg-white border border-[#E0DEF7] rounded-[12px] p-3 sm:py-6 sm:px-10 flex lg:flex-row-reverse
    flex-col justify-between'>
    <div className='mx-auto lg:mx-0 relative text-center text-white shadow-2xl rounded-[20px]'>
        <img src="/images/financial/card.png" className='h-[130px]' alt="" />
        <div className="w-full absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
            <p className='text-[14px] sm:text-[16px] font-light'>موجودی فعلی</p>
            <p className='mt-3 text-[22px] sm:text-[25px]'>۳،۴۵۹،۰۰۰ تومان</p>
        </div>
    </div>

    <div className='md:mt-2 mt-6'>
    <h3 className='sm:text-[18px] text-[15px] font-bold '>درخواست برداشت وجه</h3>
    <div className='mt-5'>
        <p className='text-[rgb(35,47,67)] mb-1 text-[14px]'>مبلغ(تومان)</p>
        <div className='flex gap-5 flex-col lg:flex-row'>
        <input
          value={withdrawAmount}
          type="text"
          dir='ltr'
          onChange={(e) => setWithdrawAmount(e.target.value)}
          className="py-3 text-[16px] px-4 block w-full lg:w-[352px] h-[48px] border-[#E0DEF7] border rounded-lg bg-[#FFFFFF] focus:ring-gray-300 focus:outline-none"
          />
        <button className='w-full lg:w-[124px] h-[48px] bg-[#26397F] text-[14px] text-white rounded-[8px]'>برداشت</button>
        </div>
    </div>
    </div>
    </div>
  )
}
