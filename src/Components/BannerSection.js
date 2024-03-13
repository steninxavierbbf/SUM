import React, { useRef, useState,useEffect } from 'react'
import axios from 'axios'
import "../main.css"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const BannerSection = ({bikes,refcall}) => {
const [imageNumber,setImageNumber]=useState(0)
const[block,setBlock]=useState([])
const[article,setArticle]= useState([])
const[selectedColor,setSelectedColor]=useState("")
const[selectedBlock,setSelectedBlock]=useState([])


const bikesArray= async()=>{
  try{
    if(bikes?.id!==undefined){
      const response = await axios.get(`https://data.bbf-bike.de/catalog/list/categories/articles/${bikes?.id}`)
      setBlock(response.data.blocks)
      setArticle(response.data.articles)
    }
  }
  catch(err){
    console.log(err)
  }

}
// const groupedData = Object.values(
//   article.reduce((r, o) => {
//       (r[o?.descriptions.default.TEXT5] = r[o?.descriptions.default.TEXT5] || []).push(o);
//       return r;
//   }, {})
// );

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

      const groupedBikes = {};

      block?.forEach((block) => {
        const bike = article?.find((bike) => bike.ID_PARTS === block.ID_PARTS);
       
        if (bike) {
          if (!groupedBikes[block.BLOCK]) {
            groupedBikes[block.BLOCK] = [];
          }
    
          const existingProduct = groupedBikes[block.BLOCK].find(
            (p) =>
              p.images.join(",") ===
              bike.media.map((img) => img.IMAGENAME).join(",")
          );
    
          const findTheSizeAndModelName = (matchingString) => {
            for (const element of bike.properties.default.primary) {
              if (element.ATTRIBUTE === matchingString) {
                return element.VALUE;
              }
            }
            return null;
          };
          const findColor = (matchingString) => {
            for (const element of bike.properties.default.primary) {
              if (element.ATTRIBUTE === matchingString) {
                return element.SHORTNAME;
              }
            }
            return null;
          };
          const secondDescriptionPopUp = bike.descriptions.TEXT6;
          const rimSize = findTheSizeAndModelName("Rahmenhöhe");
          const name = findTheSizeAndModelName("Modellname");
          const color = findColor("Farbe");
        
          const PrimaryProperties = () => bike.properties.default.primary;
          // const englishTranslations = bike.properties.translations.english;
          const properties = PrimaryProperties();
    
          const filteredPrimaryProperties = properties.filter(
            (item) =>
              item.ATTRIBUTE !== "Artikelgruppe" && item.ATTRIBUTE !== "Rahmenhöhe"
          );
    
          const secondaryProperties = () => bike.properties.default.secondary;
          const propertiesSecondary = secondaryProperties();
    
          const filteredSecondaryProperties = propertiesSecondary.filter(
            (item) =>
              item.ATTRIBUTE !== "Bauform" &&
              item.ATTRIBUTE !== "Federgabel" &&
              item.ATTRIBUTE !== "Dämpfer" &&
              item.ATTRIBUTE !== "Webshopjahr" &&
              item.ATTRIBUTE !== "Geschlecht" &&
              item.ATTRIBUTE !== "Auswertungsmarke"
          );
          if (existingProduct) {
            existingProduct.partId.push(bike.ID_PARTS);
            existingProduct.Rahmenhöhe.push(rimSize);
          } else {
            groupedBikes[block.BLOCK].push({
              names: [name],
              images: bike?.media?.map((img) => img?.IMAGENAME),
              Rahmenhöhe: [rimSize],
              partId: [bike.ID_PARTS],
              primary: [filteredPrimaryProperties],
              secondary: [filteredSecondaryProperties.concat(filteredPrimaryProperties)],
              price: [bike.RESELLERPRICE],
              color: [color],
              popupdesc: [secondDescriptionPopUp],
            });
          }
        } else {
          console.log("bike is undefined for block", block);
        }
      });

    

      const handleColorClick = (color) => {
        setSelectedColor(color);
      };
console.log(Object.values(groupedBikes)?.map((item)=>item))

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

        {/* {
          bikes?.name!==undefined?(
          <div className='md:w-full xs:w-[90%] md:px-20 flex justify-center items-center xs:mt-8 md:mt-16 xl:mt-32'>
<div className={`grid grid-cols-1 xs:gap-10 md:gap-24`}>
          {groupedData.map((item)=>(
            <div className='flex justify-center items-center flex-col'>
               <p className='xs:mb-6 md:mb-16 text-sum-blue xs:text-[15px] md:text-[20px] xl:text-[30px] font-bold'>{item[0]?.descriptions?.default?.TEXT5}</p>

               <Carousel width="700px" dynamicHeight={false} showIndicators={false} showArrows={false} autoPlay infiniteLoop={true} stopOnHover={true} showStatus={false} showThumbs={item?.map((item)=>item)?.length===1? false:true } className='xl:block xs:hidden'>
                
              {item.map((item)=>(
              <div className=''><img src={`https://media.bbf-bike.de/shop/images/${item?.media[0]?.IMAGENAME}`} className='h-full object-contain'/></div>
            ))}
             </Carousel> 

             <Carousel width="500px" dynamicHeight={false} showIndicators={false} showArrows={false} autoPlay infiniteLoop={true} stopOnHover={true} showStatus={false} showThumbs={item?.map((item)=>item)?.length===1? false:true } className='md:block xs:hidden xl:hidden'>
                
                {item.map((item)=>(
                <div className=''><img src={`https://media.bbf-bike.de/shop/images/${item?.media[0]?.IMAGENAME}`} className='h-full object-contain'/></div>
              ))}
               </Carousel> 
             
             <Carousel width="250px" dynamicHeight={false} showIndicators={false} showArrows={false} showStatus={false} showThumbs={item?.map((item)=>item)?.length===1? false:true } className='md:hidden xs:block'>
                
                {item.map((item)=>(
                <div className=''><img src={`https://media.bbf-bike.de/shop/images/${item?.media[0]?.IMAGENAME}`} className='h-full object-contain'/></div>
              ))}
               </Carousel>
             <div>
           
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
        } */}
<div className='md:w-full xs:w-[90%] md:px-20 flex justify-center items-center xs:mt-8 md:mt-16 xl:mt-32'>
<div className={`grid grid-cols-1 xs:gap-10 md:gap-24`}>
{Object.values(groupedBikes)?.map((bike,index)=>(
  <div key={index} >





<div className="flex items-center justify-center my-10 gap-2">

  {bike.map(item=>(
    <div>{[item.color].flat().map((item)=>(
      <div>{item}</div>
    ))}</div>
  ))}
{[
  ...new Set(bike.map((item) => item.color).flat()),
].map((item) => (
  <div className='relative'>
    <div className={`h-[50px] w-[50px] bg-sum-white relative justify-center items-center flex border-4  rounded-full ${!selectedColor? setSelectedColor(bike[0]?.color[0]): item===selectedColor?"animate-pulse border-sum-blue":"border-sum-white"}`}>
    </div> 
    
    
    <div className=' flex justify-center items-center'><div
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        margin: "5px",
        backgroundColor: item,
        cursor: "pointer",
        border:"2px solid black "
    
      }}
      onClick={() => handleColorClick(item)}
     className='absolute inset-0 top-[5px] left-[5px]'></div>


</div>
  </div>
))}



</div>
{console.log(bike?.find((img) =>img.color?.find((color) => color === selectedColor))?.images[0])}


<img src={`https://media.bbf-bike.de/shop/images/${bike?.find((img) =>img?.color?.find((color) => color === selectedColor))?.images[0]}`} className='h-[450px]  object-contain'/>
         
               
        
             
               <div className='mt-12'>
               <p className='md:text-[22px] xs:text-[14px] text-sum-blue font-semibold mb-5'>SPEZIFIKATIONEN</p>
           
                {bike.find((img) =>img.color?.find((color) => color === selectedColor))?.secondary[0].map((item,index)=>(
                  <div  className='flex justify-between   items-center text-sum-black xs:text-[14px] md:text-[18px] font-regular '>
                    <p className='flex justify-center items-center gap-3'><div className='h-1 xs:w-3 md:w-5 bg-sum-blue'></div><p>{item.ATTRIBUTE}</p></p>
                    <p>{item.VALUE}</p>
                  </div>
                ))}


                {/* {bike.map((item,index)=>(
                 <div key={index}>
                  {
item.color?.find((color) => color === selectedColor)?.secondary?.map((item,index)=>(
  <div  className='flex justify-between   items-center text-sum-black xs:text-[14px] md:text-[18px] font-regular '>
  <p className='flex justify-center items-center gap-3'><div className='h-1 xs:w-3 md:w-5 bg-sum-blue'></div><p>{item.ATTRIBUTE}</p></p>
<p>{item.VALUE}</p>
</div>
))
                  }
</div>
                ))} */}
                 
                  
                   
               
                </div>
  </div>
))}
</div>

</div>
    </div>
     
{imageNumber?(
  <div
  className="fixed inset-0 z-50 xs:flex gap-10 xs:items-center xs:justify-center flex-col
  overflow-x-hidden    outline-none focus:outline-none 
transition-transform  duration-700 transform 
hover:opacity-100 backdrop-blur-sm md:bg-sum-white/40 sm:bg-sum-white/40 shadow-xl animate-in fade-in text-white cursor-pointer"
>
    
    <img src={imageNumber===1?bikes?.images[0]:imageNumber===2?bikes?.images[1]:imageNumber===3?bikes?.images[2]:bikes?.images[3]} className='md:w-[90%] md:h-[65%] xl:w-[65%] xl:h-[80%] xs:w-[90%] xs:h-[90%] xs:object-contain md:object-cover' />
</div>
):""}
  </div>

  </div>
  )
}

export default BannerSection