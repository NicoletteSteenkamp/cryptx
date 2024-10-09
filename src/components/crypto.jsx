import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import litecoin from "../images/litecoin.png";
import bitcoin from "../images/bitcoin.png";
import ethereum from "../images/ethereum.png";
import cardano from "../images/cardano.png";
import receivedIcon from "../images/received_icon.png";
import BuyIcon from "../images/buy-icon.png";
import EthereunLine from "../images/Ethereum-line.png";
import BitcoinLine from "../images/Bitcoin-line.png";
import LitecoinLine from "../images/litecoin-line.png";
import cardanoLine from "../images/cardano-line.png";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import {faSpinner} from "react-icons";
import axios from "axios";
import PriceChart from "../Pages/PriceChart";
import { FaSpinner } from "react-icons/fa";



const IconsSec = styled.div`
  display: flex;
  gap: 0.65rem;
  width: 120px;

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  h3 {
    font-size: 0.9rem;
  }

  p {
    font-size: 0.8rem;
    color: #b1b1b1;
  }

  h4 {
    font-size: 0.8rem;
    color: #b1b1b1;
    font-weight: 400;
  }
`;

const IconPic = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #b1b1b1;
  border-radius: 50%;

  img {
    width: 35px;
    border-radius: 50%;
  }
`;

const ChangeSec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  h3 {
    color: #b1b1b1;
    font-size: 0.8rem;
    letter-spacing: 1px;
    font-weight: 400;
  }

  h4 {
    font-size: 0.85rem;
    text-align: right;
  }

  p {
    color: ${({ color }) => color};
    font-size: 0.85rem;
    font-weight: 500;
    text-align: right;
  }
`;

const WrapRight = styled.div`
  padding: 1rem;
  flex: 1;
`;

const RightItem = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .history {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
      font-size: 0.8rem;
      color: #b1b1b1;
    }

    h3 {
      font-size: 1rem;
    }
  }
`;

const RightIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: 1px solid #b1b1b1;
  border-radius: 50%;
`;
const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;


const Container = styled.section`
  display: flex;
  gap: 4rem;
  padding: 0 4rem 0 0;
`;

const Wrap = styled.div`
  padding: 1rem;
`;

const Heading = styled.h2`
  font-size: 1.1rem;
`;

// New styled components
const LeftWrap = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1rem;
`;

const RightWrap = styled.div`
  box-shadow: 0 0.5px 10px #a1a1a1;
  border-radius: 15px;
  padding: 1rem;
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
    align-items: center;
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
      line: cardanoLine,
      change: +0.02,
      price: "4,786",
      transIcon: BuyIcon,
      time: "09:38",
      TransPrice: "14,265",
    },
  ]);

  const fetchCoinPrices = useCallback(async () => {
    try {
      const updatedCardsData = await Promise.all(
        coinsArray.map(async (item) => {
          const response = await axios.get(
            `https://api.coincap.io/v2/assets/${item.shortName.toLowerCase()}`
          );
          const data = response.data.data;
          const num = data.priceUsd >= 1 ? 0 : 2;

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
      console.error(err);
    }
  }, [coinsArray]);

  useEffect(() => {
    fetchCoinPrices();
  }, [fetchCoinPrices]);

  useEffect(() => {
    const interval = setInterval(fetchCoinPrices, 1000 * 60); 
    return () => clearInterval(interval);
  }, [fetchCoinPrices]);

  return (
    <Container>
      <Wrap>
        <Heading>Live Market</Heading>
        {coinsArray.map((item) => (
          <RightItem key={item.id}>
            <IconsSec>
              <RightIcon src={item.transIcon} />
              <div className="text">
                <h3>{item.name}</h3>
                <h4>{item.transIcon === BuyIcon ? "Buy" : "Received"}</h4>
              </div>
            </IconsSec>

            <div className="history text">
              <h3>${item.TransPrice}</h3>
              <p>Today, {item.time}</p>
            </div>
          </RightItem>
        ))}
      </Wrap>
      <WrapRight>
        <Heading>Transactions</Heading>
        {coinsArray.map((item) => (
          <RightItem key={item.id}>
            <IconsSec>
              <RightIcon src={item.transIcon} />
              <div className="text">
                <h3>{item.name}</h3>
                <h4>{item.transIcon === BuyIcon ? "Buy" : "Received"}</h4>
              </div>
            </IconsSec>
            <div className="history text">
              <h3>${item.TransPrice}</h3>
              <p>Today, {item.time}</p>
            </div>
          </RightItem>
        ))}
      </WrapRight>
    </Container>
  );
};


const TopSection = () => {
  const [coinHistory, setCoinHistory] = useState(null);
  const [activeCoin, setActiveCoin] = useState("");
  const [cardsData, setCardsData] = useState([
    {
      icon: bitcoin,
      increase: null,
      price: null,
      name: "Bitcoin",
      short: "BTC",
      coin: "bitcoin",
    },
    {
      icon: ethereum,
      increase: null,
      price: null,
      name: "Ethereum",
      short: "ETH",
      coin: "ethereum",
    },
    {
      icon: litecoin,
      increase: null,
      price: null,
      name: "Litecoin",
      short: "ITL",
      coin: "litecoin",
    },
    {
      icon: cardano,
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
          try {
            const response = await axios.get(
              `https://api.coincap.io/v2/assets/${item.coin}`
            );
            const data = response.data.data;
  
            
            const decimalPlaces = data.priceUsd >= 1 ? 0 : 2;
  
           
            return {
              ...item,
              increase: parseFloat(data.changePercent24Hr).toFixed(2),
              price: new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: decimalPlaces,
              }).format(data.priceUsd),
            };
          } catch (error) {
            console.error(`Error fetching price for ${item.coin}:`, error);
            return { ...item, price: "N/A", increase: "N/A" }; // Handle error per coin
          }
        })
      );
  
      setCardsData(updatedCardsData);
    } catch (err) {
      console.error("Error fetching coin prices:", err);
      
    }
  };
  

  useEffect(() => {
    fetchData("bitcoin", "BTC");
    fetchCoinPrices();
  }, [fetchCoinPrices]);

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
              
              {item.price === null ? <fontawesomeicon icon={faSpinner} size="2x" spin /> : <h3>{item.price}</h3>}

              <Text>
                {item.name} - {item.short}
              </Text>
            </Card>
          );
        })}
      </LeftWrap>
      <RightWrap>
        <h3>{activeCoin} Prices</h3>
        {coinHistory && <PriceChart data={coinHistory} coin={activeCoin} />}

      </RightWrap>
    </Container>
  );
};
const cryptopage = () => {
  return (
    <MainContainer>
      <TopSection />
     
      <BottomSection />
    </MainContainer>
  );
};

export default cryptopage;
