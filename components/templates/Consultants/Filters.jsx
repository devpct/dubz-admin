import { useEffect, useState } from 'react';
import DropdownMenu from '../../modules/DropdownMenu'

export default function Filters() {

    const [formState, setFormState] = useState({
        consultantCode: 'کد مشاور',
        region: 'منطقه',
        stock: 'موجودی',
        fileCount: 'تعداد فایل',
        phoneNumber: 'شماره تلفن',
    });

    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const toggleFiltersModal = () => {
        setIsFiltersOpen(!isFiltersOpen);
    };

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth >= 1024) {
            setIsFiltersOpen(false);
            }
        };

        window.addEventListener('resize', checkScreenSize);

        checkScreenSize();

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

  return (
    <>
    <div className='lg:flex hidden mt-7 w-full items-center  bg-white border shadow-lg border-[#E0DEF7] rounded-[8px] lg:px-3 px-4 lg:py-2 py-4 flex-col lg:flex-row gap-x-5'>
          <div className="flex gap-x-4 items-center gap-y-2 lg:flex-row flex-col w-full">
                <DropdownMenu title='consultantCode' setFormState={setFormState} name={formState.consultantCode} items={['تست یک','تست دو','تست سه']}/>
                <DropdownMenu title='region' setFormState={setFormState} name={formState.region} items={['تست یک','تست دو','تست سه']}/>
                <DropdownMenu title='stock' setFormState={setFormState} name={formState.stock} items={['تست یک','تست دو','تست سه']}/>
                <DropdownMenu title='fileCount' setFormState={setFormState} name={formState.fileCount} items={['تست یک','تست دو','تست سه']}/>
                <DropdownMenu title='phoneNumber' setFormState={setFormState} name={formState.phoneNumber} items={['تست یک','تست دو','تست سه']}/>
            </div>
          <button className='w-full mt-4 lg:m-0 lg:w-[124px] h-[40px] bg-[#CB9044] text-[14px] text-white rounded-[8px]'>جستجو</button>
    </div>

    <button onClick={toggleFiltersModal} className='lg:hidden flex gap-2 my-7 border p-2 rounded-[8px] mx-auto min-[437px]:mx-0'>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.3999 2.09961H18.5999C19.6999 2.09961 20.5999 2.99961 20.5999 4.09961V6.29961C20.5999 7.09961 20.0999 8.09961 19.5999 8.59961L15.2999 12.3996C14.6999 12.8996 14.2999 13.8996 14.2999 14.6996V18.9996C14.2999 19.5996 13.8999 20.3996 13.3999 20.6996L11.9999 21.5996C10.6999 22.3996 8.8999 21.4996 8.8999 19.8996V14.5996C8.8999 13.8996 8.4999 12.9996 8.0999 12.4996L4.2999 8.49961C3.7999 7.99961 3.3999 7.09961 3.3999 6.49961V4.19961C3.3999 2.99961 4.2999 2.09961 5.3999 2.09961Z" stroke="#232F43" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.93 2.09961L6 9.99961" stroke="#232F43" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    فیلتر
    </button>

    {isFiltersOpen && (
        <div className="w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center">
        <div className="blur-background" onClick={toggleFiltersModal}></div>
        <div className='modal-container'>
            <div className="modal-content w-full h-screen rounded-tr-[16px] rounded-tl-[16px] py-4 transform -translate-x-1/2 -translate-y-[22%]">
            <div className='w-[100px] h-[4px] bg-[#E0E0E2] mx-auto rounded-[12px] mb-6'></div>
            <div className="flex w-full justify-between px-5 mb-4">
                <p className='text-[15px] font-bold'>فیلترها</p>
                <p className='text-[15px] text-[#E11640]'>حذف فیلترها</p>
            </div>
            <hr />
            <div className="flex items-center gap-y-6 lg:flex-row flex-col w-full p-5">
            <DropdownMenu title='consultantCode' setFormState={setFormState} name={formState.consultantCode} items={['تست یک','تست دو','تست سه']}/>
            <DropdownMenu title='region' setFormState={setFormState} name={formState.region} items={['تست یک','تست دو','تست سه']}/>
            <DropdownMenu title='stock' setFormState={setFormState} name={formState.stock} items={['تست یک','تست دو','تست سه']}/>
            <DropdownMenu title='fileCount' setFormState={setFormState} name={formState.fileCount} items={['تست یک','تست دو','تست سه']}/>
            <DropdownMenu title='phoneNumber' setFormState={setFormState} name={formState.phoneNumber} items={['تست یک','تست دو','تست سه']}/>
            <button className='w-full lg:m-0 lg:w-[124px] h-[40px] bg-[#CB9044] text-[14px] text-white rounded-[8px]' onClick={toggleFiltersModal}>جستجو</button>
            </div>
            </div>
        </div>
        </div>
    )}
    </>
  )
}
