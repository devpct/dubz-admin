import { useState } from "react";PrintInvoice
import DatePicker from '../../../components/modules/DatePicker'

export default function PrintInvoice() {
    
    const [isTodayTransactions, setIsTodayTransactions] = useState(true);

    const handleTodayTransactionsChange = (e) => {
      setIsTodayTransactions(e.target.checked);
    };
  
    const handleTodayTransactionsTextClick = () => {
      setIsTodayTransactions(!isTodayTransactions);
    };
  
    const handleTodayTransactionsCheckboxClick = (e) => {
      e.stopPropagation();
    };

  return (
    <div className='flex mt-7 w-full items-center  bg-white border shadow-lg border-[#E0DEF7] rounded-[8px] lg:px-3 px-4 lg:py-2 py-4 flex-col lg:flex-row'>
          <div className="flex gap-x-4 items-center gap-y-2 lg:flex-row flex-col w-full">
            <DatePicker label='از تاریخ' />
            <DatePicker label='تا تاریخ' />
            <div className="flex items-center gap-3 mr-9 cursor-pointer w-full px-1.5 py-3 " onClick={handleTodayTransactionsTextClick}>
              <label className="container-checkbox" onClick={handleTodayTransactionsCheckboxClick}>
                <input
                  type="checkbox"
                  checked={isTodayTransactions} 
                  onChange={handleTodayTransactionsChange}
                />
                <span className="checkmark"></span>
              </label>
              <p className="text-[14px]" onClick={handleTodayTransactionsTextClick}>تراکنش های امروز</p>
            </div>
          </div>
          <button className='w-full mt-4 lg:m-0 lg:w-[124px] h-[40px] bg-[#CB9044] text-[14px] text-white rounded-[8px]'>پرینت فاکتور</button>
    </div>
  )
}
