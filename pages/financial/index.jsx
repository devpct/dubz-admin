import Navbar from '../../components/modules/Navbar'
import Sidebar from '../../components/modules/Sidebar'
import Title from '../../components/modules/Title'
import DatePicker from '../../components/modules/DatePicker'
import WithdrawalRequest from '../../components/templates/Financial/WithdrawalRequest'

export default function index() {

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className="xl:mr-[240px] px-6 xl:py-7 py-4">
    <Title title='مالی'/>
    <WithdrawalRequest/>
    <div className='mt-7 w-full  bg-white border shadow-lg border-[#E0DEF7] rounded-[8px] p-3 '>
    <DatePicker/>
    </div>
    </div>
    </>
  )
}
