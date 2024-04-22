import React, { useState } from 'react'
import DropdownMenu from '../../modules/DropdownMenu'
import Input from '../../modules/Input';

export default function FilterSettingModal({isFilterSettingModalOpen, toggleFilterSettingModal }) {

    const [formState, setFormState] = useState({
        region: 'انتخاب کنید',
        neighborhood: 'انتخاب کنید',
        propertyType: 'انتخاب کنید',
        meterage: 'انتخاب کنید',
        price: 'انتخاب کنید',
        tariff: ''
    });
    
    const handleInputChange = (name, value) => {
        setFormState(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    return (
      <>
      {isFilterSettingModalOpen && (
          <div className="w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center">
          <div className="blur-background" onClick={toggleFilterSettingModal}></div>
          <div className="modal-container">
              <div className="modal-content sm:w-[516px] w-[90%] h-fit rounded-[12px] py-6 transform -translate-x-1/2  -translate-y-[50%]">
          <div className="flex w-full justify-between px-5 mb-5">
          <p className='sm:text-[18px] text-[15px]'>تنظیم تعرفه بر اساس فیلتر</p>
          <svg onClick={toggleFilterSettingModal} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.17004 14.8299L14.83 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.83 14.8299L9.17004 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </div>
          <hr />
          <div className='sm:my-5 mt-5 sm:px-8 px-4 grid'>

            <div className="flex items-center gap-2">

            <div className="sm:w-[30px] sm:h-[30px] w-[24px] h-[24px] rounded-full bg-[#CB9044] text-white grid">
            <p className='m-auto sm:text-[14px] text-[12px]'>۱</p>
            </div>

            <p className='sm:text-[15px] text-[13px]'>فیلترهای مورد نظر خود را اعمال کنید</p>
            </div>

            <div className="my-4 grid grid-cols-2 gap-x-4 gap-y-10">
            <DropdownMenu widthFull={true} label='منطقه' title='region' setFormState={setFormState} name={formState.region} items={['تست یک','تست دو','تست سه']} width={false} color={true}/>
            <DropdownMenu widthFull={true} label='محله' title='neighborhood' name={formState.neighborhood} setFormState={setFormState}  items={['تست یک','تست دو','تست سه']} width={false} color={true}/>
            <DropdownMenu widthFull={true} label='نوع ملک' title='propertyType' name={formState.propertyType} setFormState={setFormState}  items={['تست یک','تست دو','تست سه']} width={false} color={true}/>
            <DropdownMenu widthFull={true} label='متراژ' title='meterage' name={formState.meterage} setFormState={setFormState}  items={['تست یک','تست دو','تست سه']} width={false} color={true}/>
            </div>
            <div className="my-10">
            <DropdownMenu label='قیمت' title='price' name={formState.price} setFormState={setFormState} widthFull={true} items={['تست یک','تست دو','تست سه']} width={false} color={true}/>
            </div>

            <div className="mt-6 grid gap-6 mb-4">

            <div className="flex items-center gap-2">
            <div className="sm:w-[30px] sm:h-[30px] w-[24px] h-[24px] rounded-full bg-[#CB9044] text-white grid">
            <p className='m-auto sm:text-[14px] text-[12px]'>۲</p>
            </div>
            <p className='sm:text-[14px] text-[13px]'>قیمت مورد نظر برای فیلترهای انتخابی را تعیین کنید.</p>
            </div>

            <Input label='تعرفه(تومان)' onChange={(value) => handleInputChange('tariff', value)} value={formState.tariff}/>
            </div>

            <button onClick={toggleFilterSettingModal} className='mx-auto mt-6 lg:w-[352px] w-full h-[48px] bg-[#26397F] text-[14px] text-white rounded-[8px]'>ثبت تعرفه</button>
          </div>
              </div>
          </div>
          </div>
      )}
      </>
    )
  }
  