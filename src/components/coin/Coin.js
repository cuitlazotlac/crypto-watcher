import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Table from "react-bootstrap/Table";

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
    <div className="coin_container">
      <div className="coin_row">
        <div className="coin">
          <p className="coin_cap">{marketCapRank}</p>
          <img src={image} alt={name} className="coin_img" />
          <h1 className="coin_h1"> {name}</h1>
          <p className="coin_symbol">{symbol}</p>
        </div>
        <div className="coin_data">
          <p className="coin_price">${price}</p>
          <p className="coin_volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin_percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin_percent grend">{priceChange.toFixed(2)}%</p>
          )}

          <p className="coin_marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
          <p>
            <ProgressBar
              animated
              striped
              variant="warning"
              className="markcap-progress"
              now={circulating_supply}
              max={total_supply}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
