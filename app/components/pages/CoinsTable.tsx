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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { data: coins = [], isLoading, isError } = useQuery({
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
    <div className="max-w-[1140px] mx-auto">

      {/* ✅ Desktop Table — بدون تغییر */}
      <div className="hidden md:block bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-center table-fixed">
          <thead className="bg-gray-200 text-gray-900">
            <tr>
              <th className="py-4 w-1/6 font-bold">نام رمز ارز</th>
              <th className="py-4 w-1/6 font-semibold">ارزش دلاری</th>
              <th className="py-4 w-1/6 font-semibold">تغییر روزانه</th>
              <th className="py-4 w-1/6 font-semibold">خرید از والت</th>
              <th className="py-4 w-1/6 font-semibold">فروش به والت</th>
              <th className="py-4 w-1/6 font-semibold">
                <div className="relative w-44 mx-auto">
                  <Search className="absolute left-39 top-4.5 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="جستجوی ارز..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-white py-4 px-6 text-right rounded-lg  "
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
                  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
                >
                  <td className="py-4 flex items-center gap-1 justify-start px-3">
                    <img src={coin.icon} alt={coin.fa_name} className="w-11 h-11 rounded-full" />
                    <div>
                      <p className="font-semibold text-center">{coin.fa_name}</p>
                      <p className="text-sm text-gray-500 text-right">{coin.currency_code}</p>
                    </div>
                  </td>

                  <td className="py-4">{Number(coin.price).toLocaleString()}</td>

                  <td
                    className={`py-4 font-semibold ${
                      parseFloat(coin.daily_change_percent) >= 0
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {coin.daily_change_percent}٪
                  </td>

                  <td className="py-4">{Number(coin.buy_irt_price).toLocaleString()} تومان</td>
                  <td className="py-4">{Number(coin.sell_irt_price).toLocaleString()} تومان</td>

                  <td className="py-4">
                    <Link href={`/coins/${coin.currency_code}`}>
                      <button className="bg-blue-600 text-white px-10 py-2 rounded-lg hover:bg-blue-700">
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

      {/* ✅ Mobile Accordion Version */}
      <div className="md:hidden bg-white rounded-2xl shadow overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-3 text-center bg-gray-200 py-4 text-gray-900 font-bold">
          <p>نام رمز ارز</p>
          <p>ارزش دلاری</p>
          <p>تغییر روزانه</p>
        </div>

        {coins.map((coin, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={coin.id}
              onClick={() => toggleRow(index)}
              className={`cursor-pointer transition-all duration-300 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              }`}
            >
              <div className="grid grid-cols-3 items-center py-4 px-2 text-center">

                <div className="flex items-center text-sm justify-start gap-1">
                  <img
                    src={coin.icon}
                    alt={coin.fa_name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="text-right leading-tight">
                    <p className="text-md pb-1">{coin.fa_name}</p>
                    <p className="text-xs text-gray-500">
                      {coin.currency_code}
                    </p>
                  </div>
                </div>

                <p className="font-medium">
                  ${Number(coin.price).toLocaleString()}
                </p>

                <p
                  className={`font-bold whitespace-nowrap ${
                    parseFloat(coin.daily_change_percent) >= 0
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {coin.daily_change_percent}٪
                </p>
              </div>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4">
                  <div className="flex justify-between text-sm">
                    <p className="text-gray-800">فروش به والت:</p>
                    <span className="font-semibold">
                      {Number(coin.sell_irt_price).toLocaleString()} تومان
                    </span>
                  </div>

                  <div className="flex justify-between mt-2 text-sm">
                    <p className="text-gray-800">خرید از والت:</p>
                    <span className="font-semibold">
                      {Number(coin.buy_irt_price).toLocaleString()} تومان
                    </span>
                  </div>

                  <Link href={`/coins/${coin.currency_code}`}>
                    <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl active:scale-95">
                      معامله
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
    </div>
  );
}










