

import React from 'react'
import Navbar from "@/components/Navbar";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-40 mt-60 gap-10 " >
      {/* Text Section  */}
      <div className="md:w-1/2 text-left  " >
        <h2 data-aos="zoom-in-up" className="text-2xl  text-green-400 font-bold mb-4 ">I AM HINA TAHIR</h2>
        <p className="text-white-700 mb-4 ">
          I am a skilled front-end developer specializing in HTML, CSS, JavaScript, TypeScript, and Next.js. If you are looking to create a high-quality, responsive, and modern website, feel free to contact me!"
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Learn More
        </button>
      </div>

      {/* Image Section  */}
      <div className="w-80  h-80 mb-4  border-green-500 ">
        <img src="/image.png" alt="Your Image" className="w-full h-full rounded-full object-cover" />
      </div>
      <button/>

    
    </div>

  );
}
export default Hero

