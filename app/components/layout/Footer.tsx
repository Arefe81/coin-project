"use client";

import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-[#0F2440] text-white mt-1 w-full">
      
    
      <div className="max-w-[450] md:max-w-[1140] mx-2  py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 text-right">
        
      
        <div className="flex flex-col mx-1">
          <div className="mb-4 flex justify-start">
            <img
              src="/Images/logo2.png"
              alt="لوگوی ولت"
              className="w-28"
              loading="lazy"
            />
          </div>

          <p className="text-sm text-gray-300 mb-6 leading-7  ">
            راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم های پرداخت بین‌المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام تجاری MGY INVESTMENT LTD با شماره ثبت ۷۳۶۵۰۶۳ در کشور انگلستان به ثبت رسید و فعالیت رسمی آغاز نمود.
          </p>
        </div>

      
        <div className="">
          <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2 inline-block">
            لینک‌های مرتبط
          </h3>

          <div className="flex flex-row gap-12">
            <ul className="space-y-3 text-md text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition">صفحه اصلی</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">قیمت رمز ارزها</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">مقالات و وبلاگ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">درباره ما</a></li>
            </ul>

            <ul className="space-y-3 text-md text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition">سوالات متداول</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">شرایط و قوانین</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">فرصت‌های شغلی</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">انجمن</a></li>
            </ul>
          </div>
        </div>

      
        <div className="">
          <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2 inline-block">
            تبادل ارز
          </h3>

          <div className="flex flex-row gap-12">
            <ul className="space-y-3 text-md text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition">خرید بیت‌کوین</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">خرید اتریوم</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">خرید ریپل</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">خرید سولانا</a></li>
            </ul>

            <ul className=" lg:space-y-3 lg:text-md lg:text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition"> خرید یواس دی کوین</a></li>
              <li><a href="#" className="hover:text-blue-400 transition"> خرید چین لینک</a></li>
              <li><a href="#" className="hover:text-blue-400 transition"> خرید دوج کوین</a></li>
              <li><a href="#" className="hover:text-blue-400 transition"> خرید تتر</a></li>
             
            </ul>
          </div>
        </div>
      </div>

    
      <div className="flex justify-center gap-6 text-2xl py-4">
        <a href="#" className="hover:text-blue-400 transition" aria-label="اینستاگرام"><FaInstagram /></a>
        <a href="#" className="hover:text-blue-400 transition" aria-label="تلگرام"><FaTelegram /></a>
        <a href="#" className="hover:text-blue-400 transition" aria-label="لینکدین"><FaLinkedin /></a>
        <a href="#" className="hover:text-blue-400 transition" aria-label="توییتر"><FaTwitter /></a>
      </div>

    
      <div className="bg-[#0B1A30] text-center py-4 text-xs text-gray-400 border-t border-gray-700">
        تمامی حقوق این سرویس متعلق به مجموعه <span className="text-blue-400 font-semibold">ولت</span> است.
      </div>

    </footer>
  );
}




