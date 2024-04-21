import React from 'react'

export default function ProfileDetailsModal({isProfileDetailsModalOpen, consultantsData, toggleProfileDetailsModal }) {
  return (
    <>
    {isProfileDetailsModalOpen && (
        <div className="w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center">
        <div className="blur-background" onClick={toggleProfileDetailsModal}></div>
        <div className="modal-container">
            <div className="modal-content xl:w-[1200px] w-[90%] h-[279px] rounded-[16px] py-4 transform -translate-x-1/2 2xl:-translate-y-[148%] sm:-translate-y-[100%] -translate-y-[80%]">
        <div className="flex w-full justify-between px-5 mb-4">
        <p className='text-[18px]'>جزییات بیشتر پروفایل {consultantsData.name}</p>
        <svg onClick={toggleProfileDetailsModal} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.17004 14.8299L14.83 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.83 14.8299L9.17004 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
        <hr />
        </div>
        </div>
        </div>
    )}
    </>
  )
}
