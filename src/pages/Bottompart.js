import React, { useState, useEffect } from "react";
import axios from 'axios';
import './BottomSection.css'; // Import the CSS file
import EthereunLine from "../assets/Ethereum-line.png";
import BitcoinLine from "../assets/Bitcoin-line.png";
import LitecoinLine from "../assets/litecoin-line.png";
import LiteIcon from "../assets/lite-icon.png";
import BitIcon from "../assets/Bit-icon.png";
import EthIcon from "../assets/Eth-icon.png";
import CardIcon from "../assets/cord-icon.png";
import CardanoLine from "../assets/cardano-line.png";
import receivedIcon from "../assets/received_icon.png";
import BuyIcon from "../assets/buy-icon.png";

const BottomSection = () => {
  const [coinsArray, setCoinsArray] = useState([
    {
      id: 1,
      name: "Ethereum",
      shortName: "ETH",
      icon: EthIcon,
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
      icon: BitIcon,
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
      icon: LiteIcon,
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
      icon: CardIcon,
      line: CardanoLine,
      change: +0.02,
      price: "4,786",
      transIcon: BuyIcon,
      time: "09:38",
      TransPrice: "14,265",
    },
  ]);

  const fetchCoinPrices = async () => {
    try {
      const updatedCardsData = await Promise.all(
        coinsArray.map(async (item) => {
          const response = await axios.get(
            `https://api.coingecko.com/api/v3/simple/price?ids=${item.shortName.toLowerCase()}&vs_currencies=usd&include_percentage_change=true`
          );
          const data = response.data[item.shortName.toLowerCase()];

          let num = data.usd >= 1 ? 0 : 2;

          return {
            ...item,
            change: parseFloat(data.usd_change_percentage).toFixed(2),
            price: new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: num,
            }).format(data.usd),
          };
        })
      );

      setCoinsArray(updatedCardsData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCoinPrices(); // Fetch initial data on mount
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchCoinPrices, 1000 * 60); // Update every minute
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [coinsArray]);

  return (
    <div className="container">
      <div className="wrap">
        <h2 className="heading">Live Market</h2>
        {coinsArray.map((item) => {
          return (
            <div className="stats-container" key={item.id}>
              <div className="icons-sec">
                <div className="icon-pic">
                  <img src={item.icon} alt={item.name} />
                </div>
                <div className="text">
                  <h3>{item.name}</h3>
                  <p>{item.shortName} / USD</p>
                </div>
              </div>
              <div className="change-sec" style={{ color: item.change < 0 ? "orange" : "rgb(45, 225, 45)" }}>
                <h3>Change</h3>
                <p>
                  {item.change > 0 && "+"}
                  {item.change}%
                </p>
              </div>
              <div className={`change-sec prices`}>
                <h3>Price</h3>
                <h4>{item.price} USD</h4>
              </div>
              <img className="image" src={item.line} alt={`${item.name} trend`} />
            </div>
          );
        })}
      </div>
      <div className="wrap-right">
        <h2 className="heading">Transactions</h2>
        {coinsArray.map((item) => {
          return (
            <div className="right-item" key={item.id}>
              <div className="history">
                <h3>{item.time}</h3>
                <p>Last transaction: {item.TransPrice} USD</p>
              </div>
              <div className="icon-pic right-icon">
                <img src={item.transIcon} alt={`${item.name} transaction`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomSection;
