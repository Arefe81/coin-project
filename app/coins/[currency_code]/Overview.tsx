import React from "react";
import { CoinItem } from "@/app/types";

interface PriceBoxProps {
    coin: CoinItem
}

export default function Overview ({coin}:PriceBoxProps){
    return(
        <div className="mt-15 max-w-[450] md:max-w-[1140] mx-auto">
            <h2 className="text-3xl font-bold  md:text-right text-center">توضیحات بیشتر درباره {coin.fa_name}</h2>
            <p className="mt-8 text-xl leading-loose">{coin.about}</p>
            <p className=" text-xl mt-3 leading-loose">{coin.about}</p>
        </div>
    )
}