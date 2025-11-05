"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { CoinItem } from "@/app/types";


interface PriceBoxProps {
    coin: CoinItem
}

export default function PriceBox({ coin }: PriceBoxProps) {
    const [amount, setAmount] = useState("")
    return (
        <div className="container  mx-auto mt-14 mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow order-2 md:order-1">
                    <h2 className="text-gray-800 font-extrabold text-lg mb-6 text-right">قیمت لحظه ای</h2>
                    <div className="flex items-center justify-between border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            <img className="mb-6" src={coin.icon} alt={coin.fa_name} width={75} height={75} />
                            <div className="flex flex-col gap-2 mb-6">
                                <p className="text-xl ">{coin.fa_name}</p>
                                <p>{coin.currency_code}</p>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-2 mb-6  ">
                            <p className="font-bold">{Number(coin.buy_irt_price).toLocaleString()} تومان</p>
                            <p className="font-bold text-left">{Number(coin.price).toLocaleString()} $</p>
                        </div>
                    </div>
                    <div className="flex flex-col pt-7 gap-8 ">
                        <div className="flex items-center justify-between">
                            <p className="text-xl">تغییر قیمت امروز:</p>
                            <p className={`font-extrabold ${parseFloat(coin.daily_change_percent) >= 0 ? "text-green-600" : "text-red-500"}`} dir="ltr">
                                {coin.daily_change_percent}%
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xl">خرید {coin.fa_name} :</p>
                            <p className=" text-lg text-green-600">{Number(coin.buy_irt_price).toLocaleString()} تومان</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xl">فروش {coin.fa_name} :</p>
                            <p className=" text-lg text-red-500">{Number(coin.sell_irt_price).toLocaleString()} تومان</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xl">بالاترین قیمت 24 ساعته :</p>
                            <p className="text-green-600 text-lg">1.000.000.000</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xl">پایین ترین قیمت 24 ساعته :</p>
                            <p className="text-red-500 text-lg">1.000.000.000</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow order-2 md:order-1">
                    <h2 className="text-gray-800 font-extrabold text-lg mb-4 text-right">ارسال می‌کنید</h2>
                    <div className="flex items-center justify-center">
                        <div className="bg-gray-100 w-145 h-14 rounded-3xl flex flex-row items-center justify-between">
                            <h2 className="text-gray-500 px-4">مقدار را وارد کنید</h2>
                            <div className="flex flex-row items-center justify-center gap-1 ">
                                <Image className="border-gray-400 border-r-1 px-1" src="/Images/Iran.png" width={35} height={35} alt="iran" />
                                <p className="text-gray-500">تومان</p>
                            </div>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 10L12 14L8 10" stroke="black" stroke-opacity="0.95" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-end ml-8">
                        <div className="bg-gray-200 w-10 h-10 rounded-full flex  items-center justify-center mt-7 self-start " dir="rtl">
                        <svg className="" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4649_1571)">
                                <path d="M15.8883 4.74488C15.8804 4.63893 15.8356 4.53879 15.7614 4.46106L11.9405 0.269278C11.8957 0.220925 11.841 0.182272 11.78 0.155817C11.7189 0.129361 11.6528 0.115692 11.586 0.115692C11.5192 0.115692 11.4531 0.129361 11.3921 0.155817C11.331 0.182272 11.2763 0.220925 11.2316 0.269278L7.41066 4.46106C7.3682 4.5064 7.33534 4.55948 7.31397 4.61723C7.2926 4.67499 7.28314 4.7363 7.28614 4.79763C7.28913 4.85896 7.30451 4.91912 7.33141 4.97464C7.3583 5.03016 7.39617 5.07995 7.44285 5.12116C7.48953 5.16236 7.5441 5.19418 7.60342 5.21476C7.66274 5.23535 7.72565 5.24432 7.78853 5.24113C7.85141 5.23795 7.91302 5.22269 7.96984 5.19623C8.02666 5.16976 8.07756 5.13261 8.11961 5.08692L11.1047 1.80481L11.1047 14.1691C10.5506 14.3628 10.1495 14.8831 10.1495 15.4863C10.1495 16.2525 10.7966 16.8836 11.5823 16.8836C12.368 16.8836 13.0151 16.2525 13.0151 15.4863C13.0151 14.8831 12.614 14.3628 12.0599 14.1691L12.0599 1.80481L15.0524 5.08692C15.1185 5.16053 15.2066 5.21201 15.3043 5.23406C15.402 5.25611 15.5043 5.24761 15.5968 5.20977C15.6893 5.17193 15.7672 5.10666 15.8195 5.02322C15.8718 4.93978 15.8959 4.84239 15.8883 4.74488ZM12.0599 15.4863C12.0599 15.7491 11.8517 15.9521 11.5823 15.9521C11.3129 15.9521 11.1047 15.7491 11.1047 15.4863C11.1047 15.2236 11.3129 15.0206 11.5823 15.0206C11.8517 15.0206 12.0599 15.2236 12.0599 15.4863ZM8.72409 12.1969C8.71926 12.1044 8.68623 12.0154 8.62923 11.9412C8.57224 11.8671 8.49386 11.8112 8.40412 11.7807C8.31439 11.7503 8.21737 11.7466 8.12548 11.7702C8.03359 11.7937 7.951 11.8435 7.88827 11.9131L4.89573 15.1952L4.89573 2.83092C5.44979 2.63723 5.85095 2.11692 5.85095 1.51371C5.85095 0.747544 5.20379 0.116453 4.41812 0.116453C3.63245 0.116453 2.98528 0.747544 2.98528 1.51371C2.98528 2.11692 3.38645 2.63723 3.94051 2.83092L3.94051 15.1952L0.955432 11.9131C0.913376 11.8674 0.862479 11.8303 0.805662 11.8038C0.748846 11.7773 0.687227 11.7621 0.624346 11.7589C0.561465 11.7557 0.49856 11.7647 0.43924 11.7853C0.379919 11.8059 0.325353 11.8377 0.278673 11.8789C0.231994 11.9201 0.194118 11.9699 0.167225 12.0254C0.140331 12.0809 0.124947 12.1411 0.121955 12.2024C0.118963 12.2637 0.128424 12.325 0.149793 12.3828C0.171161 12.4406 0.204018 12.4936 0.246476 12.539L4.06737 16.7308C4.11216 16.7791 4.16684 16.8178 4.2279 16.8442C4.28896 16.8707 4.35503 16.8843 4.42185 16.8843C4.48866 16.8843 4.55474 16.8707 4.6158 16.8442C4.67686 16.8178 4.73154 16.7791 4.77633 16.7308L8.59722 12.539C8.64081 12.4932 8.67451 12.4393 8.69631 12.3805C8.7181 12.3218 8.72755 12.2593 8.72409 12.1969ZM4.89573 1.51371C4.89573 1.77646 4.68754 1.97947 4.41812 1.97947C4.14867 1.97947 3.94051 1.77646 3.94051 1.51371C3.94051 1.25097 4.14867 1.04796 4.41812 1.04796C4.68754 1.04796 4.89573 1.25097 4.89573 1.51371Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4649_1571">
                                    <rect width="17" height="16" fill="white" transform="matrix(0 1 -1 0 16 0)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    </div>

                    <h2 className="text-gray-800 font-extrabold text-lg mb-4 text-right mt-5"> دریافت میکنید </h2>
                    <div className="flex items-center justify-center">
                        <div className="bg-gray-100 w-145 h-14 rounded-3xl flex flex-row items-center justify-between">
                            <h2 className="text-gray-500 px-4">مقدار نهایی</h2>
                            <div className="flex flex-row items-center justify-center gap-1 ">
                                <img className="border-gray-400 border-r-1 px-1" src={coin.icon} width={35} height={35} alt="iran" />
                                <p className="text-gray-500">{coin.fa_name}</p>
                            </div>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 10L12 14L8 10" stroke="black" stroke-opacity="0.95" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-gray-800 font-extrabold text-lg mb-4 text-right mt-5">  نرخ ارز یک </h2>
                            <p className="text-gray-800 font-bold text-lg mb-4 text-right mt-5 mx-5">5.600 دلار</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h2 className="text-gray-800 font-extrabold text-lg mb-4 text-right mt-1">  نرخ ارز دو </h2>
                            <p className="text-gray-800 font-bold text-lg mb-4 text-right mt-1 mx-5"> 49.750 تومان</p>
                        </div>

                    </div>

                    <div className="w-full md:w-[540px] h-12 rounded-3xl bg-white border-2 border-sky-700 flex items-center justify-center mx-auto mt-4 cursor-pointer hover:bg-sky-50 transition">
                        <p className="text-sky-700 text-xl font-bold">ادامه خرید</p>
                    </div>

                </div>
            </div>
            <h2 className="text-center  md:text-right text-3xl font-bold mt-20 mb-5 md:mb-0">درباره {coin.fa_name} </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20  px-1">
                <p className="text-lg leading-9">{coin.about}</p>
                <Image className="w-[1300px] md:w-[1900px] md:h-[320px]" src="/Images/Group.png" width={100} height={50} alt="Group"/>
            </div>
            <h2 className="text-center text-3xl mt-25 font-extrabold md:text-right">نمودار قیمت {coin.fa_name} و نرخ برابری تومان</h2>
        </div>
    )
}
