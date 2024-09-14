import React from "react";
import "./crypto.css";
import bitcoinimg from "./images/bitcoin.png"
import ethereumimg from "./images/ethereum.png"
import litecoinimg from "./images/litecoin.png"
import cardanoimg from "./images/cardano.png"

export default function Crypto() {
	return (
		<div className="crypto">
			<div className="coins">
				{/* Bitcoin Block */}
        <div className="top-coins">
				<div className="bitcoin">
					<img src={ bitcoinimg } alt="Bitcoin" />
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
					<img src={ litecoinimg  } alt="Litecoin" />
					<div className="price">$182</div>
					<div className="percentage">
						<img src="https://via.placeholder.com/18" alt="Percentage" />
						-0.15%
					</div>
					<div className="text">Litecoin - LTC</div>
				</div>

				{/* Cardano Block */}
				<div className="cardano">
					<img src={ cardanoimg } alt="Cardano" />
					<div className="price">$1.32</div>
					<div className="percentage">
						<img src="https://via.placeholder.com/18" alt="Percentage" />
						+0.75%
					</div>
					<div className="text">Cardano - ADA</div>
				</div>
        </div>
			</div>
			<div className="charts">
				
			</div>
		</div>
	);
}
