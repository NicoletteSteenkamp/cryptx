import React from "react";  
import "./crypto.css";  
import bitcoinimg from "./images/bitcoin.png";  
import ethereumimg from "./images/ethereum.png";  
import litecoinimg from "./images/litecoin.png";  
import cardanoimg from "./images/cardano.png";  

export default function Crypto() {  
    return (  
        <div className="crypto">  
            {/* Use flexbox to align coins and charts horizontally */}  
            <div className="coins-and-charts">  
                <div className="coins">  
                    {/* Bitcoin Block */}  
                    <div className="top-coins">  
                        <div className="bitcoin">  
                            <img src={bitcoinimg} alt="Bitcoin" />  
                            <div className="price">$40,291</div>  
                            <div className="percentage">  
                                <img src="https://via.placeholder.com/18" alt="Percentage" />  
                                +0.25%  
                            </div>  
                            <div className="text">Bitcoin - BTC</div>  
                        </div>  

                        {/* Ethereum Block */}  
                        <div className="ethereum">  
                            <img src={ethereumimg} alt="Ethereum" />  
                            <div className="price">$2,915</div>  
                            <div className="percentage">  
                                <img src="https://via.placeholder.com/18" alt="Percentage" />  
                                +1.05%  
                            </div>  
                            <div className="text">Ethereum - ETH</div>  
                        </div>  
                    </div>  
                    <div className="bottom-coins">  
                        {/* Litecoin Block */}  
                        <div className="litecoin">  
                            <img src={litecoinimg} alt="Litecoin" />  
                            <div className="price">$182</div>  
                            <div className="percentage">  
                                <img src="https://via.placeholder.com/18" alt="Percentage" />  
                                -0.15%  
                            </div>  
                            <div className="text">Litecoin - LTC</div>  
                        </div>  

                        {/* Cardano Block */}  
                        <div className="cardano">  
                            <img src={cardanoimg} alt="Cardano" />  
                            <div className="price">$1.32</div>  
                            <div className="percentage">  
                                <img src="https://via.placeholder.com/18" alt="Percentage" />  
                                +0.75%  
                            </div>  
                            <div className="text">Cardano - ADA</div>  
                        </div>  
                    </div>  
                </div>  
                
                {/* Charts Section */}  
								<div class="charts">  
  <h3 class="heading">BTC Prices</h3>  
  <div class="charts-info">  
    <div class="months">  
      <div class="text">Jan</div>  
      <div class="text">Mar</div>  
      <div class="text">May</div>  
      <div class="text">Jul</div>  
      <div class="text">Sep</div>  
      <div class="text">Nov</div>  
    </div>  
  </div>  
</div>    
            </div>
<div className="live-markets">
<div className="row">  
      <div className="div">  
        <img  
          loading="lazy"  
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c339dfe254dc110159f63fae9f3b7cb00e238f757d528b67f501a92d386d2d9e?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"  
          className="img"  
        />  
        <div className="div2">  
          <div className="name">Ethereum</div>  
          <div className="text">ETH / USDT</div>  
        </div>  
      </div>  
      <div className="div3">  
        <div className="div4">  
          <div className="text2">Change</div>  
          <div className="date">+14.02%</div>  
        </div>  
        <div className="div5">  
          <div className="text3">Price</div>  
          <div className="value">39,786 USD</div>  
        </div>  
        <img  
          loading="lazy"  
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eae7e0430e4fd7b53f3b9c09addc4951e8afa4908d09c5c5c2bc6d3ee459535?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"  
          className="img2"  
        />  
      </div>  
    </div>
		




		<div className="row">  
      <div className="div">  
        <img  
          loading="lazy"  
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c339dfe254dc110159f63fae9f3b7cb00e238f757d528b67f501a92d386d2d9e?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"  
          className="img"  
        />  
        <div className="div2">  
          <div className="name">Ethereum</div>  
          <div className="text">ETH / USDT</div>  
        </div>  
      </div>  
      <div className="div3">  
        <div className="div4">  
          <div className="text2">Change</div>  
          <div className="date">+14.02%</div>  
        </div>  
        <div className="div5">  
          <div className="text3">Price</div>  
          <div className="value">39,786 USD</div>  
        </div>  
        <img  
          loading="lazy"  
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eae7e0430e4fd7b53f3b9c09addc4951e8afa4908d09c5c5c2bc6d3ee459535?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"  
          className="img2"  
        />  
      </div>  
    </div>



		<div className="row">  
      <div className="div">  
        <img  
          loading="lazy"  
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c339dfe254dc110159f63fae9f3b7cb00e238f757d528b67f501a92d386d2d9e?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"  
          className="img"  
        />  
        <div className="div2">  
          <div className="name">Ethereum</div>  
          <div className="text">ETH / USDT</div>  
        </div>  
      </div>  
      <div className="div3">  
        <div className="div4">  
          <div className="text2">Change</div>  
          <div className="date">+14.02%</div>  
        </div>  
        <div className="div5">  
          <div className="text3">Price</div>  
          <div className="value">39,786 USD</div>  
        </div>  
        <img  
          loading="lazy"  
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eae7e0430e4fd7b53f3b9c09addc4951e8afa4908d09c5c5c2bc6d3ee459535?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"  
          className="img2"  
        />  
      </div>  
    </div>


		<div className="row">  
      <div className="div">  
        <img  
          loading="lazy"  
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c339dfe254dc110159f63fae9f3b7cb00e238f757d528b67f501a92d386d2d9e?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"  
          className="img"  
        />  
        <div className="div2">  
          <div className="name">Ethereum</div>  
          <div className="text">ETH / USDT</div>  
        </div>  
      </div>  
      <div className="div3">  
        <div className="div4">  
          <div className="text2">Change</div>  
          <div className="date">+14.02%</div>  
        </div>  
        <div className="div5">  
          <div className="text3">Price</div>  
          <div className="value">39,786 USD</div>  
        </div>  
        <img  
          loading="lazy"  
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eae7e0430e4fd7b53f3b9c09addc4951e8afa4908d09c5c5c2bc6d3ee459535?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"  
          className="img2"  
        />  
      </div>  
    </div>
		</div>
		<div class="transactions">  
  <div class="transaction">  
    <div class="header">  
      <h2>Transactions</h2>  
    </div>  
    <div class="transaction-item">  
      <img  
        loading="lazy"  
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f602c30a5738995ecd1b52fcfb6c032f2d51f65501c6515dd00b99e778834a5d?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"  
        class="transaction-image"  
      />  
      <div class="transaction-details">  
        <div class="name">Ethereum</div>  
        <div class="status">Received</div>  
      </div>  
    </div>  
    <div class="related-transactions">  
      <div class="images-container">  
        <img  
          loading="lazy"  
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fed49cb596bae40f973f81ed78aa4c52c17cacf5dfb377aed6417877f5a2cb86?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"  
          class="related-image"  
        />  
        <img  
          loading="lazy"  
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fed49cb596bae40f973f81ed78aa4c52c17cacf5dfb377aed6417877f5a2cb86?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"  
          class="related-image"  
        />  
        <img  
          loading="lazy"  
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fed49cb596bae40f973f81ed78aa4c52c17cacf5dfb377aed6417877f5a2cb86?placeholderIfAbsent=true&apiKey=90d00836b5a049b48c0253add244096a"  
          class="related-image"  
        />  
      </div>  
      <div class="related-details">  
        <div class="name">Bitcoin</div>  
        <div class="status">Buy</div>  
        <div class="name">Bitcoin</div>  
        <div class="status">Buy</div>  
        <div class="name">Litecoin</div>  
        <div class="status">Buy</div>  
      </div>  
    </div>  
    <div class="amounts-container">  
      <div class="amount">$24,102</div>  
      <div class="timestamp">Today, 19:30</div>  
      <div class="amount">$4,157</div>  
      <div class="sub-amounts">  
        <div class="timestamp">Today, 14:32</div>  
        <div class="amount">$64,784</div>  
      </div>  
      <div class="timestamp">Today, 13:50</div>  
      <div class="amount">$14,265</div>  
      <div class="timestamp">Today, 09:38</div>  
    </div>  
  </div>  
</div>  
        </div>  
    );  
}