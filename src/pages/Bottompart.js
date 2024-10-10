import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import MarketSection from "./Marketsection";
import TransactionsSection from "./Transactionsection";
import EthereunLine from "../images/Ethereum-line.png";
import BitcoinLine from "../images/Bitcoin-line.png";
import LitecoinLine from "../images/litecoin-line.png";
import litecoin from "../images/litecoin.png";
import bitcoin from "../images/bitcoin.png";
import ethereum from "../images/ethereum.png";
import cardano from "../images/cardano.png";
import cardanoline from "../images/cardano-line.png";
import receivedIcon from "../images/received_icon.png";
import BuyIcon from "../images/buy-icon.png";
import "./BottomSection.css";

const BottomSection = () => {
  const [coinsArray, setCoinsArray] = useState([
    {
      id: 1,
      name: "Ethereum",
      shortName: "ETH",
      icon: ethereum,
      line: EthereunLine,
      change: +14.02,
      price: "39,786",
      transIcon: receivedIcon,
      time: "19:30",
      TransPrice: "24,102",
    },
    {
      id: 2,
      name: "Bitcoin",
      shortName: "BIT",
      icon: bitcoin,
      line: BitcoinLine,
      change: +4.02,
      price: "21,786",
      transIcon: BuyIcon,
      time: "14:32",
      TransPrice: "4,157",
    },
    {
      id: 3,
      name: "Litecoin",
      shortName: "ITC",
      icon: litecoin,
      line: LitecoinLine,
      change: -4.02,
      price: "9,786",
      transIcon: BuyIcon,
      time: "13:50",
      TransPrice: "64,787",
    },
    {
      id: 4,
      name: "Cardano",
      shortName: "ADA",
      icon: cardano,
      line: cardanoline,
      change: +0.02,
      price: "4,786",
      transIcon: BuyIcon,
      time: "09:38",
      TransPrice: "14,265",
    },
  ]);

  // Wrap fetchCoinPrices in useCallback to prevent recreation on each render
  const fetchCoinPrices = useCallback(async () => {
    try {
      const updatedCardsData = await Promise.all(
        coinsArray.map(async (item) => {
          const response = await axios.get(
            `https://api.coincap.io/v2/assets/${item.name.toLowerCase()}`
          );
          const data = response.data.data;
          let num = data.priceUsd >= 1 ? 0 : 2;

          return {
            ...item,
            change: parseFloat(data.changePercent24Hr).toFixed(2),
            price: new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: num,
            }).format(data.priceUsd),
          };
        })
      );
      setCoinsArray(updatedCardsData);
    } catch (err) {
      console.log(err);
    }
  }, [coinsArray]); // Add coinsArray as a dependency

  // Run fetchCoinPrices when the component mounts or when coinsArray changes
  useEffect(() => {
    fetchCoinPrices();
  }, [fetchCoinPrices]); // Now the effect depends on the memoized fetchCoinPrices

  return (
    <div className="container">
      <MarketSection coinsArray={coinsArray} />
      <TransactionsSection coinsArray={coinsArray} />
    </div>
  );
};

export default BottomSection;
