"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function QuestionBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [isBaz , setIsBaz] =  useState(false)
    const [isOpen1 , setIsOpen1] = useState(false)

    return (
        <div className="container mt-20 px-4">
            <h2 className="text-4xl font-extrabold text-center md:text-right">
                سوالات متداول
            </h2>


            <div className="mt-8 bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex flex-row items-center justify-between px-4 py-4 cursor-pointer"
                    aria-expanded={isOpen}
                >
                    <h3 className="text-xl ">رمز ارز چیست؟</h3>

                    <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 8L12 16L20 8" stroke="black" stroke-opacity="0.95" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>


                <div
                    className={`transition-all duration-300 overflow-hidden px-4 ${isOpen ? "max-h-72 py-4" : "max-h-0"
                        }`}
                >
                    <p className="text-lg leading-9">
                        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
                        بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
                        گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
                        ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می‌نماید، تا
                        از نظر گرافی ...
                    </p>
                </div>
            </div>


            <div className="mt-8 bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <button
                    onClick={() => setIsBaz(!isBaz)}
                    className="w-full flex flex-row items-center justify-between px-4 py-4 cursor-pointer"
                    aria-expanded={isBaz}
                >
                    <h3 className="text-xl ">آیا می توانم با کارت بانکی بیت کوین بخرم؟</h3>

                    <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 8L12 16L20 8" stroke="black" stroke-opacity="0.95" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>


                <div
                    className={`transition-all duration-300 overflow-hidden px-4 ${isBaz ? "max-h-72 py-4" : "max-h-0"
                        }`}
                >
                    <p className="text-lg leading-9">
                        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
                        بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
                        گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
                        ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می‌نماید، تا
                        از نظر گرافی ...
                    </p>
                </div>
            </div>

            <div className="mt-8 bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <button
                    onClick={() => setIsOpen1(!isOpen1)}
                    className="w-full flex flex-row items-center justify-between px-4 py-4 cursor-pointer"
                    aria-expanded={isOpen1}
                >
                    <h3 className="text-xl ">چرا باید از والت استفاده کنم؟</h3>

                    <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 8L12 16L20 8" stroke="black" stroke-opacity="0.95" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>


                <div
                    className={`transition-all duration-300 overflow-hidden px-4 ${isOpen1 ? "max-h-72 py-4" : "max-h-0"
                        }`}
                >
                    <p className="text-lg leading-9">
                        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
                        بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
                        گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
                        ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می‌نماید، تا
                        از نظر گرافی ...
                    </p>
                </div>
            </div>


            <div className="bg-gray-100 mt-10 mb-12 rounded-2xl">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-6 text-center p-6">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <Image
                            className="mx-auto"
                            src="/Images/sammy.png"
                            width={350}
                            height={90}
                            alt="aks"
                        />
                    </div>

                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold">علاقه‌مند به خرید بیت کوین هستید؟</h2>
                        <p className="mt-4 text-lg">
                            ما اینجا هستیم تا تجربه‌ای متفاوت از خرید و فروش بیت کوین داشته
                            باشید.
                        </p>
                        <button className="bg-sky-600 py-2 px-4 rounded-2xl text-white mt-6 text-lg mb-3 cursor-pointer">
                            اکنون شروع کنید
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
