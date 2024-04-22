import React from 'react'
import Textarea from '../../../components/modules/Textarea';

export default function ComplaintsModal({isComplaintsModalOpen, consultantsData, toggleComplaintsModal }) {
  return (
    <>
    {isComplaintsModalOpen && (
        <div className="w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center">
        <div className="blur-background" onClick={toggleComplaintsModal}></div>
        <div className="modal-container">
            <div className="modal-content xl:w-[1200px] w-[90%] h-fit rounded-[16px] sm:py-5 pt-4 transform -translate-x-1/2  -translate-y-[50%]">
        <div className="flex w-full justify-between px-5 sm:mb-6 mb-3">
        <p className='sm:text-[18px] text-[15px]'>شکایت شماره {consultantsData.complaintNumber}</p>
        <svg onClick={toggleComplaintsModal} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.17004 14.8299L14.83 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.83 14.8299L9.17004 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
        <hr />
        <div className="py-5 px-7">
            <div className="w-full items-center p-4 bg-[#cb90441a] border-2 border-[#cb904469] border-dashed flex flex-wrap gap-x-10 gap-y-5 rounded-[8px]">
                <div className="flex gap-2 items-center">
                    <p className='text-[#626A78]'>موضوع</p>
                    <p className='text-[#232F43]'>{consultantsData.subject}</p>
                </div>

                <div className="flex gap-2 items-center">
                    <p className='text-[#626A78]'>شماره همراه</p>
                    <p className='text-[#232F43]'>{consultantsData.phoneNumber}</p>
                </div>

                <div className="flex gap-2 items-center">
                    <p className='text-[#626A78]'>تاریخ</p>
                    <p className='text-[#232F43]'>{consultantsData.date}</p>
                </div>

                <div className="flex gap-2 ">
                    <p className='text-[#626A78]'>عنوان</p>
                    <p className='text-[#232F43]'>{consultantsData.complaintTitle}</p>
                </div>
            </div>

            <div className="flex sm:gap-3 mt-5">

            <div className="">
            <svg className='sm:w-[69px] sm:h-[69px] h-[40px] w-[40px]' viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H49C60.0457 0 69 8.9543 69 20V49C69 60.0457 60.0457 69 49 69H20C8.9543 69 0 60.0457 0 49V0Z" fill="#D9D9D9"/>
            <path opacity="0.4" d="M34.5 55.1022C45.3155 55.1022 54.0833 46.3345 54.0833 35.5189C54.0833 24.7033 45.3155 15.9355 34.5 15.9355C23.6844 15.9355 14.9166 24.7033 14.9166 35.5189C14.9166 46.3345 23.6844 55.1022 34.5 55.1022Z" fill="#292D32"/>
            <path d="M34.5 25.5918C30.4463 25.5918 27.1562 28.8818 27.1562 32.9355C27.1562 36.911 30.27 40.1422 34.4021 40.2597C34.4608 40.2597 34.5392 40.2597 34.5783 40.2597C34.6175 40.2597 34.6762 40.2597 34.7154 40.2597C34.735 40.2597 34.7546 40.2597 34.7546 40.2597C38.7104 40.1226 41.8242 36.911 41.8438 32.9355C41.8438 28.8818 38.5538 25.5918 34.5 25.5918Z" fill="#292D32"/>
            <path d="M47.7775 49.914C44.2917 53.1257 39.6309 55.1036 34.5 55.1036C29.3692 55.1036 24.7084 53.1257 21.2225 49.914C21.6925 48.132 22.9655 46.5065 24.8259 45.2532C30.1721 41.689 38.8671 41.689 44.1742 45.2532C46.0542 46.5065 47.3075 48.132 47.7775 49.914Z" fill="#292D32"/>
            </svg>
            <p className='text-[11px] mt-2 text-center'>{consultantsData.name}</p>
            </div>

            <div className="w-full p-5 bg-[#F5F9FF] rounded-[8px] rounded-tr-[0px] overflow-y-auto sm:h-fit h-[120px] text-[14px] leading-7">{consultantsData.description}</div>
            </div>

            <div className="mt-8">
            <Textarea label='پاسخ به شکایت ( پاسخ به شماره همراه کاربر پیامک میشود)' placeholder='متن پیام خود را در این بخش یادداشت کنید ...'/>
            </div>

            <button className='w-[116px] h-[48px] bg-[#26397F] rounded-[8px] text-white mt-5' onClick={toggleComplaintsModal}>ارسال پاسخ</button>
        </div>
        </div>
        </div>
        </div>
    )}
    </>
  )
}
