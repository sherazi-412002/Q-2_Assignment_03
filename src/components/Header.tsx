import React from 'react';
import Link from 'next/link';


function Header() {
  return (
    <div>
        <nav className='w-auto md:w-[1450px] h-20 fixed md:h-16 text-white bg-gray-950 flex justify-between rounded-3xl items-center md:mx-7 mt-5'>
            <div className='ml-5 md:ml-10 text-xl md:text-2xl lg:text-3xl font-bold text-pink-600'>SYED SHOAIB SHERAZI</div>
            <div className='flex flex-row text-xl mr-10 lg:mr-20 font-semibold'>
                
                <Link href={"/"}>
                <div className='hidden md:block md:mx-[15px] lg:mx-[25px] cursor-pointer hover:bg-white hover:text-black hover:p-[5px] hover:rounded-lg'>Home</div>
                </Link>

                <Link href={'/about-us'}>
                <div className='hidden md:block md:mx-[15px] lg:mx-[25px] cursor-pointer  hover:bg-white hover:text-black hover:p-[5px] hover:rounded-lg '>About Us</div>
                </Link>

                <Link href={'/contact-us'}>
                <div className='hidden md:block md:mx-[15px] lg:mx-[25px] cursor-pointer  hover:bg-white hover:text-black hover:p-1 hover:rounded-lg '>Contact Us</div>
                </Link>

            </div>
            <div className='md:hidden'>
                <a className='text-5xl mr-7' href="#">&#8801;</a>
            </div>
        </nav>

    </div>
  )
}

export default Header