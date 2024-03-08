import React, { useState,useEffect, useRef,useCallback } from 'react'
import Logo from "../images/Logo_SUM.png"
import bikes from "../data/bannerImages.json"
import BannerSection from './BannerSection'
import Contact from './Contact'
import { Link, animateScroll as scroll } from "react-scroll";
import axios from 'axios'
const Header = () => {
    const[isScrolled,setIsScrolled]= useState(false)
    const[category,setCategory]= useState([])
    const sectionsRef=useRef([])
    const menus=["alpa","stealth","uco","contact"]
    const[visibleSection,setVisibleSection]=useState(menus[0])
    const categories= async() =>{
      const response = await axios.get("https://data.bbf-bike.de/catalog/list/categories/39")
      setCategory(response.data)
    }


    useEffect(()=>{
    categories()
    },[])
const mainSection= category?.filter((item)=>item?.bbf_cat_name==="2024").map((item)=>item?.bbf_cat_ID_PUBLICGRPORDER).find((item)=>item)

const categoriesBikes=category?.filter((item)=>item?.bbf_cat_parent_category===mainSection)

bikes?.bikes?.map((bike)=>categoriesBikes?.map((item)=>{
  if(item?.bbf_cat_SHORTNAME===bike?.name){
    bike.id=item?.bbf_cat_ID_PUBLICGRPORDER
    bike.description=item?.translations?.german?.DESCRIPTION
  }
}))

console.log(bikes)

    useEffect(() => {
      const options = {
        threshold: 0.1
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
     const goToTop=()=>{
      scroll.scrollToTop();
     }
  return (
    <>
    {/* mobile navigation */}
    <div className='h-[80px] md:hidden  w-screen fixed top-0 left-0 bg-sum-white z-50 xs:flex justify-center items-center'>
      <div className=' flex justify-between items-center flex-row gap-5 font-bold text-[12px] w-[90%] '>
      <img src={Logo} className='object-contain w-24 cursor-pointer'/>
      <div className='flex justify-center items-center flex-row gap-4 font-bold text-[13px]'>
            {menus.map((item,index)=>(
     <p className={`${visibleSection===item?"text-sum-blue [transition:all_0.6s_ease]":""}`} key={index}><a href={`#${item}`}>{item.toUpperCase()}</a></p>
          ))}
            </div>
      </div>
   
    </div>

    {/* Desktop navigation */}
    <div className={`${isScrolled?"h-[150px]":"h-[300px]"} w-screen fixed top-0 left-0 bg-sum-white z-50 xs:hidden md:block`}>
        <div className='flex justify-center items-center sm:gap-0 md:gap-12 xs:py-0 md:py-10 flex-col'>
        <img src={Logo} className={`object-contain w-72 ${isScrolled?"hidden ":"block"}`} />
        <div className={`flex justify-center items-center flex-row xs:gap-5 md:gap-10 font-bold text-[35px] ${isScrolled?"hidden ":"block"} `}>
          {menus.map((item,index)=>(
     <p className={`${visibleSection===item?"text-sum-blue [transition:all_0.6s_ease]":""}`} key={index}><a href={`#${item}`}>{item.toUpperCase()}</a></p>
          ))}
       
        </div>
        <div className={`flex justify-start items-center flex-row gap-48 font-bold text-[35px] ${isScrolled?"block":"hidden"} w-[60%]`}>
           <img src={Logo} className='object-contain w-48 cursor-pointer' onClick={goToTop}/> 
            
            <div className='flex justify-center items-center flex-row gap-10 font-bold text-[35px]'>
            {menus.map((item,index)=>(
     <p className={`${visibleSection===item?"text-sum-blue [transition:all_0.6s_ease]":""}`} key={index}><a href={`#${item}`}>{item.toUpperCase()}</a></p>
          ))}
            </div>
         
        </div>
        </div>
    </div>
    
    {bikes?.bikes?.map((bike,key)=>(
      
          <BannerSection bikes={bike}  refcall={refCallback} key={key}/>
    ))}
    <div id="contact"  ref={refCallback}>
    <Contact/>
    </div>

    </>
  )
}

export default Header