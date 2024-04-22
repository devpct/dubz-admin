import React from 'react'

export default function TariffRegulationModal({isTariffRegulationModalOpen, toggleTariffRegulationModal, amount, setAmount }) {
    return (
      <>
      {isTariffRegulationModalOpen && (
          <div className="w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center">
          <div className="blur-background" onClick={toggleTariffRegulationModal}></div>
          <div className="modal-container">
              <div className="modal-content sm:w-[408px] w-[90%] h-[241px] rounded-[12px] py-4 transform -translate-x-1/2 -translate-y-[110%]">
          <div className="flex w-full justify-between px-5 mb-4">
          <p className='text-[15px]'>تنظیم تعرفه</p>
          <svg onClick={toggleTariffRegulationModal} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.17004 14.8299L14.83 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.83 14.8299L9.17004 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </div>
          <hr />
          <div className='mt-5 px-5'>
              <p className='text-[rgb(35,47,67)] mb-1 text-[14px]'>تعرفه ی مورد نظر برای آگهی ها را وارد کنید</p>
              <input
              value={amount}
              type="text"
              dir='ltr'
              onChange={(e) => setAmount(e.target.value)}
              className="py-3 text-[16px] px-4 block w-full h-[48px] border-[#E0DEF7] border rounded-lg bg-[#FFFFFF] focus:ring-gray-300 focus:outline-none"
              />
              <button onClick={toggleTariffRegulationModal} className='mt-6 w-full h-[48px] bg-[#26397F] text-[14px] text-white rounded-[8px]'>ثبت تعرفه</button>
          </div>
              </div>
          </div>
          </div>
      )}
      </>
    )
  }
  