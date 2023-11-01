import React from 'react'

function Brochure() {
  return (
      <>
      <div className='bg-[#13080E] py-10 relative overflow-hidden'>
      <div className='absolute left-[-18rem] top-3 z-0'>
          <img src="https://www.pngall.com/wp-content/uploads/11/Vector-Purple-PNG-Images.png" alt="logo"  width='100px' className='w-[40rem] h-[19rem] z-0'/>
        </div>

        <h3 className='text-2xl text-white pt-8 pb-6 flex justify-center z-20' style={{fontFamily:"ethnocentricregular"}}>2 DAYS | 16 EVENTS | 14 HOURS</h3>
        <h2 className='text-6xl text-white py-2 pb-8 flex justify-center z-20' style={{fontFamily:"ethnocentricregular"}}>REGISTER NOW</h2>  

        <div className="ml-auto flex justify-center items-center px-6 py-2 lg:ml-0 lg:p-0">
              <button className="inline-flex h-10 items-center justify-center  gap-2 border-2 rounded-[25px]  whitespace-nowrap bg-[#13080E] border-[#f856e5] px-10 py-6 text-xl font-medium tracking-wide text-white shadow-md shadow-y-md shadow-slate-200 transition duration-300 hover:text-white  hover:shadow-sm hover:shadow-slate-200 focus:bg-[#930066]focus:shadow-sm focus:shadow-slate-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-300 disabled:shadow-none z-20">
                <span className='text-[#f856e5] hover:text-white z-20' style={{fontFamily:"ethnocentricregular"}}>DOWNLOAD BROCHURE</span>
              </button>
        </div>      
      </div>
        
      </>
  )
}

export default Brochure
