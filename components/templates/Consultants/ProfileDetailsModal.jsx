import React from 'react'

export default function ProfileDetailsModal({isProfileDetailsModalOpen, consultantsData, toggleProfileDetailsModal }) {
  return (
    <>
    {isProfileDetailsModalOpen && (
        <div className="w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center">
        <div className="blur-background" onClick={toggleProfileDetailsModal}></div>
        <div className="modal-container">
            <div className="modal-content xl:w-[1200px] w-[90%] h-fit rounded-[16px] py-5 transform -translate-x-1/2 2xl:-translate-y-[148%] sm:-translate-y-[100%] -translate-y-[50%]">
        <div className="flex w-full justify-between px-5 mb-6">
        <p className='sm:text-[18px] text-[15px]'>جزییات بیشتر پروفایل {consultantsData.name}</p>
        <svg onClick={toggleProfileDetailsModal} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.17004 14.8299L14.83 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.83 14.8299L9.17004 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
        <hr />
        <div className='flex justify-between  p-5'> 
            <div className='bg-[#cb90441f] px-2 w-[206px] pt-5 pb-2 rounded-[8px] text-center'>
                <img src={consultantsData.image} alt='' className='mx-auto'/>
                <p className='my-2 text-[14px]'>{consultantsData.name}</p>
                <p className='text-[#1a376b] text-[13px]'>{consultantsData.phoneNumber}</p>
            </div>
            <div className='pr-5 w-full'>
            <div className='lg:hidden grid gap-3'>
                    <p className='text-[#26397F]'>آدرس</p>
                    <p className='text-[13px]'>{consultantsData.address}</p>
            </div>
            <div className='lg:flex hidden justify-between items-center lg:border-b-2 border-[#E0DEF7] border-dashed lg:pb-5 text-center  grid-cols-2 lg:gap-0 gap-6'>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>کد مشاور</p>
                    <p>{consultantsData.code}</p>
                </div>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>کد ملی</p>
                    <p>{consultantsData.nationalCode}</p>
                </div>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>منطقه</p>
                    <p>{consultantsData.region}</p>
                </div>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>نام دفتر املاک</p>
                    <p>{consultantsData.OfficeName}</p>
                </div>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>تعداد فایل</p>
                    <p>{consultantsData.fileCount}</p>
                </div>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>موجودی</p>
                    <p>{consultantsData.stock}</p>
                </div>
            </div>
            <div className='lg:flex hidden mt-5 gap-3 justify-between items-center'>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>آدرس</p>
                    <p className='text-[13px]'>{consultantsData.address}</p>
                </div>
            </div>
            </div>
            </div>
            <div className='lg:hidden border-b-2 border-dashed'></div>
            <div className='lg:hidden flex  p-5 gap-2 justify-between items-center'>
            <div className='lg:flex justify-between items-center lg:border-b-2 border-[#E0DEF7] border-dashed lg:pb-5 text-center grid sm:grid-cols-6 grid-cols-3 mx-auto lg:gap-0 gap-9'>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>کد مشاور</p>
                    <p>{consultantsData.code}</p>
                </div>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>کد ملی</p>
                    <p>{consultantsData.nationalCode}</p>
                </div>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>منطقه</p>
                    <p>{consultantsData.region}</p>
                </div>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>نام دفتر املاک</p>
                    <p>{consultantsData.OfficeName}</p>
                </div>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>تعداد فایل</p>
                    <p>{consultantsData.fileCount}</p>
                </div>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>موجودی</p>
                    <p>{consultantsData.stock}</p>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )}
    </>
  )
}
