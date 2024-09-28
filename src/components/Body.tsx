import React from 'react'
import Image from 'next/image'
import ProfilePic from "../public/profilepic.png"

function Body() {
  return (
    <div className="flex flex-col  lg:flex-row justify-between bg-gray-600 h-full md:h-screen">

       <div className='text-5xl ml-[30px] md:ml-[80px] mt-[200px] font-serif text-white'>
            Hello! <br/>
            I am Syed Shoaib Sherazi<br/>
            <span className='text-3xl font-bold text-pink-600'>Next.Js Developer!</span>
            <p className='text-gray-300 text-base'>An enthusiastic Full Stack Web Developer with a strong
               set of<br/>  technical as well as non-technical skills and a dedication <br/>
                towards creating useful and interactive web application.</p>
        </div>



        <div> 
        <Image 
            src={ProfilePic}
            alt="myPic"
            width={500}
            height={500}
            className="w-[350px] h-[350px] mr-[230px] mt-[200px] ml-[80px] md:ml-[200px] rounded-full mb-3 bg-gray-300"
         />
      </div>
    </div>
  )
}

export default Body