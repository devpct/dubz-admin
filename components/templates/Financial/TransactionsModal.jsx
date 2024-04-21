import DropdownMenu from '../../modules/DropdownMenu'
import DatePicker from '../../../components/modules/DatePicker'
import { useState } from 'react';
import Table from '../../modules/Table';
import Paginations from '../../../components/modules/Pagination'

export default function TransactionsModal({isTransactionsModalOpen, toggleTransactionsModal, consultantName, toggleDetailedReportModal }) {

  let columnNames = ['شماره تراکنش', 'تاریخ', 'نوع تراکنش', 'علت تراکنش']

  let data = [
      { id: 1, transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'واریز', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰' },
      { id: 2, transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'برداشت', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰'  },
      { id: 3,  transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'واریز', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰'  },
      { id: 4, transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'واریز', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰' },
      { id: 5, transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'برداشت', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰'  },
      { id: 6,  transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'واریز', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰'},
      { id: 7, transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'برداشت', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰'  },
      { id: 8, transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'واریز', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰' },
      { id: 9, transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'واریز', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰' },
      { id: 10, transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'واریز', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰' },
      { id: 11, transactionNumber: '۴۵۳۴۳', date:'۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'واریز', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰' },
      { id: 12, transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'برداشت', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰'  },
      { id: 13,  transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'واریز', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰'  },
      { id: 14, transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'واریز', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰' },
      { id: 15, transactionNumber: '۴۵۳۴۳', date: '۲۳:۲۳ ۱۴۰۰/۰۹/۰۹', transactionType: 'برداشت', transactionReason: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم', tax: '۲۴،۰۰۰', discount: '۴،۰۰۰', netFee: '۲۳۴،۰۰۰'  },
  ]

    const [formState, setFormState] = useState({
      transactionType: 'نوع تراکنش',
  });

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 10;

    // search
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const indexOfLastItem = currentPage * perPage;
    const indexOfFirstItem = indexOfLastItem - perPage;
    const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>
    {isTransactionsModalOpen && (
        <div className="w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center">
            <div className="blur-background" onClick={toggleTransactionsModal}></div>
            <div className="modal-container ">
            <div className="modal-content overflow-y-auto w-[93%] h-[83vh] rounded-[12px] sm:pb-7 pb-4 transform -translate-x-1/2 -translate-y-[54%]">
            <div className="flex w-full justify-between px-5 sm:pb-7 pb-4 sm:pt-7 pt-4 sticky top-0 z-50 bg-white border-b">
            <p className='sm:text-[18px] text-[15px]'>تراکنش های {consultantName}</p>
            <svg onClick={toggleTransactionsModal} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.17004 14.8299L14.83 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.83 14.8299L9.17004 9.16992" stroke="#434C5D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
            <hr />
            <div className="mt-5 w-full lg:px-8 px-4">
            <div className='flex  w-full items-center  bg-white border shadow-lg border-[#E0DEF7] rounded-[8px] lg:px-3 px-4 lg:py-2 py-4 flex-col lg:flex-row'>
            <div className="flex gap-x-4 items-center gap-y-2 lg:flex-row flex-col w-full">
                <DropdownMenu title='transactionType' setFormState={setFormState} name={formState.transactionType} items={['تست یک','تست دو','تست سه']} width={false}/>
                <DatePicker label='از تاریخ' />
                <DatePicker label='تا تاریخ' />
            </div>
            <button className='w-full mt-4 lg:m-0 lg:w-[124px] h-[40px] bg-[#CB9044] text-[14px] text-white rounded-[8px]'>پرینت گزارش</button>
            </div>
            <div className="mt-5">
              <Table toggleTransactionsModal={toggleTransactionsModal} title='جدول تراکنش ها' columnNames={columnNames} currentData={currentData} toggleDetailedReportModal={toggleDetailedReportModal}                         searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}/>
            </div>
            <div className="mt-5">
              <Paginations perPage={perPage} total={filteredData.length} paginate={paginate} />
            </div>
            </div>
            </div>
            </div>
        </div>
    )}
    </>
  )
}
