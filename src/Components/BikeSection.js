import React from 'react'
import { useState } from 'react'
const BikeSection = ({bikeSection}) => {
    const[selectedColor,setSelectedColor]=useState("")

    const images = bikeSection?.find((img) =>
    img.color.find((color) => color === selectedColor)
  );
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
 



  return (
    <div className='flex justify-center items-center flex-col xs:gap-4 md:gap-10 '>
        <div className='flex justify-center items-center xs:gap-1 md:gap-5'>
        {[
        ...new Set(bikeSection.map((item) => item.color).flat()),
      ].map((item) => (
        <div className='relative'>
          <div className={`md:h-[50px] md:w-[50px] xs:h-[40px] xs:w-[40px] bg-sum-white relative justify-center items-center flex border-4  rounded-full ${!selectedColor? setSelectedColor(bikeSection[0]?.color[0]): item===selectedColor?"animate-pulse border-sum-blue":"border-sum-white"}`}>
          </div> 
          
          
          <div className=' xs:hidden md:flex justify-center items-center'>
            <div
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


      <div className=' xs:flex md:hidden justify-center items-center'>
            <div
            style={{
              width: "20px",
              height: "20px",
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

   <div>
 <img src={`https://media.bbf-bike.de/shop/images/${images?.images[0]}`} className='md:h-[450px] xs:h-[250px]  object-contain'/>

   
</div> 
<div className='w-full'>

<div className=' xs:mt-0 md:mt-12'>
               <p className='md:text-[22px] xs:text-[14px] text-sum-blue font-semibold mb-5'>SPEZIFIKATIONEN</p>
                      {images?.secondary
                        .map((prop) => prop)
                        .flat()
                        .map((item, index) => (
                            <div  className='flex justify-between   items-center text-sum-black xs:text-[14px] md:text-[18px] font-regular ' key={index}>
                            <p className='flex justify-center items-center gap-3'><div className='h-1 xs:w-3 md:w-5 bg-sum-blue'></div><p>{item.ATTRIBUTE}</p></p>
                            <p>{item.VALUE}</p>
                          </div>
                        ))}
              </div>
                  </div>
    </div>
  )
}

export default BikeSection