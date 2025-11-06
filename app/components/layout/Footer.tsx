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
      <div className="max-w-[1140px] mx-auto py-10 grid grid-cols-1 md:grid-cols-3 md:gap-10 text-right">

        {/* توضیحات و لوگو */}
        <div className="flex flex-col mx-1">
          <div className="mb-4 flex justify-start">
            <img
              src="/Images/logo2.png"
              alt="لوگوی ولت"
              className="w-28"
              loading="lazy"
            />
          </div>

          <p className="text-sm text-gray-300 mb-6 leading-7">
            راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم های پرداخت بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام تجاری MGY INVESTMENT LTD با شماره ثبت ۷۳۶۵۰۶۳ در کشور انگلستان به ثبت رسید و فعالیت رسمی آغاز نمود
          </p>
        </div>

        
        <div className="grid grid-cols-2 gap-6 md:col-span-2">

          
          <div className="md:px-13 mx-2">
            <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2  inline-block">
              لینک‌های مرتبط
            </h3>
            <div className="flex flex-row gap-2 md:gap-8">
              <ul className="space-y-3 text-md text-gray-300">
                <li><a href="#">صفحه اصلی</a></li>
                <li><a href="#">قیمت رمز ارزها</a></li>
                <li><a href="#">مقالات و وبلاگ</a></li>
                <li><a href="#">درباره ما</a></li>
              </ul>

              <ul className="space-y-3 text-md text-gray-300">
                <li><a href="#">سوالات متداول</a></li>
                <li><a href="#">شرایط و قوانین</a></li>
                <li><a href="#">فرصت‌های شغلی</a></li>
                <li><a href="#">انجمن</a></li>
              </ul>
            </div>
          </div>

          
          <div className="md:px-13 px-8">
            <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2 inline-block">
              تبادل ارز
            </h3>
            <div className="flex flex-row md:gap-5">
            <ul className="space-y-3 text-md text-gray-300">
              <li><a href="#">خرید بیت‌کوین</a></li>
              <li><a href="#">خرید اتریوم</a></li>
              <li><a href="#">خرید ریپل</a></li>
              <li><a href="#">خرید سولانا</a></li>
            </ul>

            <ul className="hidden md:block space-y-3 text-md text-gray-300">
              <li><a href="#"> خرید یواس دی کوین</a></li>
              <li><a href="#"> خرید چین لینک</a></li>
              <li><a href="#"> خرید دوج کوین</a></li>
              <li><a href="#"> خرید تتر</a></li>
            </ul>
            </div>
          </div>

        </div>

      </div>

      {/* شبکه‌های اجتماعی */}
      <div className="flex justify-center gap-6 text-2xl py-2">
        <a href="#" aria-label="اینستاگرام"><FaInstagram /></a>
        <a href="#" aria-label="تلگرام"><FaTelegram /></a>
        <a href="#" aria-label="لینکدین"><FaLinkedin /></a>
        <a href="#" aria-label="توییتر"><FaTwitter /></a>
      </div>

      {/* کپی رایت */}
      <div className="bg-[#0B1A30] text-center py-4 text-xs text-gray-400 border-t border-gray-700">
        تمامی حقوق این سرویس متعلق به <span className="text-blue-400 font-semibold">ولت</span> است.
      </div>
    </footer>
  );
}







