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
        setFill("Fill all the fields")
        setSuccess("")
        setEmailValidation("")

    }else if (validator.isEmail(email)){
        setSuccess("Your message has been sent successfully")
        setFill("")
        setEmailValidation("")
       setName("")
       setEmail("")
       setMessage("")
       
    }
    else{
        setEmailValidation("Enter a valid email id")
        setFill("")
        setSuccess("")
    }
}
  return (
    <div className=' flex justify-center items-center xs:bg-sum-gray md:bg-opacity-0'>
    <div className='flex md:justify-between xs:justify-center xs:items-center md:items-start xs:w-[90%] md:w-[60%] xs:py-12 md:p-32  bg-sum-gray mt-[110px] md:flex-row xs:flex-col'>
        <div className='flex flex-col justify-start xs:items-center md:items-end gap-6 '>
            <p className='flex justify-start items-start gap-2 flex-col'>
                <input type='text' className='md:w-[350px] xs:w-[250px] border-sum-black border-[1px] h-10 focus:outline-none p-3' 
                onChange={(e)=>setName(e.target.value)} value={name}/>
                <label className='font-regular text-[18px]'>Name</label>
            </p>
            <p className='flex justify-start items-start gap-2 flex-col'>
                <input type='text' className='md:w-[350px] xs:w-[250px] h-10 focus:outline-none p-3 border-sum-black border-[1px]' 
                onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <label className='font-regular text-[18px]'>Email</label>
            </p>
            <p className='flex justify-start items-start gap-2 flex-col'>
                <textarea type='text' className=' md:w-[350px] xs:w-[250px] h-40 focus:outline-none p-3 border-sum-black border-[1px]' 
                onChange={(e)=>setMessage(e.target.value)} value={message}/>
                <label className='font-regular text-[18px]'>Message</label>
            </p>
           
            <button className='bg-sum-blue p-1 text-sum-white rounded-full text-[18px] w-24 font-regular hover:bg-opacity-80 hover:[transition:all_0.10s_ease]' onClick={handleSubmit}>Send</button>
        
            {
                fill?(<div className='mt-6 text-sum-red text-[18px] font-regular flex justify-center items-center gap-3'>
                    
                    <img src={warning} alt='warning' className='h-7 w-7 object-contain'/>
                    
                    <p>{fill}</p></div>):emailValidation?(<div className='mt-6 text-sum-red text-[18px] font-regular flex justify-center items-center gap-3'>
                    
                    <img src={warning} alt='warning' className='h-7 w-7 object-contain'/>
                    
                    <p>{emailValidation}</p></div>):success?<div className='mt-6 text-sum-green text-[18px] font-regular flex justify-center items-center gap-3'>
                    
                    <img src={successIcon} alt='success' className='h-7 w-7 object-contain'/>
                    
                    <p>{success}</p></div>:""
            }
        </div>
        <div className='flex justify-start items-start flex-col gap-5 xs:mt-16 md:mt-0'>
           
           <p className='font-regular text-[18px]'>
           <h3 className='font-bold text-[22px]'>Contact</h3>
           BBF Bike GmbH <br/>
           Firmensitz: Carenaallee 8, <br/>
           15366 Hoppegarten<br/>
           </p>
           <p className='font-regular text-[18px]'>
           Telefon: +49 (0) 3342 354-341<br/>
           Fax: +49 (0) 3342 354-333
           </p>
        </div>
        </div>
    </div>
  )
}

export default Contact