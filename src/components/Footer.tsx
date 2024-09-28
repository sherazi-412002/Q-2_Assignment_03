import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import Link from 'next/link';

function Footer() {
  return (
    <div className='bg-gray-900 h-40 flex justify-between'>
        <div className='mx-16'>
            <span className='text-3xl text-white'>Links</span><br />
            <ul className='flex justify-between gap-8 mt-11'>
                <Link href={"https://www.linkedin.com/in/syed-shoaib-sberazi-3638822b4/"}>
                <li><GrLinkedin size="40px" color='white'/></li>
                </Link>

                <Link href={"https://github.com/sherazi-412002"}>
                <li>< FaGithub size="40px" color='white'/></li>
                </Link>
            </ul>
        </div>
        <div className='mx-16'>
             <span className='text-3xl text-white'>Projects</span>
             <Link href={"https://hackathons-cq1n.vercel.app/"}>
             <p className='text-blue-600 underline mt-11'>Resume Builder Web Application</p>
             </Link>
        </div>

    </div>
  )
}

export default Footer