import React from "react";

const TransactionsSection = ({ coinsArray }) => {
  return (
    <div className="wrap-right">
      <h2 className="heading">Transactions</h2>
      {coinsArray.map((item) => (
        <div className="right-item" key={item.id}>
          <div className="history">
            <h3>{item.time}</h3>
            <p>Last transaction: {item.TransPrice} USD</p>
          </div>
          <div className="icon-pic right-icon">
            <img src={item.transIcon} alt={`${item.name} transaction`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionsSection;
