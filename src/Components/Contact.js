import React, { useState } from 'react'
import validator from "validator";
import warning from "../images/warning.png"
import successIcon from "../images/checked.png"
const Contact = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [fill,setFill]= useState("")
    const [emailValidation,setEmailValidation]=useState("")
    const [success,setSuccess]= useState("")

const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name||!email||!message){
        setFill("Alle Felder ausfüllen")
        setSuccess("")
        setEmailValidation("")

    }else if (validator.isEmail(email)){
        setSuccess("Ihre Nachricht wurde gesendet")
        setFill("")
        setEmailValidation("")
       setName("")
       setEmail("")
       setMessage("")
       
    }
    else{
        setEmailValidation("Eine gültige E-Mail-ID eingeben")
        setFill("")
        setSuccess("")
    }
}
  return (
    <div className=' flex justify-center items-center'>
    <div className=' xs:w-[90%] xl:w-[60%] xs:py-12 md:p-20  bg-sum-gray mt-[110px] xl:block xs:flex xs:justify-center'>
        <div className='flex md:justify-between xs:justify-center xs:items-start md:items-start xl:flex-row xs:flex-col'>
        <div className='flex flex-col justify-start xs:items-end md:items-end gap-6 '>
            <p className='flex justify-start items-start gap-2 flex-col'>
                <input type='text' className='md:w-[350px] xs:w-[250px] border-sum-black border-[1px] xs:h-8 md:h-10 focus:outline-none p-3' 
                onChange={(e)=>setName(e.target.value)} value={name}/>
                <label className='font-regular xs:text-[14px] md:text-[18px]'>Name</label>
            </p>
            <p className='flex justify-start items-start gap-2 flex-col'>
                <input type='text' className='md:w-[350px] xs:w-[250px] xs:h-8 md:h-10 focus:outline-none p-3 border-sum-black border-[1px]' 
                onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <label className='font-regular xs:text-[14px] md:text-[18px]'>Email</label>
            </p>
            <p className='flex justify-start items-start gap-2 flex-col'>
                <textarea type='text' className=' md:w-[350px] xs:w-[250px] h-40 focus:outline-none p-3 border-sum-black border-[1px]' 
                onChange={(e)=>setMessage(e.target.value)} value={message}/>
                <label className='font-regular xs:text-[14px] md:text-[18px]'>Nachricht</label>
            </p>
           
            <button className='bg-sum-blue p-1 text-sum-white rounded-full xs:text-[14px] md:text-[18px] xs:w-24 md:w-28 font-regular hover:bg-opacity-80 hover:[transition:all_0.10s_ease]' onClick={handleSubmit}>Absenden</button>
        
            {
                fill?(<div className='mt-6 text-sum-red xs:text-[14px] md:text-[18px] font-regular flex justify-center items-center gap-3'>
                    
                    <img src={warning} alt='warning' className='xs:h-5 xs:w-5 md:h-7 md:w-7 object-contain'/>
                    
                    <p>{fill}</p></div>):emailValidation?(<div className='mt-6 text-sum-red xs:text-[14px] md:text-[18px] font-regular flex justify-center items-center gap-3'>
                    
                    <img src={warning} alt='warning' className='xs:h-5 xs:w-5 md:h-7 md:w-7 object-contain'/>
                    
                    <p>{emailValidation}</p></div>):success?<div className='mt-6 text-sum-green xs:text-[14px] md:text-[18px] font-regular flex justify-center items-center gap-3'>
                    
                    <img src={successIcon} alt='success' className='xs:h-5 xs:w-5 md:h-7 md:w-7 object-contain'/>
                    
                    <p>{success}</p></div>:""
            }
        </div>
        <div className='flex justify-start items-start flex-col gap-5 xs:mt-16 xl:mt-0'>
           
           <p className='font-regular xs:text-[14px] md:text-[18px]'>
           <h3 className='font-bold xs:text-[15px] md:text-[22px]'>Kontakt</h3>
           BBF Bike GmbH <br/>
           Firmensitz: Carenaallee 8, <br/>
           15366 Hoppegarten<br/>
           </p>
           <p className='font-regular xs:text-[14px] md:text-[18px]'>
           Telefon: +49 (0) 3342 354-341<br/>
           Fax: +49 (0) 3342 354-333
           </p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Contact