import React from 'react'
import Typewriter from 'typewriter-effect';

function Techtop() {
  return (
      <>
      <div className='bg-[#13080E] relative overflow-x-hidden'>
        

      <div className='absolute right-[-15rem] z-0'>
        <img src="https://www.pngall.com/wp-content/uploads/11/Vector-Purple-PNG-Images.png" alt="logo"  width='100px' className='w-[30rem] h-[15rem] z-0'/>
        </div>

        <div className='absolute left-[-14rem] z-0'>
          <img src="https://www.pngall.com/wp-content/uploads/11/Vector-Purple-PNG-Images.png" alt="logo"  width='100px' className='w-[30rem] h-[15rem] z-0'/>
        </div>

        <h1 className='text-8xl text-white pt-14 pb-2 flex justify-center ' style={{fontFamily:"ethnocentricregular"}}>YUGANTRAN</h1>
        
        <h2 className='text-6xl text-white py-6 flex justify-center stroke-cyan-500 stroke-2' style={{fontFamily:"ethnocentricregular"}}>
        
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('TECHFEST 2K23')
              .pauseFor(2500)
              .deleteAll()
              .pauseFor(1500)
              typewriter.typeString('TECHFEST 2K23')
              .pauseFor(2500)
              .deleteAll()
              .pauseFor(1500)
              typewriter.typeString('TECHFEST 2K23')
              .start();
          }}
        />
        </h2>
        <h3 className='text-4xl text-white py-2 flex justify-center' style={{fontFamily:"ethnocentricregular"}}>7-8 NOVEMBER 2K23</h3>
      </div>
        
      </>
  )
}

export default Techtop
