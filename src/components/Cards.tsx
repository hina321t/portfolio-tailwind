import React from 'react'
import { GiClassicalKnowledge } from 'react-icons/gi'
 import Image from 'next/image';
import { DiVim } from 'react-icons/di';



interface propsType {


title:string;
desc:string;
  img:string;
  tags:string[];
  
}


const Cards:React.FC <propsType> = ({title ,desc , img ,tags}) => {
  return (
    <div className='bordre border-accent w-[300px] sm:[350px]'>
      <div> 
        <Image  className=" w-[300px] sm:[350px] h-auto"
        src={img}
        width={350}
        height={350}
        alt={title}
        />
        

      </div>
      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el)  =>(
          <div className='tags'  key={el}>
            {el}
          </div>))}
          </div>
      </div>
    </div>
  )
}

    
export default Cards









