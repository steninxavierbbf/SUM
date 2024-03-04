import React, { useRef, useState,useEffect } from 'react'
import image1 from "../images/Alpa/alpa_photo1.jpg"
import image2 from "../images/Alpa/alpa_photo2.jpg"
import image3 from "../images/Alpa/alpa_photo3.jpg"
import image4 from "../images/Alpa/alpa_photo4.jpg"
import Logo from "../images/Logo_SUM.png"
import "../main.css"
const BannerSection = () => {
const [imageNumber,setImageNumber]=useState(0)
const closeRef= useRef()
    const imageEnlargement=(number)=>{
        setImageNumber(number)
    }
    const handleClickOutside = (e) => {
        if (!closeRef.current?.contains(e.target)) {
   setImageNumber(0)
        }
      };
      useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
      }, []);
  return (
    <div className='flex justify-center  mt-[300px]'>
    <div className='w-[60%] '>
    <div className='grid-container'>
        <div className=' group relative gallery__item--1 cursor-pointer' onClick={()=>imageEnlargement(1)}>
<img className='object-cover block h-full w-full' src={image1}/>
<div class="absolute inset-0 h-full w-full [transition:all_0.8s_ease] group-hover:bg-sum-blue group-hover:bg-opacity-60 "></div>
      <div class=" absolute inset-0 flex items-center justify-center  [transition:all_0.10s_ease]">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwY
        AAACAklEQVR4nMWWPy9lURTFH+3gG0hmePGnlYwGlUJHI8J78SEEBYVCZOarIESi0CAzlfIVFIqX+JOIQvFCMiMY8pMt2+Rm2+867j1Y
        yW1u1l57nXP2OXsXCgEAeoAlYBuoAtdADTgCdoAFoK8QE0ADMAocEo4KUAIa8yb/CuyRHb+B1qzJB4AL8kOOaDBL8htH7BZYBiaATuCLfp36b
        0U5Fn+A/rds+4Ujsga0BcS3A+tO/CVQDCm4PRN4D0yH799/rRngwWjtSo60oFHH+ZuTJ/RmHb3JtIBDu+1Zkyc0N4xmJe2RSUKKqT2CgW9OYX
        73iEuGtJw3eUJ71WgveqRtQxqPaKBstLc8UtWQOiIakHciiTOP9NeQmiMaaDbaNY9UM6SmiAZajPaVRzp+xyPoMtonHmnHkCYiGpgMKcIFQ1q
        JaED6SBI/PVLfOz1EHcCd0e6pR64Y4nrO5NLcNo3mflpAiZeYyWFg3tErpQU06hiVhLTU2Qwrn3Pa8a/UdiyQGc55E9CuVgw8c7vtz5h6Lf4J
        MsPpGGVxp42lrHe7Sb9uvWprTsEl8Q8YK4QA6NcxKjZkwiqHmijqGJUVcuZTuvLMO9Gg22uvaBoO9EY9FZwky2XiGUCvDBPylALnWqzynei/H/U
        emWgm8iDFxMhnmzj9MAN1TLxszx9gYlhWrvUz9AijCFibavdbcwAAAABJRU5ErkJggg==" class="group-hover:block hidden h-9 w-9"/>
        </div>
</div>
<div className=' gallery__item--2 group relative cursor-pointer' onClick={()=>imageEnlargement(2)}>
<img className='object-cover block h-full w-full' src={image2}/>
<div class="absolute inset-0 h-full w-full [transition:all_0.8s_ease] group-hover:bg-sum-blue group-hover:bg-opacity-60 "></div>
      <div class=" absolute inset-0 flex items-center justify-center  [transition:all_0.10s_ease]">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwY
        AAACAklEQVR4nMWWPy9lURTFH+3gG0hmePGnlYwGlUJHI8J78SEEBYVCZOarIESi0CAzlfIVFIqX+JOIQvFCMiMY8pMt2+Rm2+867j1Y
        yW1u1l57nXP2OXsXCgEAeoAlYBuoAtdADTgCdoAFoK8QE0ADMAocEo4KUAIa8yb/CuyRHb+B1qzJB4AL8kOOaDBL8htH7BZYBiaATuCLfp36b
        0U5Fn+A/rds+4Ujsga0BcS3A+tO/CVQDCm4PRN4D0yH799/rRngwWjtSo60oFHH+ZuTJ/RmHb3JtIBDu+1Zkyc0N4xmJe2RSUKKqT2CgW9OYX
        73iEuGtJw3eUJ71WgveqRtQxqPaKBstLc8UtWQOiIakHciiTOP9NeQmiMaaDbaNY9UM6SmiAZajPaVRzp+xyPoMtonHmnHkCYiGpgMKcIFQ1q
        JaED6SBI/PVLfOz1EHcCd0e6pR64Y4nrO5NLcNo3mflpAiZeYyWFg3tErpQU06hiVhLTU2Qwrn3Pa8a/UdiyQGc55E9CuVgw8c7vtz5h6Lf4J
        MsPpGGVxp42lrHe7Sb9uvWprTsEl8Q8YK4QA6NcxKjZkwiqHmijqGJUVcuZTuvLMO9Gg22uvaBoO9EY9FZwky2XiGUCvDBPylALnWqzynei/H/U
        emWgm8iDFxMhnmzj9MAN1TLxszx9gYlhWrvUz9AijCFibavdbcwAAAABJRU5ErkJggg==" class="group-hover:block hidden h-9 w-9"/>
        </div>

</div>
<div className='gallery__item--3 group relative cursor-pointer' onClick={()=>imageEnlargement(3)}>
<img className='object-cover block h-full w-full' src={image3}/>
<div class="absolute inset-0 h-full w-full [transition:all_0.8s_ease] group-hover:bg-sum-blue group-hover:bg-opacity-60 "></div>
      <div class=" absolute inset-0 flex items-center justify-center  [transition:all_0.10s_ease]">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwY
        AAACAklEQVR4nMWWPy9lURTFH+3gG0hmePGnlYwGlUJHI8J78SEEBYVCZOarIESi0CAzlfIVFIqX+JOIQvFCMiMY8pMt2+Rm2+867j1Y
        yW1u1l57nXP2OXsXCgEAeoAlYBuoAtdADTgCdoAFoK8QE0ADMAocEo4KUAIa8yb/CuyRHb+B1qzJB4AL8kOOaDBL8htH7BZYBiaATuCLfp36b
        0U5Fn+A/rds+4Ujsga0BcS3A+tO/CVQDCm4PRN4D0yH799/rRngwWjtSo60oFHH+ZuTJ/RmHb3JtIBDu+1Zkyc0N4xmJe2RSUKKqT2CgW9OYX
        73iEuGtJw3eUJ71WgveqRtQxqPaKBstLc8UtWQOiIakHciiTOP9NeQmiMaaDbaNY9UM6SmiAZajPaVRzp+xyPoMtonHmnHkCYiGpgMKcIFQ1q
        JaED6SBI/PVLfOz1EHcCd0e6pR64Y4nrO5NLcNo3mflpAiZeYyWFg3tErpQU06hiVhLTU2Qwrn3Pa8a/UdiyQGc55E9CuVgw8c7vtz5h6Lf4J
        MsPpGGVxp42lrHe7Sb9uvWprTsEl8Q8YK4QA6NcxKjZkwiqHmijqGJUVcuZTuvLMO9Gg22uvaBoO9EY9FZwky2XiGUCvDBPylALnWqzynei/H/U
        emWgm8iDFxMhnmzj9MAN1TLxszx9gYlhWrvUz9AijCFibavdbcwAAAABJRU5ErkJggg==" class="group-hover:block hidden h-9 w-9"/>
        </div>
</div>
<div className='gallery__item--4 group relative cursor-pointer' onClick={()=>imageEnlargement(4)}>
<img className='object-cover block h-full w-full' src={image4}/>
<div class="absolute inset-0 h-full w-full [transition:all_0.8s_ease] group-hover:bg-sum-blue group-hover:bg-opacity-60 "></div>
      <div class=" absolute inset-0 flex items-center justify-center  [transition:all_0.10s_ease]">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwY
        AAACAklEQVR4nMWWPy9lURTFH+3gG0hmePGnlYwGlUJHI8J78SEEBYVCZOarIESi0CAzlfIVFIqX+JOIQvFCMiMY8pMt2+Rm2+867j1Y
        yW1u1l57nXP2OXsXCgEAeoAlYBuoAtdADTgCdoAFoK8QE0ADMAocEo4KUAIa8yb/CuyRHb+B1qzJB4AL8kOOaDBL8htH7BZYBiaATuCLfp36b
        0U5Fn+A/rds+4Ujsga0BcS3A+tO/CVQDCm4PRN4D0yH799/rRngwWjtSo60oFHH+ZuTJ/RmHb3JtIBDu+1Zkyc0N4xmJe2RSUKKqT2CgW9OYX
        73iEuGtJw3eUJ71WgveqRtQxqPaKBstLc8UtWQOiIakHciiTOP9NeQmiMaaDbaNY9UM6SmiAZajPaVRzp+xyPoMtonHmnHkCYiGpgMKcIFQ1q
        JaED6SBI/PVLfOz1EHcCd0e6pR64Y4nrO5NLcNo3mflpAiZeYyWFg3tErpQU06hiVhLTU2Qwrn3Pa8a/UdiyQGc55E9CuVgw8c7vtz5h6Lf4J
        MsPpGGVxp42lrHe7Sb9uvWprTsEl8Q8YK4QA6NcxKjZkwiqHmijqGJUVcuZTuvLMO9Gg22uvaBoO9EY9FZwky2XiGUCvDBPylALnWqzynei/H/U
        emWgm8iDFxMhnmzj9MAN1TLxszx9gYlhWrvUz9AijCFibavdbcwAAAABJRU5ErkJggg==" class="group-hover:block hidden h-9 w-9"/>
        </div>
</div>
</div>
<div className='text-[18px] flex justify-center items-center '>
    <p className='w-[60%] mb-20'>ALPA is a multifunctional vehicle, ideal for rapid postal or food delivery services but also convertible for 
    family use, comfortably carrying 2 children in the approved seats, or for the leisure travels</p>
    </div>
</div>
{imageNumber?(
  <div
  className="fixed inset-0 z-50 lg:flex gap-10 md:items-center md:justify-center flex-col
  sm:flex sm:flex-col  overflow-x-hidden    outline-none focus:outline-none 
transition-transform  duration-700 transform 
hover:opacity-100 backdrop-blur-sm md:bg-sum-white/100 sm:bg-sum-white/100 shadow-xl animate-in fade-in text-white"
>
    <img src={Logo} className='w-44'/>
    <img src={imageNumber===1?image1:imageNumber===2?image2:imageNumber===3?image3:image4} className='w-[90%] h-[75%] object-contain' />
</div>
):""}
  </div>
  )
}

export default BannerSection