export default function Card({ data, toggleReportModal, toggleProfileDetailsModal}) {
    return (
        <>
        <div className=' w-full bg-white border border-[#E0DEF7] rounded-[12px]'>
            <div className='flex justify-between  p-5'> 
            <div className='bg-[#cb90441f] px-2 w-[206px] pt-5 pb-2 rounded-[8px] text-center'>
                <img src={data.image} alt='' className='mx-auto'/>
                <p className='my-2 text-[14px]'>{data.name}</p>
                <p className='text-[#1a376b] text-[13px]'>{data.phoneNumber}</p>
            </div>
            <div className='pr-5 w-full'>
            <div className='lg:flex justify-between items-center lg:border-b-2 border-[#E0DEF7] border-dashed lg:pb-5 text-center grid grid-cols-2 lg:gap-0 gap-6'>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>کد</p>
                    <p>{data.code}</p>
                </div>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>منطقه</p>
                    <p>{data.region}</p>
                </div>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>موجودی</p>
                    <p>{data.stock}</p>
                </div>
                <div className='grid gap-3'>
                    <p className='text-[#26397F]'>تعداد فایل</p>
                    <p>{data.fileCount}</p>
                </div>
            </div>
            <div className='lg:flex hidden mt-5 gap-3 justify-between items-center'>
                <button className='text-[14px] text-[#26397F]'>پیامک به مشاور</button>
                <button className='w-[117px] h-[40px] text-[#26397F] text-[14px] border border-[#26397F] rounded-[8px] transition-all' onClick={()=>toggleProfileDetailsModal(data)}>جزییات بیشتر</button>
                <button className='w-[104px] h-[40px] text-white text-[14px] border bg-[#26397F] rounded-[8px] transition-all' onClick={()=>toggleReportModal(data.name)}>مسدودسازی</button>
            </div>
            </div>
            </div>
            <div className='lg:hidden border-b-2 border-dashed'></div>
            <div className='lg:hidden flex  p-5 gap-2 justify-between items-center'>
                <button className='text-[14px] text-[#26397F]'>پیامک به مشاور</button>
                <button className='w-[117px] h-[40px] text-[#26397F] text-[14px] border border-[#26397F] rounded-[8px] transition-all' onClick={()=>toggleProfileDetailsModal(data)}>جزییات بیشتر</button>
                <button className='w-[104px] h-[40px] text-white text-[14px] border bg-[#26397F] rounded-[8px] transition-all' onClick={()=>toggleReportModal(data.name)}>مسدودسازی</button>
            </div>
        </div>
        </>
    )
  }
  