import React from 'react'

export default function ReportModal({isReportModalOpen, report, toggleReportModal }) {
  return (
    <>
    {isReportModalOpen && (
        <div className="w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center">
        <div className="blur-background" onClick={toggleReportModal}></div>
        <div className="modal-container">
            <div className="modal-content sm:w-[500px] w-[93%] h-[241px] rounded-[16px] sm:p-8 p-5 transform -translate-x-1/2 sm:-translate-y-[100%] -translate-y-[80%] relative">
            <div className='absolute w-[78px] h-[78px] bg-[#FF8C4F] border-[2px] border-white rounded-full shadow-lg top-[-35px] grid
            sm:left-[42%] left-[40%]'>

            <svg className='m-auto' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9167 4.0832C19.0833 3.09987 20.9667 3.09987 22.1 4.0832L24.7333 6.3332C25.2333 6.74987 26.1833 7.09987 26.85 7.09987H29.6833C31.45 7.09987 32.9 8.54987 32.9 10.3165V13.1499C32.9 13.8165 33.25 14.7499 33.6667 15.2499L35.9167 17.8832C36.9 19.0499 36.9 20.9332 35.9167 22.0665L33.6667 24.6999C33.25 25.1999 32.9 26.1332 32.9 26.7999V29.6332C32.9 31.3999 31.45 32.8499 29.6833 32.8499H26.85C26.1833 32.8499 25.25 33.1999 24.75 33.6165L22.1167 35.8665C20.95 36.8499 19.0667 36.8499 17.9333 35.8665L15.3 33.6165C14.8 33.1999 13.85 32.8499 13.2 32.8499H10.2833C8.51668 32.8499 7.06667 31.3999 7.06667 29.6332V26.7832C7.06667 26.1332 6.73334 25.1832 6.31667 24.6999L4.06667 22.0499C3.10001 20.8999 3.10001 19.0332 4.06667 17.8832L6.31667 15.2332C6.73334 14.7332 7.06667 13.7999 7.06667 13.1499V10.3332C7.06667 8.56654 8.51668 7.11654 10.2833 7.11654H13.1667C13.8333 7.11654 14.7667 6.76654 15.2667 6.34987L17.9167 4.0832Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 13.5498V21.5998" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.9908 26.667H20.0058" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            </div>
        <p className='sm:text-[18px] text-[#000929] text-center sm:my-11 mt-[55px] mb-8'> آیا میخواهید حساب {report} را مسدود کنید؟ </p>
        <div className="flex justify-between items-center gap-8 pt-4">
                <button className='w-full h-[48px] text-white text-[14px] border bg-[#26397F] rounded-[8px] transition-all' onClick={toggleReportModal}>ادامه</button>
                <button className='w-full h-[48px] text-[#26397F] text-[14px] border border-[#26397F] rounded-[8px] transition-all' onClick={toggleReportModal}>لغو</button>
        </div>
        </div>
        </div>
        </div>
    )}
    </>
  )
}
