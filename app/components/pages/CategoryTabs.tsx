"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Category = {
  id: string;
  title: string;
};

const categories: Category[] = [
  { id: "defi", title: "دیفای" },
  { id: "privacy", title: "حریم خصوصی" },
  { id: "metaverse", title: "متاورس" },
  { id: "mineable", title: "قابل استخراج" },
  { id: "meme", title: "میم کوین" },
  { id: "stablecoin", title: "استیبل کوین" },
  { id: "token", title: "توکن" },
  { id: "ico", title: "ICO" },
];

export default function CategoryTabs() {
  const [active, setActive] = useState("defi");
  const [isOpen, setIsOpen] = useState(false);

  const activeCategory = categories.find((cat) => cat.id === active);

  return (
    <div className=" flex flex-col items-center gap-6 py-10">
      
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-10 text-gray-800">
        لیست قیمت لحظه‌ای ارزهای دیجیتال
      </h2>

     
      <div className="hidden container  md:flex flex-row justify-between gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-6 py-2 rounded-xl font-medium border text-base transition 
              ${
                active === cat.id
                  ? "bg-blue-600 text-white border-blue-600 shadow"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-200"
              }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* نسخه موبایل */}
      <div className="relative w-full max-w-xs md:hidden">
        {/* دکمه اصلی */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold text-base"
          dir="rtl"
        >
          <span>{activeCategory?.title}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-white" />
          ) : (
            <ChevronDown className="w-5 h-5 text-white" />
          )}
        </button>

        {/* منوی کشویی */}
        {isOpen && (
          <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10" dir="rtl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActive(cat.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-right px-4 py-3 rounded-xl text-sm transition ${
                  active === cat.id
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


