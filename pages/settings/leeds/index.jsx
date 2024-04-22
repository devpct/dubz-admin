import React, { useState } from 'react';
import Navbar from '../../../components/modules/Navbar';
import Sidebar from '../../../components/modules/Sidebar';
import Title from '../../../components/modules/Title';
import TariffRegulationModal from '../../../components/templates/Leeds/TariffRegulationModal';
import FilterSettingModal from '../../../components/templates/Leeds/FilterSettingModal';
import ApplyingTariffs from '../../../components/templates/Leeds/ApplyingTariffs';

export default function Index() {
  
  const [activeCard, setActiveCard] = useState('اعمال یک تعرفه برای همه ی آگهی ها');

  const handleCardClick = (title) => {
    setActiveCard(title);
  };

  const [isTariffRegulationModalOpen, setIsTariffRegulationModalOpen] = useState(false);
  const [isFilterSettingModalOpen, setIsFilterSettingModalOpen] = useState(false);
  const [amount, setAmount] = useState('');

  const toggleTariffRegulationModal = (amount) => {
    setIsTariffRegulationModalOpen(!isTariffRegulationModalOpen);
    setAmount(amount);
  };

  const toggleFilterSettingModal = () => {
    setIsFilterSettingModalOpen(!isFilterSettingModalOpen);
  };

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="xl:mr-[240px] px-6 xl:py-7 py-4">
        <Title title="تنظیمات لیدز" />
        <ApplyingTariffs handleCardClick={handleCardClick} activeCard={activeCard} toggleTariffRegulationModal={toggleTariffRegulationModal} toggleFilterSettingModal={toggleFilterSettingModal}/>
      </div>

      <TariffRegulationModal isTariffRegulationModalOpen={isTariffRegulationModalOpen} amount={amount} setAmount={setAmount} toggleTariffRegulationModal={toggleTariffRegulationModal}/>

      <FilterSettingModal isFilterSettingModalOpen={isFilterSettingModalOpen}
      toggleFilterSettingModal={toggleFilterSettingModal}/>
    </>
  );
}
