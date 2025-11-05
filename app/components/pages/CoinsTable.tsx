"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Coins, Search } from "lucide-react";
import Pagination from "./Pagination"; // مسیر کامپوننت pagination
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
      <div className="container mx-auto ">
        {/* هدر و سرچ */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4"></div>

        {/* نسخه دسکتاپ */}
        <div className="hidden md:block bg-white rounded-2xl shadow">
          <table className="text-center w-full">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-4 px-3 font-semibold">نام رمز ارز</th>
                <th className="py-4 px-3 font-semibold">ارزش دلاری</th>
                <th className="py-4 px-3 font-semibold">تغییر روزانه</th>
                <th className="py-4 px-3 font-semibold">خرید از والت</th>
                <th className="py-4 px-3 font-semibold">فروش به والت</th>
                <th className="py-4 px-3 font-semibold">
                  <div className="relative md:w-80">
                    <Search
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="جستجوی ارز..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-lg text-right"
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
                coins.map((coin) => (
                  <tr key={coin.id} className="hover:bg-gray-50 transition">
                    <td className="py-5 flex items-center gap-2 justify-center">
                      <img
                        src={coin.icon}
                        alt={coin.fa_name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span>
                        {coin.fa_name} ({coin.currency_code})
                      </span>
                    </td>
                    <td className="py-4 px-3">
                      {Number(coin.price).toLocaleString()}
                    </td>
                    <td
                      className={`py-4 px-3 font-semibold ${
                        parseFloat(coin.daily_change_percent) >= 0
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {coin.daily_change_percent}٪
                    </td>
                    <td className="py-4 px-3">{Number(coin.buy_irt_price).toLocaleString()} تومان
                    </td>
                    <td className="py-4 px-3">
                      {Number(coin.sell_irt_price).toLocaleString()} تومان
                    </td>
                    <td className="py-4 px-3">
                      <Link href={`/coins/${coin.currency_code}`}>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
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

        {/* نسخه موبایل */}
        <div className="grid md:hidden gap-4 mt-6">
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="bg-white p-4 rounded-2xl shadow flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <img
                  src={coin.icon}
                  alt={coin.fa_name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {coin.fa_name} ({coin.currency_code})
                  </p>
                  <p className="text-gray-500 text-sm">
                    {Number(coin.price).toLocaleString()} تومان
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`font-bold ${
                    parseFloat(coin.daily_change_percent) >= 0
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {coin.daily_change_percent}٪
                </p>
                <Link href={`/coins/${coin.currency_code}`}>
                <button  className="mt-2 bg-blue-600 text-white text-sm px-6 py-3 rounded-md hover:bg-blue-700 transition">
                  معامله
                </button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
      </div>
    </div>
  );
}








