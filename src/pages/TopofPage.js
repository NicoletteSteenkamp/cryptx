import styled from "styled-components";
import BitcoinIcon from "../images/bitcoin.png";
import LitecoinIcon from "../images/litecoin.png";
import EthereumIcon from "../images/ethereum.png";
import CardanoIcon from "../images/cardano.png";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import PriceChart from "./PriceChart";
import { useState, useEffect } from "react";
import axios from "axios";


const Container = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1rem;
  padding: 2rem 4rem 0 1rem;
`;

const LeftWrap = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1rem;
`;

const Card = styled.div`
  box-shadow: 0 0.5px 10px #a1a1a1;
  width: fit-content;
  min-width: 250px;
  cursor: pointer;
  padding: 0.75rem 1.6rem;
  border-radius: 15px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  h3 {
    font-size: 1.1rem;
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;

  div {
    display: flex;
    align-items: canter;
    gap: 0.35rem;
    color: ${({ color }) => color};
    font-size: 0.9rem;
    font-weight: 500;

    svg {
      margin-top: 0.2rem;
    }
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 0 0.7rem;
`;

const Text = styled.p`
  font-size: 0.85rem;
  margin-top: 0.35rem;
  color: #b1b1b1;
`;

const RightWrap = styled.div`
  box-shadow: 0 0.5px 10px #a1a1a1;
  border-radius: 15px;
  padding: 1rem;
`;

const Topofpage = () => {
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
        `https://api.coincap.io/v2/assets/${coin}/history?interval=m5`
      );
      const data = response.data.data;
      setActiveCoin(short);
      const mapData = data.map((item) => {
        const options = { day: "numeric", month: "short" };
        return {
          date: new Date(item.time).toLocaleDateString("en-US", options),
          price: item.priceUsd,
        };
      });
      setCoinHistory(mapData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCoinPrices = async () => {
    try {
      const updatedCardsData = await Promise.all(
        cardsData.map(async (item) => {
          const response = await axios.get(
            `https://api.coincap.io/v2/assets/${item.coin}`
          );
          const data = response.data.data;
          let num = data.priceUsd >= 1 ? 0 : 2

          return {
            ...item,
            increase: parseFloat(data.changePercent24Hr).toFixed(2),
            price: new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: num,
            }).format(data.priceUsd),
          };
        })
      );

      setCardsData(updatedCardsData);
    } catch (err){
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData("bitcoin", "BTC");
    fetchCoinPrices();
  }, []);

  return (
    <Container>
      <LeftWrap>
        {cardsData.map((item) => {
          return (
            <Card
              key={item.name}
              onClick={() => fetchData(item.coin, item.short)}
            >
              <Icons color={item.increase < 0 ? "orange" : "rgb(45, 225, 45)"}>
                <Image src={item.icon} alt={item.name} />
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
              </Icons>
              {item.price === null ? <FontAwesomeIcon icon={faSpinner} size="2x" spin /> : <h3>{item.price}</h3>}
              <Text>
                {item.name} - {item.short}
              </Text>
            </Card>
          );
        })}
      </LeftWrap>
      <RightWrap>
        <h3>{activeCoin} Prices</h3>
        <PriceChart history={coinHistory} assetId="bitcoin"  />
      </RightWrap>
    </Container>
  );
};

export default Topofpage;