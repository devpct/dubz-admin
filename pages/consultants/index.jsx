import Navbar from '../../components/modules/Navbar'
import Sidebar from '../../components/modules/Sidebar'
import Title from '../../components/modules/Title'

export default function index() {

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className="xl:mr-[240px] px-6 xl:py-7 py-4">
    <Title title='مشاورین'/>
    
    </div>
    </>
  )
}