import React, { useRef, useState,useEffect } from 'react'
import axios from 'axios'
import "../main.css"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const BannerSection = ({bikes,refcall}) => {
const [imageNumber,setImageNumber]=useState(0)
const[block,setBlock]=useState([])
const[article,setArticle]= useState([])
const [currentIndex, setCurrentIndex] = useState(0);

// const prevImage = () => {
//   setCurrentIndex((prevIndex) =>
//     prevIndex === 0 ? images?.images?.length - 1 : prevIndex - 1
//   );
// };
// const nextImage = () => {
//   setCurrentIndex((prevIndex) =>
//     prevIndex === images?.images?.length - 1 ? 0 : prevIndex + 1
//   );
// };

// useEffect(() => {
  
//     const timer = setTimeout(() => {
//       setCurrentIndex((prevIndex) => {
//         const nextIndex =
//           images && images?.images.length > 0
//             ? (prevIndex + 1) % images.images.length
//             : 0;

//         return nextIndex;
//       });
//     }, 5000);
//     return () => clearTimeout(timer);
  
// }, [currentIndex]);



const bikesArray= async()=>{
  if(bikes?.id!==undefined){
    const response = await axios.get(`https://data.bbf-bike.de/catalog/list/categories/articles/${bikes?.id}`)
    
    setBlock(response?.data?.blocks)
    setArticle(response?.data?.articles)
  }
}
const groupedData = Object.values(
  article.reduce((r, o) => {
      (r[o?.descriptions.default.TEXT5] = r[o?.descriptions.default.TEXT5] || []).push(o);
      return r;
  }, {})
);

const groupedImages=groupedData?.map(item=>item.map((item)=>item?.media[0]?.IMAGENAME))


const groupedColors=groupedData?.map(item=>item.map((item)=>item?.properties?.default?.primary?.filter((item)=>item.ATTRIBUTE==="Farbe")))



// const mergedData=groupedData?.map((item)=>{
//   Object.values(item.reduce((acc, obj) => {
//     if (!acc[obj.PARTNAME]) {
//       acc[obj.PARTNAME] = obj;
//     } else {
//       acc[obj.PARTNAME].myData = acc[obj.PARTNAME].media ?? []; 
//       acc[obj.PARTNAME].myData = acc[obj.PARTNAME].media.concat(obj.media);
//     }
//     return acc;
//   }, {}));
// })


// console.log(mergedData)

console.log(groupedData)
useEffect(()=>{
bikesArray()
},[bikes?.id])

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
    <div>
    <div className={`flex justify-center items-center flex-col  ${bikes?.name==="alpa"? "xs:mt-0 lg:mt-[150px]":""}`} id={bikes?.name!==undefined || bikes?.id!==undefined? bikes?.name:""} ref={refcall}>
    <div className={`xl:w-[60%] xs:w-[90%] ${bikes?.name!==undefined? "md:pb-20 xs:pb-5 xs:mt-[100px] xl:mt-[150px]":""} ${bikes?.name==="stealth"?"bg-sum-white":"bg-sum-white"} `} >

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
    {bikes?.name!==undefined? ( <div className='xs:text-[16px] md:text-[20px] flex justify-center items-center font-regular mb-6'>
        <p className='xl:w-[65%] xs:w-[90%] '>
          {bikes?.description?.split(",").map((item)=>(
          <div className='flex justify-start gap-3 items-start'><div>•</div><div>{item}</div> </div>
        ))}</p>
    
        </div>):""}

        {
          bikes?.name!==undefined?(
          <div className='md:w-full xs:w-[90%] md:px-20 flex justify-center items-center xs:mt-8 md:mt-16 xl:mt-32'>
            
            
            
            
            {/* {article?.map((item)=>(
            (
              <div className=''><img src={`https://media.bbf-bike.de/shop/images/${item?.media[1]?.IMAGENAME}`} className='h-[350px] w-[350px] object-contain'/></div>
            )
          ))} */}


{/* <div className="bg-white rounded-md">
                <div
                  className="relative flex justify-center items-center flex-col"
                >
                 
                  
                 
                      {groupedData?.map((item, index) => (
                        <div className="flex justify-center items-center cursor-pointer">
                          {item.map((item)=>(
                            <img
                            src={`https://media.bbf-bike.de/shop/images/${item?.media[0]?.IMAGENAME}`}
                            alt={`Slide ${index + 1}`}
                            className={`md:w-56 md:h-56 sm:h-48 sm xl:w-80 xl:h-80 object-contain p-4 ${
                              index === currentIndex &&
                              typeof currentIndex === "number"
                                ? "block"
                                : "hidden"
                            }`}
                          />
                          ))}
                          
                        </div>
                      ))}
              
                 

                  <button
                    type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={prevImage}
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXM
          AAAsTAAALEwEAmpwYAAACSElEQVR4nO2az04UQRDGfycXDxpMFLzJ0QOc8CbeDMREI0f+PAOB8BaABw0mhiuPIKzKGx
          DjWdg/J8E1EPAsQijTSZlslpmdmZ7umR7Cl3zJbHantr5UT3VV9cANri/uAdPAGlAH9oHfwJnSXO/pd+Y3r4FBAkEN
          mAd2gAtAMtLc8xmYU1uF4zawDPy0cD6Oh8ASMFCUiBdA26GAXraAKZ8CTOjfeRTQy02NvFMMA98KFCHKr8CQKxEjGm4pi
          U31IRceaBqVktkGHtqKGChpOUmfZWaVoj8E4Lz0cN0mxUqgnEwrwoSvEYDDEsNW2k1zOQBnJYGLaaJxGICjksCDpAd/Puc
          fHAHjwEQBYmb7CdnJKWJU7TwpQMinfv3EhQMRo/rZt5Bz4G6UkGlLg8fAmNp4DPwqQIQoX0YJeVORSEgXV6OE1CsUCVF+jBL
          SrFAkRGkK2is4rVAkpMuXKzhLebNJrb7xNKUvf0IX8iyPENul1QltaTUq+LDv+Ui/nVDS75qFobIjs+KzROmUXaIMVqxo/BtX
          NBp8qVAZv00fzOU0fqQi0u4DeThzXVrdWyRgKQBHJYELSSL+RyWEManEsJll4jgVgMMSwUvgORnxPgDHpYdvsUBNB8cSCHfTPO
          BxuB/QscIwOTGSsQ12zQbwCEcYKmmZ7ephk5fD0MuCRGz4Pnuf9LzU9m1SrC1qOto/cCjgh+7YpbwBUdOpeF1nsVmdP9cqdiZPan
          UN0xu80jHmlvbTJ10v1Zjr79qermhTdMe5FzcgDPwDzOEXEz5EkHIAAAAASUVORK5CYII="
                      className="md:h-9 md:w-9 sm:h-6 sm:w-6 "
                    />
                  </button>
                  <button
                    type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={nextImage}
                    data-carousel-next
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmp
         wYAAACRUlEQVR4nO2az0sVURTHP6ueLQqF0na5bKGrXJXLUIIil/74GyTxvzBbFAXRtj+hepX/gUTrfD5dpSVKutYMTwwcIR7z8947d
         84Tv/CFgfdm5nw4d+6cc+/ApS6uhoAZYBVoAx3gCDhRJ8cb+lvynyfAIEbUAhaANeAvIBWdnPMZmNdrRddVYBn46RB8lneBJWAgFsRD
         YDsgQK+3gOk6AZLUv6wRoNfvNPNBNQJ8iwgh6q/AcCiIUU23NOSuxuClmzqNSsPeBm65Qgw0NJwkZ5g5TdFvDAQvPX7lMsWKUU+VhUjS
         t2kgYMnwVtmX5rKBYKXAT8tkY9dAoFLgnaIHfyFCEPeBCWDf8zpzeSBrEUDu6r3GPGE+5fUTLqV4Ve8rhC/MKXA9DWQmAsS5D4Bxve8d
         4JfjdR6lgTyPCBIqM8/SQNqRQUJk5n0aSLcBEN/MdNJADhsC8cnMQRrIScmT71G/JkrGcuwDMmkd5NDQ0NrzGVqbffiwb1idfvdCTL+
         rfZQJUa9YK1GqZkLySpTBPisa/2QVjYm+9FEZ/5EczUcAmQzUWM1elFb3CgVaMhCoFHixCOI8KxaWSSXD3SorjtMGApYUnwEPqKjXBgK
         XHr/AQS1dOBYjXi/zgGfphqFthRE8NdpgGyxald8mkIYbGmbrutlUy2boWSSIt3XvvU/VPNQ6LlOsq1q6tL8TEOCHvrEb+QKipavibV2
         LrRr8qVaxsz5Ta2glvcFjXcb8oP307/8+qkmOv2t7uqJN0bXgUVwKG/oHEqcXDufAk+UAAAAASUVORK5CYII="
                      className="md:h-9 md:w-9 sm:h-6 sm:w-6"
                    />
                  </button>
                
              </div>

</div> */}







<div className={`grid grid-cols-1 gap-24`}>
          {groupedData.map((item)=>(
            <div className='flex justify-center items-center flex-col'>
               <p className='xs:mb-6 md:mb-16 text-sum-blue xs:text-[15px] md:text-[30px] font-bold'>{item[0]?.descriptions?.default?.TEXT5}</p>

               <Carousel width="700px" dynamicHeight={false} showIndicators={false} showArrows={false} autoPlay infiniteLoop={true} stopOnHover={true} showStatus={false} className='md:block xs:hidden'>
                
              {item.map((item)=>(
              <div className=''><img src={`https://media.bbf-bike.de/shop/images/${item?.media[0]?.IMAGENAME}`} className='h-full object-contain'/></div>
            ))}
             </Carousel> 
             
             <Carousel width="250px" dynamicHeight={false} showIndicators={false} showArrows={false} showStatus={false} className='md:hidden xs:block'>
                
                {item.map((item)=>(
                <div className=''><img src={`https://media.bbf-bike.de/shop/images/${item?.media[0]?.IMAGENAME}`} className='h-full object-contain'/></div>
              ))}
               </Carousel>
             <div>
           
            {/* {item[0]?.properties?.default?.primary?.filter((item)=>item.ATTRIBUTE!=="Marke" ).map((item,index)=>(
              <div className={`flex justify-between items-center font-regular py-1 px-3 text-[18px] ${
                index % 2 === 0 ? "bg-sum-blue bg-opacity-60" : ""
              }`} key={index}>
                <p className='mb-2'>{item.ATTRIBUTE}</p>
                <p>{item.VALUE}</p>
              </div>
            ))} */}
              <div className='flex justify-center items-center xs:mt-8 md:mt-20'>
              <div className='grid xl:grid-cols-2 xs:grid-cols-1 xs:gap-10 md:gap-20'>
             <div className='flex justify-start items-start gap-3 flex-col'>
              <p className='md:text-[20px] xs:text-[14px] text-sum-blue font-semibold'>SPEZIFIKATIONEN</p>
              <div className='flex justify-center items-start gap-3 flex-col'>{item[0]?.descriptions?.default?.TEXT1?.split(",").map((item)=>(
                <div className='flex justify-start gap-3 items-center'><div className='h-1 xs:w-3 md:w-5 bg-sum-blue'></div><div className='xs:text-[14px] md:text-[18px] font-regular'>{item}</div> </div>
              ))}</div>
             </div>

 
             <div className='flex justify-start items-start gap-3 flex-col'>
              <p className='md:text-[20px] xs:text-[14px] text-sum-blue font-semibold'>MECHANISCHE SPEZIFIKATIONEN</p>
              <div className='flex justify-center items-start gap-3 flex-col'>{item[0]?.descriptions?.default?.TEXT4?.split(",").map((item)=>(
                <div className='flex justify-start gap-3 items-center'><div className='h-1 xs:w-3 md:w-5 bg-sum-blue'></div><div className='xs:text-[14px] md:text-[18px] font-regular'>{item}</div> </div>
              ))}</div>
             </div>


             <div className='flex justify-start items-start gap-3 flex-col '>
              <p className='md:text-[20px] xs:text-[14px] text-sum-blue font-semibold'>KONNEKTIVITÄT</p>
              <div className='flex justify-center items-start gap-3 flex-col'>{item[0]?.descriptions?.default?.TEXT2?.split(",").map((item)=>(
                <div className='flex justify-start gap-3 items-center'><div className='h-1 xs:w-3 md:w-5 bg-sum-blue'></div><div className='xs:text-[14px] md:text-[18px] font-regular'>{item}</div> </div>
              ))}</div>
             </div>
            

             <div className='flex justify-start items-start gap-3 flex-col '>
              <p className='md:text-[20px] xs:text-[14px] text-sum-blue font-semibold'>ELEKTRISCHE SPEZIFIKATIONEN</p>
              <div className='flex justify-center items-start gap-3 flex-col'>{item[0]?.descriptions?.default?.TEXT3?.split(",").map((item)=>(
                <div className='flex justify-start gap-3 items-center'><div className='h-1 xs:w-3 md:w-5 bg-sum-blue'></div><div className='xs:text-[14px] md:text-[18px] font-regular'>{item}</div> </div>
              ))}</div>
             </div>

             <div className='flex justify-start items-start gap-3 flex-col'>
              <p className='md:text-[20px] xs:text-[14px] text-sum-blue font-semibold'>TRAGFÄHIGKEIT</p>
              <div className='flex justify-center items-start gap-3 flex-col'>{item[0]?.descriptions?.default?.TEXT6?.split(",").map((item)=>(
                <div className='flex justify-start gap-3 items-center'><div className='h-1 xs:w-3 md:w-5 bg-sum-blue'></div><div className='xs:text-[14px] md:text-[18px] font-regular'>{item}</div> </div>
              ))}</div>
             </div>

             </div>
             </div>

             </div>
             </div>
           

          ))}
  
          
  </div></div>):""
        }
   {/* <Carousel>
               
               {groupedImages?.map((item)=>item.map((item)=>(
                  <div>
                 <img src={`https://media.bbf-bike.de/shop/images/${item}`} className='h-[350px] w-[350px] object-contain'/>
                 </div>
               )))}
             
             
          
            
              </Carousel>  */}
    </div>
  
{imageNumber?(
  <div
  className="fixed inset-0 z-50 xs:flex gap-10 xs:items-center xs:justify-center flex-col
  overflow-x-hidden    outline-none focus:outline-none 
transition-transform  duration-700 transform 
hover:opacity-100 backdrop-blur-sm md:bg-sum-white/40 sm:bg-sum-white/40 shadow-xl animate-in fade-in text-white cursor-pointer"
>
    
    <img src={imageNumber===1?bikes?.images[0]:imageNumber===2?bikes?.images[1]:imageNumber===3?bikes?.images[2]:bikes?.images[3]} className='md:w-[65%] md:h-[80%] xs:w-[90%] xs:h-[90%] xs:object-contain md:object-cover' />
</div>
):""}
  </div>

  </div>
  )
}

export default BannerSection