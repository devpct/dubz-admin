import { useState } from 'react';
import Navbar from '../../components/modules/Navbar'
import Sidebar from '../../components/modules/Sidebar'
import Title from '../../components/modules/Title'
import Search from '../../components/modules/Consultants/Search';
import Filters from '../../components/templates/Consultants/Filters';
import Card from '../../components/modules/Consultants/Card';
import Paginations from '../../components/modules/Pagination';
import ReportModal from '../../components/templates/Consultants/ReportModal';
import ProfileDetailsModal from '../../components/templates/Consultants/ProfileDetailsModal';

export default function index() {

    const consultants = [
      {id:1, name: 'نرگس یوسفی', image: '/images/ellipse.png', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', code: '۳۴۵۶۷',nationalCode: '۲۳۴۵۵۶۷۸۹۰', region: 'منطقه ۱', OfficeName: 'منطقه ۱', stock: '۲۰۰،۰۰۰', fileCount: '۲۰۰', address: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
      {id:2, name: 'محمد عبدالله زاده', image: '/images/ellipse.png', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', code: '۳۴۵۶۷',nationalCode: '۲۳۴۵۵۶۷۸۹۰', region: 'منطقه ۱', OfficeName: 'منطقه ۱', stock: '۲۰۰،۰۰۰', fileCount: '۲۰۰', address: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
      {id:3, name: 'نرگس یوسفی', image: '/images/ellipse.png', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', code: '۳۴۵۶۷', nationalCode: '۲۳۴۵۵۶۷۸۹۰', region: 'منطقه ۱', OfficeName: 'منطقه ۱', stock: '۲۰۰،۰۰۰', fileCount: '۲۰۰', address: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
      {id:4, name: 'نرگس یوسفی', image: '/images/ellipse.png', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', code: '۳۴۵۶۷', nationalCode: '۲۳۴۵۵۶۷۸۹۰', region: 'منطقه ۱', OfficeName: 'منطقه ۱', stock: '۲۰۰،۰۰۰', fileCount: '۲۰۰', address: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
      {id:5, name: 'نرگس یوسفی', image: '/images/ellipse.png', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', code: '۳۴۵۶۷', nationalCode: '۲۳۴۵۵۶۷۸۹۰', region: 'منطقه ۱', OfficeName: 'منطقه ۱', stock: '۲۰۰،۰۰۰', fileCount: '۲۰۰', address: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
      {id:6, name: 'نرگس یوسفی', image: '/images/ellipse.png', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', code: '۳۴۵۶۷', nationalCode: '۲۳۴۵۵۶۷۸۹۰', region: 'منطقه ۱', OfficeName: 'منطقه ۱', stock: '۲۰۰،۰۰۰', fileCount: '۲۰۰', address: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
      {id:7, name: 'نرگس یوسفی', image: '/images/ellipse.png', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', code: '۳۴۵۶۷', nationalCode: '۲۳۴۵۵۶۷۸۹۰', region: 'منطقه ۱', OfficeName: 'منطقه ۱', stock: '۲۰۰،۰۰۰', fileCount: '۲۰۰', address: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
      {id:8, name: 'نرگس یوسفی', image: '/images/ellipse.png', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', code: '۳۴۵۶۷', nationalCode: '۲۳۴۵۵۶۷۸۹۰', region: 'منطقه ۱', OfficeName: 'منطقه ۱', stock: '۲۰۰،۰۰۰', fileCount: '۲۰۰', address: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
      {id:9, name: 'نرگس یوسفی', image: '/images/ellipse.png', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', code: '۳۴۵۶۷', nationalCode: '۲۳۴۵۵۶۷۸۹۰', region: 'منطقه ۱', OfficeName: 'منطقه ۱', stock: '۲۰۰،۰۰۰', fileCount: '۲۰۰', address: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
      {id:10, name: 'نرگس یوسفی', image: '/images/ellipse.png', phoneNumber: '۰۹۳۹۰۰۹۳۴۹۴', code: '۳۴۵۶۷', nationalCode: '۲۳۴۵۵۶۷۸۹۰', region: 'منطقه ۱', OfficeName: 'منطقه ۱', stock: '۲۰۰،۰۰۰', fileCount: '۲۰۰', address: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'},
    ]

        // pagination
        const [currentPage, setCurrentPage] = useState(1);
        const perPage = 8;
    
        // search
        const [searchTerm, setSearchTerm] = useState('');
    
        const filteredData = consultants.filter((item) =>
            Object.values(item).some((value) =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    
        const indexOfLastItem = currentPage * perPage;
        const indexOfFirstItem = indexOfLastItem - perPage;
        const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    
        const paginate = (pageNumber) => setCurrentPage(pageNumber);


        const handleSearch = (text) => {
          setSearchTerm(text); 
        };

        //modal
        const [isReportModalOpen, setIsReportModalOpen] = useState(false);
        const [report, setReport] = useState('');
        const [isProfileDetailsModalOpen, setIsProfileDetailsModalOpen] = useState(false);
        const [consultantsData, setConsultantsData] = useState();

        const toggleReportModal = (name) => {
            setIsReportModalOpen(!isReportModalOpen);
            setReport(name);
        };

        const toggleProfileDetailsModal = (data) => {
          setIsProfileDetailsModalOpen(!isProfileDetailsModalOpen);
          setConsultantsData(data);
      };

  return (
    <>
    <Navbar/>
    <Sidebar/>

    <div className="xl:mr-[240px] px-6 xl:py-7 py-4">
    <div className='flex items-center w-full justify-between flex-wrap gap-5'>
    <Title title='مشاورین'/>
    <Search onSearch={handleSearch} searchTerm={searchTerm}/>
    </div>
    <Filters />
    <div className={`grid ${currentData.length !== 0 && 'lg:grid-cols-2'} grid-cols-1 gap-7 mt-7 mb-10`}>
    {
      currentData.length === 0 ?
        <div className='w-full h-full flex items-center justify-center gap-5 my-3 flex-col sm:flex-row'>
          <img src="/svg/illustrations.svg" alt="" />
          <p className='text-[35px] sm:text-[40px] font-bold text-[#414141]'>نتیجه ای یافت نشد</p>
        </div>
      :
      currentData.map(consultant=>(
        <Card key={consultant.id} data={consultant} toggleReportModal={toggleReportModal}
        toggleProfileDetailsModal={toggleProfileDetailsModal}/>
      ))
    }
    </div>
    <Paginations perPage={perPage} total={filteredData.length} paginate={paginate} />
    </div>

    <ReportModal isReportModalOpen={isReportModalOpen} report={report} toggleReportModal={toggleReportModal}/>

    <ProfileDetailsModal toggleProfileDetailsModal={toggleProfileDetailsModal} isProfileDetailsModalOpen={isProfileDetailsModalOpen} consultantsData={consultantsData}/>
    </>
  )
}