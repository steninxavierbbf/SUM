import React, { useState,useEffect, useRef,useCallback } from 'react'
import Logo from "../images/Logo_SUM.png"
import bikes from "../data/bannerImages.json"
import BannerSection from './BannerSection'
import Contact from './Contact'
const Header = () => {
    const[isScrolled,setIsScrolled]= useState(false)
    const sectionsRef=useRef([])
    const menus=["alpa","stealth","uco","kontakt"]
    const[visibleSection,setVisibleSection]=useState(menus[0])
    useEffect(() => {
      const options = {
        threshold: 0.5
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.getAttribute("id"));
  
           
          }
        });
      }, options);
  
  
      sectionsRef.current.forEach((section) => {
        observer.observe(section);
      });
      return () => {
        observer.disconnect();
      };
    }, []);
  
    const refCallback = useCallback((element) => {
      if (element) {
        sectionsRef.current.push(element);
      }
    }, []);
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
    <>
    <div className={`${isScrolled?"h-[150px]":"h-[300px]"} w-screen fixed top-0 left-0 bg-sum-white z-50`}>
        <div className='flex justify-center items-center gap-12 py-10 flex-col'>
        <img src={Logo} className={`object-contain w-72 ${isScrolled?"hidden ":"block"} `} />
        <div className={`flex justify-center items-center flex-row gap-10 font-bold text-[35px] ${isScrolled?"hidden ":"block"} `}>
          {menus.map((item,index)=>(
     <p className={`${visibleSection===item?"text-sum-blue [transition:all_0.6s_ease]":""}`} key={index}><a href={`#${item}`}>{item.toUpperCase()}</a></p>
          ))}
       
        </div>
        <div className={`flex justify-start items-center flex-row gap-48 font-bold text-[35px] ${isScrolled?"block":"hidden"} w-[60%]`}>
            <a href='/'><img src={Logo} className='object-contain w-48'/></a>
            
            <div className='flex justify-center items-center flex-row gap-10 font-bold text-[35px]'>
            {menus.map((item,index)=>(
     <p className={`${visibleSection===item?"text-sum-blue [transition:all_0.6s_ease]":""}`} key={index}><a href={`#${item}`}>{item.toUpperCase()}</a></p>
          ))}
            </div>
         
        </div>
        </div>
    </div>
    {bikes?.bikes?.map((bike,key)=>(
      <BannerSection bikes={bike} refcall={refCallback} key={key}/>
    ))}
    <div id="kontakt"  ref={refCallback}>
    <Contact/>
    </div>

    </>
  )
}

export default Header