import React, { useState,useEffect, useRef,useCallback } from 'react'
import Logo from "../images/Logo_SUM.png"
import { Link, animateScroll as scroll } from "react-scroll";
import DetailsPage from './DetailsPage'
const Header = ({visibleSection}) => {
    const[isScrolled,setIsScrolled]= useState(false)
   
    const menus=["alpa","stealth","uco","kontakt"]
    



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
     const goToTop=()=>{
      scroll.scrollToTop();
     }
  return (
    <div className=''>
    {/* mobile navigation */}
    <div className='xs:h-[80px] md:h-[100px] xl:hidden  w-screen fixed top-0 left-0 bg-sum-white z-50 xs:flex justify-center xs:flex-col items-center'>
      <div className=' flex justify-between items-center flex-row gap-5 font-bold md:text-[20px] xs:text-[12px] w-[90%] py-5'>
      <img src={Logo} onClick={goToTop} className='object-contain xs:w-24 md:w-40 cursor-pointer'/>
      <div className='flex justify-center items-center flex-row gap-4 font-bold md:text-[25px] xs:text-[13px]'>
            {menus.map((item,index)=>(
     <p className={`${visibleSection===item?"text-sum-blue [transition:all_0.6s_ease]":""}`} key={index}>
      
      <Link activeClass='active' to={item} spy={true} smooth={true} offset={0} duration={500}> <a href={`#${item}`}>{item.toUpperCase()}</a></Link>
     
      </p>
          ))}
            </div>
            {/* <div className='h-[2px] bg-sum-gray w-full flex items-end justify-center flex-col'></div> */}
      </div>
      <div className='h-[2px] bg-sum-gray w-full'></div>
    </div>

    {/* Desktop navigation */}
    <div className={` w-screen fixed top-0 left-0 bg-sum-white z-50 xs:hidden xl:block `}>

        <div className={`flex justify-center items-center  ${isScrolled?" md:py-[16px]":"md:py-10"}`}>
          <div className='flex w-[60%] justify-between items-center'>
        <img src={Logo} className={`object-contain  cursor-pointer ${isScrolled?"2xl:w-40 xl:w-32":"xl:w-60 2xl:w-72"}`} onClick={goToTop}/>
        <div className={`flex justify-center items-center flex-row xs:gap-5 xl:gap-5 2xl:gap-10 font-bold   ${isScrolled?" xl:text-[20px]":"xl:text-[35px]"} `}>
          {menus.map((item,index)=>(
     <p className={`${visibleSection===item?"text-sum-blue [transition:color_0.6s_ease]":""}`} key={index}>
      <Link activeClass='active' to={item} spy={true} smooth={true} offset={0} duration={700}>
      <a href={`#${item}`}>{item.toUpperCase()}</a>
      </Link>
   
      
      </p>
          ))}
       
        </div>
        </div>
        </div>
        <div className='h-[2px] bg-sum-gray w-full'></div>
    </div>
   
    

    
   

    </div>
  )
}

export default Header