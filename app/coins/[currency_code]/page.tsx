"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CoinItem } from "@/app/types";
import PriceBox from "./Pricebox";
import ChartSection from "./ChartSection";
import Overview from "./Overview";
import QuestionBox from "./QuestionBox";

const fetchCoinDetail = async (currency_code: string): Promise<CoinItem> => {
  const { data } = await axios.post("https://b.wallet.ir/coinlist/list", {
    page: 1,
    limit: 1,
    search: currency_code,
  });

  return data.items?.[0];
};

export default function FetchCoinPage() {
  // ✅ تبدیل دقیق params به string تا ارور نده
  const { currency_code } = useParams() as { currency_code: string };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["coin-detail", currency_code],
    queryFn: () => fetchCoinDetail(currency_code),
    enabled: !!currency_code, // ✅ بدون کد، درخواست ارسال نشه
  });

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (isError || !data)
    return <p>خطایی رخ داده است یا داده‌ای یافت نشد</p>;

  return (
    <div className="max-w-[1140] mx-auto px-4 py-6">
      
      <PriceBox coin={data} />

      {/* ✅ چارت */}
      <ChartSection currency_code={currency_code} />
      <Overview coin={data}/>
      <QuestionBox/>
    </div>
  );
}
