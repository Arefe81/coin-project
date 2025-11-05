"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import Pagination from "./Pagination";
import { CoinItem } from "@/app/types";

const fetchCoins = async (page: number, search: string): Promise<CoinItem[]> => {
  const { data } = await axios.post("https://b.wallet.ir/coinlist/list", {
    page,
    limit: 9,
    search,
  });
  return data.items || data.data || [];
};

export default function CoinsTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const {
    data: coins = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coins", page, search],
    queryFn: () => fetchCoins(page, search),
  });

  if (isError)
    return (
      <p className="text-center text-red-500 mt-1">
        خطا در دریافت اطلاعات از سرور
      </p>
    );

  return (
    <div className="">
      <div className="max-w-[1140px] mx-auto">

      
        <div className="hidden md:block bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full text-center">
            <thead className="bg-gray-200 text-gray-900">
              <tr>
                <th className="py-4  font-bold">نام رمز ارز</th>
                <th className="py-4 font-semibold">ارزش دلاری</th>
                <th className="py-4 font-semibold">تغییر روزانه</th>
                <th className="py-4 font-semibold">خرید از والت</th>
                <th className="py-4 font-semibold">فروش به والت</th>
                <th className="py-4 font-semibold">
                  <div className="relative w-60 mx-auto">
                    <Search
                      className="absolute left-54 top-5 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="جستجوی ارز..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full bg-white  py-4 px-6 text-right rounded-lg border border-gray-300 focus:border-blue-600"
                    />
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="py-6 text-gray-500">
                    در حال بارگذاری...
                  </td>
                </tr>
              ) : (
                coins.map((coin, index) => (
                  <tr
                    key={coin.id}
                    className={`transition ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-100"
                    } `}
                  >
                    
                    <td className="py-4 pr-6 flex items-center gap-3 justify-start text-center">
                        <img
                          src={coin.icon}
                          alt={coin.fa_name}
                          className="w-11 h-11 object-cover rounded-full"
                        />
                        <div className="flex flex-col justify-center text-right">
                          <span className="text-md font-semibold">
                            {coin.fa_name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {coin.currency_code}
                          </span>
                        </div>
                    
                    </td>

                    <td className="py-4">
                      {Number(coin.price).toLocaleString()}
                    </td>

                    <td
                      className={`py-4 font-semibold ${
                        parseFloat(coin.daily_change_percent) >= 0
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {coin.daily_change_percent}٪
                    </td>

                    <td className="py-4">
                      {Number(coin.buy_irt_price).toLocaleString()} تومان
                    </td>

                    <td className="py-4">
                      {Number(coin.sell_irt_price).toLocaleString()} تومان
                    </td>

                    <td className="py-4">
                      <Link href={`/coins/${coin.currency_code}`}>
                        <button className="bg-blue-600 text-white px-10 py-2 rounded-lg hover:bg-blue-700 transition">
                          معامله
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* ✅ نسخه موبایل (بدون تغییر — خودش درست بود) */}
        <div className="md:hidden mt-8 bg-white rounded-2xl shadow overflow-hidden">

          <div className="grid grid-cols-3 text-center bg-gray-200 py-4 text-gray-700 font-semibold">
            <p>نام رمز ارز</p>
            <p>ارزش دلاری</p>
            <p>تغییر روزانه</p>
          </div>

          {coins.map((coin, index) => (
            <div
              key={coin.id}
              className={`transition ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className="grid grid-cols-3 items-center py-4 px-3 text-center">
                <div className="flex items-center gap-2 justify-center">
                  <img src={coin.icon} className="w-11 h-11 rounded-full" />
                  <div className="text-right">
                    <span className="text-md font-semibold">{coin.fa_name}</span>
                    <div className="text-sm text-gray-500">
                      {coin.currency_code}
                    </div>
                  </div>
                </div>

                <p className="text-md font-medium">
                  ${Number(coin.price).toLocaleString()}
                </p>

                <p
                  className={`text-md font-bold ${
                    parseFloat(coin.daily_change_percent) >= 0
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {coin.daily_change_percent}٪
                </p>
              </div>

              <div className="px-4 pb-4">
                <div className="flex justify-between">
                  <p className="text-md text-gray-800">فروش به والت :</p>
                  <span className="font-semibold text-gray-700">
                    {Number(coin.sell_irt_price).toLocaleString()} تومان
                  </span>
                </div>

                <div className="flex justify-between mt-2">
                  <p className="text-md text-gray-800">خرید از والت :</p>
                  <span className="font-semibold text-gray-700">
                    {Number(coin.buy_irt_price).toLocaleString()} تومان
                  </span>
                </div>

                <button className="w-full mt-4 bg-blue-600 text-white text-lg py-4 rounded-xl">
                  معامله
                </button>
              </div>
            </div>
          ))}
        </div>

        <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
      </div>
    </div>
  );
}








