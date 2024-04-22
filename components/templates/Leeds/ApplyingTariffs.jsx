import React from 'react'
import Card from '../../modules/Leeds/Card'

export default function ApplyingTariffs({ handleCardClick, activeCard, toggleTariffRegulationModal, toggleFilterSettingModal }) {
  return (
    <div className="mt-7 lg:py-16 py-7 lg:px-7 px-3 w-full h-fit bg-white border border-[#E0DEF7] rounded-[12px] grid gap-10">
    <p className="text-center lg:text-2xl text-[16px] text-[#434C5D]">
      روش اعمال تعرفه در سایت را انتخاب کنید
    </p>

    <div className="flex w-full justify-center lg:gap-10 gap-4">
      <Card
        title="اعمال یک تعرفه برای همه ی آگهی ها"
        onClick={handleCardClick}
        isActive={activeCard === 'اعمال یک تعرفه برای همه ی آگهی ها'}
        buttonHandler={toggleTariffRegulationModal}
      />
      <Card
        title="اعمال تعرفه بر اساس فیلتر"
        onClick={handleCardClick}
        isActive={activeCard === 'اعمال تعرفه بر اساس فیلتر'}
        buttonHandler={toggleFilterSettingModal}
      />
    </div>

    <button className="mx-auto w-full lg:w-[352px] h-[48px] bg-[#26397F] text-[14px] text-white rounded-[8px]">
      ثبت
    </button>
  </div>
  )
}
