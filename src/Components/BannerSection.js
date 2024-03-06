import React, { useRef, useState,useEffect } from 'react'

import Logo from "../images/Logo_SUM.png"

import "../main.css"
const BannerSection = ({bikes,refcall}) => {
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

const sample= bikes?.name!==undefined? bikes?.name:""
console.log(sample)
  return (
    <div>
    <div className={`flex justify-center items-center flex-col  ${bikes?.name==="alpa"? "xs:mt-0 lg:mt-[150px]":""}`} id={bikes?.name!==undefined? bikes?.name:""} ref={refcall}>
    <div className={`md:w-[60%] xs:w-[90%] ${bikes?.name!==undefined? "md:pb-20 xs:pb-5 xs:mt-[100px] md:mt-[150px]":""} ${bikes?.name==="stealth"?"bg-sum-gray":"bg-sum-white"} `} >

{bikes?.name==="stealth"?( <div className='grid-container '>
            <div className={`gallery__item--2-1 group relative  cursor-pointer`} onClick={()=>imageEnlargement(1)}>
    <img className='object-cover block h-full w-full' src={bikes?.images[0]}/>
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
    <div className={`gallery__item--2-2 group relative cursor-pointer`} onClick={()=>imageEnlargement(2)}>
    <img className='object-cover block h-full w-full' src={bikes?.images[1]}/>
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
    <div className={`gallery__item--2-3 group relative cursor-pointer `}onClick={()=>imageEnlargement(3)}>
    <img className='object-cover block h-full w-full' src={bikes?.images[2]}/>
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
    <div className={`gallery__item--2-4 group relative cursor-pointer`} onClick={()=>imageEnlargement(4)}>
    <img className='object-cover block h-full w-full' src={bikes?.images[3]}/>
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
    </div>):
      bikes?.name!==undefined? (<div className='grid-container'>
      <div className={`gallery__item--1 gallery__item--1 group relative  cursor-pointer`} onClick={()=>imageEnlargement(1)}>
<img className='object-cover block h-full w-full' src={bikes?.images[0]}/>
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
<div className={`gallery__item--2 group relative cursor-pointer`} onClick={()=>imageEnlargement(2)}>
<img className='object-cover block h-full w-full' src={bikes?.images[1]}/>
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
<div className={`gallery__item--3 group relative cursor-pointer `}onClick={()=>imageEnlargement(3)}>
<img className='object-cover block h-full w-full' src={bikes?.images[2]}/>
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
<div className={`gallery__item--4 group relative cursor-pointer`} onClick={()=>imageEnlargement(4)}>
<img className='object-cover block h-full w-full' src={bikes?.images[3]}/>
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
</div>):""
       
    }    
    {bikes?.name!==undefined? ( <div className='xs:text-[13px] md:text-[22px] flex justify-center items-center font-regular'>
        <p className='md:w-[60%] xs:w-[90%] '>ALPA is a multifunctional vehicle, ideal for rapid postal or food delivery services but also convertible for 
        family use, comfortably carrying 2 children in the approved seats, or for the leisure travels</p>
        </div>):""}
   
    </div>
  
{imageNumber?(
  <div
  className="fixed inset-0 z-50 lg:flex gap-10 md:items-center md:justify-center flex-col
  sm:flex sm:flex-col  overflow-x-hidden    outline-none focus:outline-none 
transition-transform  duration-700 transform 
hover:opacity-100 backdrop-blur-sm md:bg-sum-white/100 sm:bg-sum-white/100 shadow-xl animate-in fade-in text-white"
>
    <img src={Logo} className='w-44 object-contain md:block hidden' />
    <img src={imageNumber===1?bikes?.images[0]:imageNumber===2?bikes?.images[1]:imageNumber===3?bikes?.images[2]:bikes?.images[3]} className='w-[90%] h-[75%] object-contain' />
</div>
):""}
  </div>

  </div>
  )
}

export default BannerSection