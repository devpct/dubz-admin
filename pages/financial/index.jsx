import Navbar from '../../components/modules/Navbar'
import Sidebar from '../../components/modules/Sidebar'
import Title from '../../components/modules/Title'
import WithdrawalRequest from '../../components/templates/Financial/WithdrawalRequest'
import PrintInvoice from '../../components/templates/Financial/PrintInvoice'
import { useState } from 'react'
import Table from '../../components/modules/Table'
import Paginations from '../../components/modules/Pagination'
import InventoryModal from '../../components/templates/Financial/InventoryModal'
import TransactionsModal from '../../components/templates/Financial/TransactionsModal'
import DetailedReportModal from '../../components/templates/Financial/DetailedReportModal'

export default function Index() {
    
    // data table
    let columnNames = ['نام و نام خانوادگی مشاور', 'شماره تماس', 'موجودی حساب(تومان)']

    let data = [
        { id: 1, name: 'نرگس یوسفی', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۲۳،۰۰۰،۰۰۰' },
        { id: 2, name: 'محمد عبدالله زاده', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۸۳،۰۰۰،۰۰۰' },
        { id: 3, name: 'نرگس یوسفی', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۲۳،۰۰۰،۰۰۰' },
        { id: 4, name: 'نرگس یوسفی', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۲۳،۰۰۰،۰۰۰' },
        { id: 5, name: 'نرگس یوسفی', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۲۳،۰۰۰،۰۰۰' },
        { id: 6, name: 'نرگس یوسفی', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۲۳،۰۰۰،۰۰۰' },
        { id: 7, name: 'نرگس یوسفی', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۲۳،۰۰۰،۰۰۰' },
        { id: 8, name: 'نرگس یوسفی', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۲۳،۰۰۰،۰۰۰' },
        { id: 9, name: 'نرگس یوسفی', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۲۳،۰۰۰،۰۰۰' },
        { id: 10, name: 'نرگس یوسفی', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۲۳،۰۰۰،۰۰۰' },
    ]

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 7;

    const indexOfLastItem = currentPage * perPage;
    const indexOfFirstItem = indexOfLastItem - perPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    // modal
    const [isInventoryModalOpen, setIsInventoryModalOpen] = useState(false);
    const [isTransactionsModalOpen, setIsTransactionsModalOpen] = useState(false);
    const [isDetailedReportModalOpen, setIsDetailedReportModalOpen] = useState(false);
    
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [consultantName, setConsultantName] = useState('');
    const [detailedReport, setDetailedReport] = useState({tax: '', discount: '', netFee: ''});

    const toggleInventoryModal = (amount,name) => {
        setIsInventoryModalOpen(!isInventoryModalOpen);
        setWithdrawAmount(amount);
        setConsultantName(name)
    };

    const toggleTransactionsModal = (name) => {
        setIsTransactionsModalOpen(!isTransactionsModalOpen);
        setConsultantName(name)
    };

    const toggleDetailedReportModal = (tax, discount, netFee) => {
        setIsTransactionsModalOpen(!isTransactionsModalOpen);
        setIsDetailedReportModalOpen(!isDetailedReportModalOpen);
        setDetailedReport({ tax, discount, netFee });
    };
    

    return (
        <>
            <Navbar />
            <Sidebar />

            <div className="xl:mr-[240px] px-6 xl:py-7 py-4">
                <Title title='مالی' />
                <WithdrawalRequest />
                <PrintInvoice />
                <div className="mt-10">
                <Table title='مشاورها' columnNames={columnNames} currentData={currentData} toggleInventoryModal={toggleInventoryModal} toggleTransactionsModal={toggleTransactionsModal}/>
                </div>
                <div className="mt-9">
                <Paginations perPage={perPage} total={data.length} paginate={paginate} />
                </div>
            </div>

            <InventoryModal consultantName={consultantName} isInventoryModalOpen={isInventoryModalOpen} setWithdrawAmount={setWithdrawAmount} toggleInventoryModal={toggleInventoryModal} withdrawAmount={withdrawAmount} />
            
            <TransactionsModal consultantName={consultantName}  isTransactionsModalOpen={isTransactionsModalOpen} toggleTransactionsModal={toggleTransactionsModal} toggleDetailedReportModal={toggleDetailedReportModal}/>
            
            <DetailedReportModal detailedReport={detailedReport} toggleDetailedReportModal={toggleDetailedReportModal} isDetailedReportModalOpen={isDetailedReportModalOpen}/>
        </>
    )
}
