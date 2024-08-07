import React from 'react'

export default function DetailedReportModal({isDetailedReportModalOpen, detailedReport, toggleDetailedReportModal }) {
  return (
    <>
    {isDetailedReportModalOpen && (
        <div className="w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center">
        <div className="blur-background" onClick={toggleDetailedReportModal}></div>
        <div className="modal-container">
            <div className="modal-content sm:w-[408px] w-[90%] h-[241px] rounded-[16px] py-4 transform -translate-x-1/2 -translate-y-[115%]">
        <div className="flex w-full justify-between px-5 mb-4">
        <p className='text-[15px]'>ریز گزارش</p>
        <svg onClick={toggleDetailedReportModal} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.17004 14.8299L14.83 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.83 14.8299L9.17004 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
        <hr />
        <div className="px-7 py-6 w-full grid gap-5 border-b-2 border-dashed">
        <div className="flex justify-between items-center">
        <p className='text-[#26397F] text-[15px]'>مالیات</p>
        <p className='text-[18px] text-[#000929]'>{detailedReport.tax} تومان</p>
        </div>
        <div className="flex justify-between items-center">
        <p className='text-[#26397F] text-[15px]'>تخفیف</p>
        <p className='text-[18px] text-[#000929]'>{detailedReport.discount} تومان</p>
        </div>
        </div>
        <div className="px-7 py-3 w-full flex justify-between items-center">
        <p className='text-[#26397F] text-[16px]'>مبلغ خالص</p>
        <p className='text-[20px] text-[#000929]'>{detailedReport.netFee} تومان</p>
        </div>
        </div>
        </div>
        </div>
    )}
    </>
  )
}
