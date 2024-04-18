import Navbar from '../../components/modules/Navbar'
import Sidebar from '../../components/modules/Sidebar'
import Title from '../../components/modules/Title'
import WithdrawalRequest from '../../components/templates/Financial/WithdrawalRequest'
import PrintInvoice from '../../components/templates/Financial/PrintInvoice'

export default function Index() {
    let columnNames = ['نام و نام خانوادگی مشاور', 'شماره تماس', 'موجودی حساب(تومان)']
    let data = [
        { id: 1, name: 'نرگس یوسفی', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۲۳،۰۰۰،۰۰۰' },
        { id: 2, name: 'نرگس یوسفی', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۲۳،۰۰۰،۰۰۰' },
        { id: 3, name: 'نرگس یوسفی', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۲۳،۰۰۰،۰۰۰' },
        { id: 4, name: 'نرگس یوسفی', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', accountBalance: '۲۳،۰۰۰،۰۰۰' }
    ]

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="xl:mr-[240px] px-6 xl:py-7 py-4">
                <Title title='مالی' />
                <WithdrawalRequest />
                <PrintInvoice />
                <div className="bg-white border border-[#E0DEF7] rounded-[12px] flex flex-col mt-6" dir='rtl'>
                    <div className="">
                        <div className="inline-block w-full align-middle  ">
                            <div className=" overflow-x-auto  rounded-lg">
                                <table className="relative min-w-full">
                                    <thead className=" ">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 lg:text-[16px] text-[14px] font-normal text-left rtl:text-right text-[#626A78] ">
                                                {columnNames[0]}
                                            </th>
                                            <th scope="col" className="px-12 py-3.5 lg:text-[16px] text-[14px]  font-normal text-left rtl:text-right text-[#626A78] ">{columnNames[1]}</th>
                                            {
                                                columnNames.slice(2, columnNames.length).map(name => (
                                                    <th key={name} scope="col" className="px-4 py-3.5 lg:text-[16px] text-[14px] font-normal text-left rtl:text-right text-[#626A78] ">{name}</th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                    {
                                        data.map((data, index) => (
                                            <tr key={data.id} className={`text-[#232F43] ${index % 2 === 0 ? "bg-white" : "bg-[#F7F8FA]"}`}>
                                                <td className="px-4 py-4 text-[14px] font-medium whitespace-nowrap">
                                                    <div className="inline-flex items-center gap-x-3">
                                                        <h2 className="font-medium text-gray-800">{data.name}</h2>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-[15px]  whitespace-nowrap">{data.phoneNumber}</td>
                                                <td className="px-4 py-4 text-[15px]  whitespace-nowrap">{data.accountBalance}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
