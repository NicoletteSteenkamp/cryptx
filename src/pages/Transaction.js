import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";
import BuyIcon from "../images/buy-icon.png"; 

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

const RightIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: 1px solid #b1b1b1;
  border-radius: 50%;
`;

const Heading = styled.h2`
  font-size: 1.1rem;
`;

const Transaction = ({ coinsArray }) => {
  if (!coinsArray || coinsArray.length === 0) {
    return <div>No transactions available.</div>; // or any fallback UI
  }

  return (
    <div>
      <Heading>Transactions</Heading>
      {coinsArray.map((item) => (
        <RightItem key={item.id}>
          <IconsSec>
            <RightIcon src={item.transIcon} alt={item.name} />
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
    </div>
  );
};

// PropTypes validation
Transaction.propTypes = {
  coinsArray: PropTypes.array.isRequired, // Ensure coinsArray is passed as an array
};

export default Transaction;