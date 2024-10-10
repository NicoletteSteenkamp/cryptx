import './TopSection.css'; 
import BitcoinIcon from "../imagesbitcoin.png";
import LitecoinIcon from "../images/litecoin.png";
import EthereumIcon from "../images/litecoin.png";
import CardanoIcon from "../images/cardano.png";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Chart from "./PriceChart";
import { useState, useEffect } from "react";
import axios from "axios";

const TopofPage = () => {
  const [coinHistory, setCoinHistory] = useState(null);
  const [activeCoin, setActiveCoin] = useState("");
  const [cardsData, setCardsData] = useState([
    {
      icon: BitcoinIcon,
      increase: null,
      price: null,
      name: "Bitcoin",
      short: "BTC",
      coin: "bitcoin",
    },
    {
      icon: EthereumIcon,
      increase: null,
      price: null,
      name: "Ethereum",
      short: "ETH",
      coin: "ethereum",
    },
    {
      icon: LitecoinIcon,
      increase: null,
      price: null,
      name: "Litecoin",
      short: "ITL",
      coin: "litecoin",
    },
    {
      icon: CardanoIcon,
      increase: null,
      price: null,
      name: "Cardano",
      short: "ADA",
      coin: "cardano",
    },
  ]);

  const fetchData = async (coin, short) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7`
      );
      const data = response.data.prices;
      setActiveCoin(short);
      const mapData = data.map((item) => {
        const options = { day: "numeric", month: "short" };
        return {
          date: new Date(item[0]).toLocaleDateString("en-US", options),
          price: item[1],
        };
      });
      setCoinHistory(mapData);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    const fetchCoinPrices = async () => {
      try {
        const updatedCardsData = await Promise.all(
          cardsData.map(async (item) => {
            const response = await axios.get(
              `https://api.coingecko.com/api/v3/simple/price?ids=${item.coin}&vs_currencies=usd&include_percentage_change=true`
            );
            const data = response.data[item.coin];
            const num = data.usd >= 1 ? 0 : 2;
  
            return {
              ...item,
              increase: parseFloat(data.usd_change_percentage).toFixed(2),
              price: new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: num,
              }).format(data.usd),
            };
          })
        );
  
        setCardsData(updatedCardsData);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData("bitcoin", "BTC");
    fetchCoinPrices();
  }, [cardsData]); 
  

  useEffect(() => {
    fetchData("bitcoin", "BTC");
    // eslint-disable-next-line no-undef
    fetchCoinPrices();
  }, []);
  

  return (
    <section className="container">
      <div className="left-wrap">
        {cardsData.map((item) => {
          return (
            <div
              key={item.name}
              className="card"
              onClick={() => fetchData(item.coin, item.short)}
            >
              <div className="icons" style={{ color: item.increase < 0 ? "orange" : "rgb(45, 225, 45)" }}>
                <img src={item.icon} alt={item.name} className="image" />
                {item.increase !== null && (
                  <div>
                    {item.increase > 0 ? (
                      <AiFillCaretUp />
                    ) : (
                      <AiFillCaretDown />
                    )}
                    {item.increase > 0 && "+"}
                    {item.increase}%
                  </div>
                )}
              </div>
              {item.price === null ? <FontAwesomeIcon icon={faSpinner} size="2x" spin /> : <h3>{item.price}</h3>}
              <p className="text">
                {item.name} - {item.short}
              </p>
            </div>
          );
        })}
      </div>
      <div className="right-wrap">
        <h3>{activeCoin} Prices</h3>
        <Chart history={coinHistory} coin={activeCoin} />
      </div>
    </section>
  );
};

export default TopofPage;
