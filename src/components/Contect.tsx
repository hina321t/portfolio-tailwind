import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { BsTelephoneOutboundFill } from "react-icons/bs";


const Contect = () => {
  return (
   <div id='contect' className='pt-32 container flex'>
    <div className='grid md:grid-col-2 gap-10'>
        <div className="space-y-8">
            <h2 className="text-5xl" data-aos="zoom-in-up">Get in touch</h2>
            <p className='text-gray-600 text-[18px] pt-2'>
                Drop me a line , give me a call, or send me a message by submitting a form. 

            </p>
            <div className='flex gap-3 items-center'>
                <TfiEmail  size={30}/> hina.1shine1984@gmail.com


            </div>

            <div className='flex gap-3 items-center'>
                <BsTelephoneOutboundFill  size={30}/> 0340-1196988


            </div>
        </div>
        


        <div className='space-y-8 ' >
            <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input type="text" 
                className='h[40px]bg-transparent border border-accent'id='name' />

            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email</label>
                <input type="text" 
                className='h[40px]bg-transparent border border-accent'id='email' />

            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='msg'>Message</label>
                <textarea  
                className='bg-transparent border border-accent'id='msg' rows={8}>
                    
                </textarea>
            </div>
            <button className='bg-accent p-2 px-6'>send</button>




        </div>
    </div> 
   </div>
  )
}

export default Contect