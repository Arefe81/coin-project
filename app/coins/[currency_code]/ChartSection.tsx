"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  ComposedChart,
  Line,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
} from "recharts";
import { useQuery } from "@tanstack/react-query";

interface ChartSectionProps {
  currency_code: string;
}

interface ChartItem {
  date: string;
  price: number;
  irt_price: number;
  usd_price: number;
}

const fetchChartData = async (
  currency_code: string,
  period: string
): Promise<ChartItem[]> => {
  const { data } = await axios.post(
    "https://b.wallet.ir/coinlist/chart",
    {
      currency_code,
      period,
    }
  );
  return data.items;
};

export default function ChartSection({ currency_code }: ChartSectionProps) {
  const [period, setPeriod] = useState("1m");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["chart-data", currency_code, period],
    queryFn: () => fetchChartData(currency_code, period),
    enabled: !!currency_code,
  });

  if (isLoading) return <p>درحال بارگذاری چارت...</p>;
  if (isError || !data) return <p>خطا در دریافت اطلاعات چارت</p>;

  return (
    <div className=" bg-white rounded-2xl shadow order-2 md:order-1 py-3 md:max-w-[1140] mx-auto mt-20">
      <ul className="flex gap-8 pb-4 text-sm">
        {[
          { label: "24 ساعته", val: "24h" },
          { label: "1 هفته", val: "1w" },
          { label: "1 ماه", val: "1m" },
          { label: "1 سال", val: "1y" },
        ].map((i) => (
          <li
            key={i.val}
            onClick={() => setPeriod(i.val)}
            className={`cursor-pointer mx-2  text-md ${
              period === i.val ? "text-[#0D1A8E] " : "text-[#242222]"
            }`}
          >
            {i.label}
          </li>
        ))}
      </ul>

    
      <div className="w-full h-[400px] my-6 boxshadwo bg-white p-6 rounded-lg">
        <ResponsiveContainer>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

          
            <YAxis
              yAxisId="left"
              orientation="left"
              tickFormatter={(v) => Intl.NumberFormat("fa-IR").format(v)}
              width={70}
            />

            
            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={(v) => Intl.NumberFormat("fa-IR").format(v)}
              width={70}
            />

           
            <XAxis
              dataKey="date"
              tickFormatter={(v) =>
                new Date(v).toLocaleDateString("fa-IR", {
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                })
              }
              tick={{ fontSize: 11 }}
              interval="preserveStartEnd"
            />

            <Tooltip />
               <Line
              yAxisId="right"
              dataKey="irt_price"
              type="linear"
              stroke="#1652F0"
              strokeWidth={2}
              dot={false}
            />

            
            <Area
              yAxisId="left"
              dataKey="price"
              type="linear"
              fill="#F7931A22"
              stroke="#F7931A"
              strokeWidth={2}
            />

           
         
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      
      <div className="w-full h-[120px] boxshadwo bg-white p-4 rounded-lg">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <XAxis dataKey="date" hide />
            <Tooltip />
            <Area
              dataKey="usd_price"
              type="linear"
              fill="#4BB54333"
              stroke="#4BB543"
              strokeWidth={1.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

  
      <ul className="flex gap-6 justify-center text-sm mt-4">
        <li className="flex gap-2 items-center">
          قیمت دلار
          <span className="w-2.5 h-2.5 bg-[#4BB543] rounded-full"></span>
        </li>
        <li className="flex gap-2 items-center">
          قیمت ریال
          <span className="w-2.5 h-2.5 bg-[#1652F0] rounded-full"></span>
        </li>
        <li className="flex gap-2 items-center">
          قیمت ارز
          <span className="w-2.5 h-2.5 bg-[#F7931A] rounded-full"></span>
        </li>
      </ul>
    </div>
  );
}









