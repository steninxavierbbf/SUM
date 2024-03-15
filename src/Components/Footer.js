import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-center items-center'>
       <div className='xl:h-[170px] xs:h-[230px] md:h-[230px]   xl:w-screen bg-sum-blue xs:px-0  flex justify-center items-center flex-col gap-5'>
        <h3 className='text-sum-white xs:text-[12px] md:text-[16px] font-regular xl:w-[60%] xs:w-[65%]  xl:px-20'>SUM Solutions ist eine Familie von Fahrrädern, die für das neue Leben in der Stadt entwickelt wurde und sich an den Bedürfnissen der modernen Stadtgesellschaft orientiert. Alle SUM-Fahrzeuge sind in Übereinstimmung mit diesem Ansatz konzipiert.</h3>
        <div className='text-sum-white xs:text-[12px] md:text-[16px] font-regular   flex justify-center items-center flex-row gap-10'>
        <p className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-sum-white before:absolute before:left-0 before:bottom-0 cursor-pointer'><Link to="/datenschutz">Datenschutz</Link></p>
        <p className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-sum-white before:absolute before:left-0 before:bottom-0 cursor-pointer'><Link to='/impressum'>Impressum</Link></p>
        </div>

       </div>
    </div>
  )
}

export default Footer