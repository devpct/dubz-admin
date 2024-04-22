import React, { useState, useEffect } from 'react';
import Search from '../../components/modules/Search';

export default function Table({ columnNames, currentData, toggleInventoryModal, toggleTransactionsModal, title, isSearch = true, toggleDetailedReportModal, searchTerm, setSearchTerm, toggleComplaintsModal }) {
    
  const [filteredData, setFilteredData] = useState(currentData);

  useEffect(() => {
      const filtered = currentData.filter((item) =>
      Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
      );
      setFilteredData(filtered);
  }, [currentData, searchTerm]);

  const handleSearch = (text) => {
    setSearchTerm(text); 
  };

  return (
    <>
      <div className="flex flex-col" dir="rtl">
        <div className="">
          <div className="inline-block w-full align-middle">
            <div className={`overflow-x-auto  ${filteredData.length !== 0 && 'border bg-white'} border-[#E0DEF7] rounded-[12px]`}>
              <div className="flex m-8 justify-between items-center gap-5 sm:static relative">
                <h3 className="text-[18px] font-bold sm:static absolute">{title}</h3>
                {isSearch && <Search onSearch={handleSearch} searchTerm={searchTerm} />}
              </div>

              <table className="relative min-w-full">
                
                <thead>
                  <tr>
                    {
                    filteredData.length !== 0 &&
                    columnNames.map((name) => (
                      <th
                        key={name}
                        className="py-3.5 px-4 lg:text-[16px] text-[14px] font-normal text-left rtl:text-right text-[#626A78]"
                      >
                        {name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {
                  filteredData.length === 0 ?
                  <div className='w-full h-full flex items-center justify-center gap-5 my-3 flex-col sm:flex-row'>
                    <img src="/svg/illustrations.svg" alt="" />
                    <p className='text-[40px] font-bold text-[#414141]'>نتیجه ای یافت نشد</p>
                  </div>
                  :
                  filteredData.map((data, index) => (
                    <tr key={data.id} className={`text-[#232F43] ${index % 2 === 1 ? "bg-white" : "bg-[#F7F8FA]"}`}>
                      {title === 'مشاورها' ? (
                        <>
                          <td className="px-4 py-4 text-[14px] font-medium whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <h2 className="font-medium text-gray-800">{data.name}</h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-[15px] whitespace-nowrap">{data.phoneNumber}</td>
                          <td className="px-4 py-4 text-[15px] whitespace-nowrap flex gap-4 items-center">{data.accountBalance}
                            <svg onClick={() => toggleInventoryModal(data.accountBalance, data.name)} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.2601 3.60022L5.0501 12.2902C4.7401 12.6202 4.4401 13.2702 4.3801 13.7202L4.0101 16.9602C3.8801 18.1302 4.7201 18.9302 5.8801 18.7302L9.1001 18.1802C9.5501 18.1002 10.1801 17.7702 10.4901 17.4302L18.7001 8.74022C20.1201 7.24022 20.7601 5.53022 18.5501 3.44022C16.3501 1.37022 14.6801 2.10022 13.2601 3.60022Z" stroke="#CB9044" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M11.8899 5.0498C12.3199 7.8098 14.5599 9.9198 17.3399 10.1998" stroke="#CB9044" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M3 22H21" stroke="#CB9044" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </td>
                          <td className="px-4 py-4 text-[15px]">
                            <button className='w-[147px] h-[36px] text-[#26397F] text-[14px] border border-[#26397F] rounded-[8px] hover:bg-[#26397F] hover:text-white transition-all' onClick={() => toggleTransactionsModal(data.name)}> مشاهده تراکنش ها</button>
                          </td>
                        </>
                      ) : title === 'جدول تراکنش ها' ? (
                        <>
                          <td className="px-4 py-4 text-[14px] font-medium whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <h2 className="font-medium text-gray-800">{data.transactionNumber}</h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-[15px] whitespace-nowrap">{data.date}</td>
                          <td className="px-4 py-4 text-[15px] whitespace-nowrap flex gap-4 items-center">{data.transactionType}</td>

                          <td className="px-4 py-4 text-[15px]" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px', cursor: 'pointer' }} onClick={() => alert(data.transactionReason)}>
                            {data.transactionReason}
                          </td>

                          {data.transactionType === 'واریز' ? (
                            <td className="px-4 py-4 text-[15px] flex gap-5">
                              <button className='w-[91px] h-[36px] text-[#26397F] text-[14px] border border-[#26397F] rounded-[8px] transition-all' onClick={() => toggleDetailedReportModal(data.tax, data.discount, data.netFee)}>ریز گزارش</button>
                              <button className='w-[110px] h-[36px] text-white text-[14px] border bg-[#26397F] rounded-[8px] transition-all'>پرینت فاکتور</button>
                            </td>
                          ) : (
                            <td className="px-4 py-4 text-[15px] flex gap-5">
                            </td>
                          )}
                        </>
                      ) : title === 'لیست شکایت ها' ? (
                        <>
                        <td className="px-4 py-4 text-[14px] font-medium whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <h2 className="font-medium text-gray-800">{data.complaintNumber}</h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-[15px] whitespace-nowrap">{data.name}</td>
                          <td className="px-4 py-4 text-[15px] whitespace-nowrap flex gap-4 items-center">{data.date}</td>
                          <td className="px-4 py-4 text-[15px] whitespace-nowrap">{data.phoneNumber}</td>
                          <td className="px-4 py-4 text-[15px] whitespace-nowrap">{data.subject}</td>
                          <td className="px-4 py-4 text-[15px]" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px', cursor: 'pointer' }} onClick={() => alert(data.complaintTitle)}>
                            {data.complaintTitle}
                          </td>
                          <td className="px-4 py-4 text-[15px]">
                            <button className='w-[147px] h-[36px] text-[#26397F] text-[14px] border border-[#26397F] rounded-[8px] hover:bg-[#26397F] hover:text-white transition-all' onClick={() => toggleComplaintsModal(data)}>مشاهده جزییات</button>
                          </td>
                        </>
                      ) : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
