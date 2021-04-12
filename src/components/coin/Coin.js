import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
  marketCapRank,
  circulating_supply,
  total_supply,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <p className="coin-marketCap">{marketCapRank}</p>
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
          <ProgressBar
            striped
            variant="success"
            className="markcap-progress"
            now={circulating_supply}
            max={total_supply}
          />
        </div>
      </div>
    </div>
  );
};

export default Coin;
