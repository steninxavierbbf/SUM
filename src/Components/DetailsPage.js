import React, { useState,useEffect, useRef,useCallback } from 'react'
import BannerSection from './BannerSection'
import Contact from './Contact'
import bikes from "../data/bannerImages.json"
import axios from 'axios'
import Header from './Header'
const DetailsPage = ({call}) => {
    const[category,setCategory]= useState([])
    const sectionsRef=useRef([])
    const menus=["alpa","stealth","uco","kontakt"]
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  bikes?.bikes?.map((bike)=>categoriesBikes?.map((item)=>{
    if(item?.bbf_cat_SHORTNAME===bike?.name){
      bike.id=item?.bbf_cat_ID_PUBLICGRPORDER
      bike.description=item?.translations?.german?.DESCRIPTION
    }
  }))
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
  return (
    <div> 
        <Header visibleSection={visibleSection}/>
         <div className='flex justify-center items-center flex-col xs:mt-[100px] md:mt-[150px] xl:mt-[300px] xs:gap-5 md:gap-16'>
      <h3 className='xs:text-[20px] md:text-[30px] font-bold xl:w-[60%] xs:w-[90%] text-center'>SUM – Substainable Urban Mobility</h3>
    <div className='text-sum-black  xl:w-[60%] xs:w-[90%] xs:text-[16px] md:text-[20px] font-regular'>SUM ist ein italienischer Fahrradproduzent, der sich auf die Produktion von elektrischen Lastenfahrrädern spezialisiert hat – um eine nachhaltige urbane Fortbewegung in allen Facetten möglich zu machen.

Bei BBF BIKE finden Sie ab Mitte März drei Cargo-Bikes Modelle der  „URBAN LINE“-Serie.

Sie bieten optimale Lösungen für den privaten Transport von Kindern und Einkäufen ebenso wie für die gewerbliche Mobilisierung von größeren Lasten und sperrigen Gegenständen.

Dank der kraftvollen Antriebe und der durchdachten, variablen Gepäckoptionen haben Sie mit den SUM-Bikes immer den richtigen Partner an Ihrer Seite</div>
    </div>
    {bikes?.bikes?.map((bike,key)=>(
      
          <BannerSection bikes={bike}  refcall={refCallback} key={key}/>
    ))}
    <div id="kontakt"  ref={refCallback}>
    <Contact/>
    </div></div>
  )
}

export default DetailsPage