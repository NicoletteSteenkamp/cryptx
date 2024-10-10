import React from "react";





const MarketSection = ({ coinsArray }) => {
  return (
    <div className="wrap">
      <h2 className="heading">Live Market</h2>
      {coinsArray.map((item) => (
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
      ))}
    </div>
  );
};

export default MarketSection;
