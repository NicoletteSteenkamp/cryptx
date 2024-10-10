import React, { useState, useEffect } from "react";
import axios from "axios";
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
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  gap: 4rem;
  padding: 0 4rem 0 0;

  .prices {
    width: 80px;
  }
`;

const Wrap = styled.div`
  padding: 1rem;
`;

const Heading = styled.h2`
  font-size: 1.1rem;
`;

const StatsContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 4rem;
  align-items: center;
`;

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
  justify-content: flex-start;
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
    display: flex;
    align-items: right;
    justify-content: flex-end;
  }

  p {
    color: ${({ color }) => color};
    font-size: 0.85rem;
    font-weight: 500;
    display: flex;
    align-items: right;
    justify-content: flex-end;
  }
`;

const Image = styled.img`
  width: 185px;
  height: 40px;
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
    align-items: center;
    justify-content: flex-end;
    text-align: right;

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

  const fetchCoinPrices = async () => {
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
  };

  useEffect(() => {
    fetchCoinPrices(); // Fetch initial data on mount
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchCoinPrices, 1000 * 60); // Update every minute
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [coinsArray]);

  return (
    <Container>
      <Wrap>
        <Heading>Live Market</Heading>
        {coinsArray.map((item) => {
          return (
            <StatsContainer key={item.id}>
              <IconsSec>
                <IconPic>
                  
                  <img src={item.icon} />
                </IconPic>
                <div className="text">
                  <h3>{item.name}</h3>
                  <p>{item.shortName} / USD</p>
                </div>
              </IconsSec>
              <ChangeSec
                color={item.change < 0 ? "orange" : "rgb(45, 225, 45)"}
              >
                <h3>Change</h3>
                <p>
                  {item.change > 0 && "+"}
                  {item.change}%
                </p>
              </ChangeSec>
              <ChangeSec className="prices">
                <h3>Price</h3>
                <h4>{item.price} USD</h4>
              </ChangeSec>
              <Image src={item.line} />
            </StatsContainer>
          );
        })}
      </Wrap>
      <WrapRight>
        <Heading>Transactions </Heading>
        {coinsArray.map((item) => {
          return (
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
          );
        })}
      </WrapRight>
    </Container>
  );
};

export default BottomSection;