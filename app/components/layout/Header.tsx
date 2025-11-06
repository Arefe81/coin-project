"use client"
import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from "lucide-react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='  bg-gray-100  '>

      <div className='max-w-[450] md:max-w-[1140] mx-auto flex items-center justify-between py-4   gap-3 '>

        <div className='flex'>

        <button className='md:hidden sm:hidden ' onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={45} /> : <Menu size={45} />}</button>

        <Image className='' src="/Images/logo.png" width={100} height={100} alt='logo' />
        </div>


        <nav className='hidden md:flex sm:flex  lg:flex lg:gap-7 gap-4'>

          <Link className='text-gray-800  hover:text-sky-800 text-lg' href='#'>صفحه اصلی</Link>
          <Link className='text-gray-800  hover:text-sky-800 text-lg' href='#'>قیمت رمزارزها </Link>
          <Link className='text-gray-800  hover:text-sky-800 text-lg' href='#'>مقالات</Link>
          <Link className='text-gray-800  hover:text-sky-800 text-lg' href='#'>تماس با ما </Link>
          <Link className='text-gray-800  hover:text-sky-800 text-lg' href='#'> سایر </Link>

        </nav>

        <div className='flex flex-row gap-3' >

        <svg className='hidden md:flex lg:flex ' width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.51089 2L7.15002 2.13169C7.91653 2.15942 8.59676 2.64346 8.89053 3.3702L9.96656 6.03213C10.217 6.65159 10.1496 7.35837 9.78693 7.91634L8.40831 10.0375C9.22454 11.2096 11.4447 13.9558 13.7955 15.5633L15.5484 14.4845C15.9939 14.2103 16.5273 14.1289 17.0314 14.2581L20.5161 15.1517C21.4429 15.3894 22.0674 16.2782 21.9942 17.2552L21.7705 20.2385C21.6919 21.2854 20.8351 22.1069 19.818 21.9887C6.39245 20.4276 -1.48056 1.99997 3.51089 2Z" stroke="black" stroke-opacity="0.95" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p className='hidden md:flex lg:flex'>021-91008590</p>
        <Image className='flex' src="/Images/Frame.png" width={20} height={20} alt='profile' />
        <p className='flex'>علی اسماعیلی</p>

        <svg className='mx-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 10L12 14L8 10" stroke="black" stroke-opacity="0.95" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

      </div>

      {menuOpen && (
  <>
    
    <div 
      className=" "
      onClick={() => setMenuOpen(false)}
    ></div>

    
    <div className="md:hidden sm:hidden lg:hidden max-w-[450] mx-auto absolute top-18 right-0 bg-gray-100 shadow-lg p-4 flex flex-col gap-4 z-50">
      <Link className='text-gray-800 hover:text-sky-600 text-lg' href='#'>صفحه اصلی</Link>
      <Link className='text-gray-800 hover:text-sky-600 text-lg' href='#'>قیمت رمزارزها</Link>
      <Link className='text-gray-800 hover:text-sky-600 text-lg' href='#'>مقالات</Link>
      <Link className='text-gray-800 hover:text-sky-600 text-lg' href='#'>تماس با ما</Link>
      <Link className='text-gray-800 hover:text-sky-600 text-lg' href='#'>سایر</Link>
    </div>
  </>
)}
      
    </div>
  )
}

export default Header