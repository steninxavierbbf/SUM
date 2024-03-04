import React, { useState,useEffect } from 'react'
import Logo from "../images/Logo_SUM.png"
const Header = () => {
    const[isScrolled,setIsScrolled]= useState(false)
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div className={`${isScrolled?"h-[150px]":"h-[300px]"} w-screen fixed top-0 left-0 bg-sum-white z-50`}>
        <div className='flex justify-center items-center gap-12 py-10 flex-col'>
        <img src={Logo} className={`object-contain w-72 ${isScrolled?"hidden transition-all duration-700 delay-700":"block"} `} />
        <div className={`flex justify-center items-center flex-row gap-10 font-bold text-[30px] ${isScrolled?"hidden transition-all duration-700":"block"} `}>
            <p className='text-sum-blue'>ALPA</p>
            <p>STEALTH</p>
            <p>UCO</p>
            <p>KONTAKT</p>
        </div>
        <div className={`flex justify-start items-center flex-row gap-48 font-bold text-[30px] ${isScrolled?"block":"hidden"} w-[60%]`}>
            <img src={Logo} className='object-contain w-48'/>
            <div className='flex justify-center items-center flex-row gap-10 font-bold text-[30px]'>
            <p className='text-sum-blue'>ALPA</p>
            <p>STEALTH</p>
            <p>UCO</p>
            <p>KONTAKT</p>
            </div>
         
        </div>
        </div>
       
        
    </div>
  )
}

export default Header