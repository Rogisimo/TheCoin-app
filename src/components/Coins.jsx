import React from "react";
import { useEffect, useState } from "react";
import CoinCard from "./CoinCard";

import { fetchData, coinsOptions } from "../utils/fetchData";

function Coins({ setCoins, coins }) {

  useEffect(() => {

    const fetchCoinsData = async () => {
      let coinsData = [];
  
      coinsData = await fetchData(
        "https://coinranking1.p.rapidapi.com/coins",
        coinsOptions
      );
  
      setCoins(coinsData.data.coins)
      console.log(coins)
     
    };

    fetchCoinsData();
  }, []);

  const currentCoins = coins.slice(0,9)
  

  return (
    <div className="coin-list">
    {
      
      currentCoins.map((coin) => (
        <CoinCard coin={coin}/>
      ))
    }
  </div>
  )
}

export default Coins;
