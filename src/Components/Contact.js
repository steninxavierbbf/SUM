import React from 'react'

const Contact = () => {
  return (
    <div className=' flex justify-center items-center '>
    <div className='flex justify-between items-start w-[60%] p-32  bg-sum-gray mt-[150px]'>
        <div className='flex flex-col justify-start items-end gap-6 '>
            <p className='flex justify-start items-start gap-2 flex-col'>
                <input type='text' className='w-80 h-8 focus:outline-none p-3'/>
                <label className='font-light text-[18px]'>Name</label>
            </p>
            <p className='flex justify-start items-start gap-2 flex-col'>
                <input type='text' className='w-80 h-8 focus:outline-none p-3'/>
                <label className='font-light text-[18px]'>Email</label>
            </p>
            <p className='flex justify-start items-start gap-2 flex-col'>
                <textarea type='text' className='w-80 h-40 focus:outline-none p-3'/>
                <label className='font-light text-[18px]'>Message</label>
            </p>
           
            <button className='bg-sum-blue p-1 text-sum-white rounded-full text-[18px] w-24 hover:bg-opacity-80 hover:[transition:all_0.10s_ease]'>Send</button>
        
            
        </div>
        <div className='flex justify-start items-start flex-col gap-5'>
           
           <p className='font-light text-[18px]'>
           <h3 className='font-bold text-[22px]'>Kontakt</h3>
           BBF Bike GmbH <br/>
           Firmensitz: Carenaallee 8, <br/>
           15366 Hoppegarten<br/>
           </p>
           <p className='font-light text-[18px]'>
           Telefon: +49 (0) 3342 354-341<br/>
           Fax: +49 (0) 3342 354-333
           </p>
        </div>
        </div>
    </div>
  )
}

export default Contact