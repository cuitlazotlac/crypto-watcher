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
    // <div className="coin-container">
    //   <div className="coin-row">
    //     <div className="coin">
    //       <p className="coin-marketCap">{marketCapRank}</p>
    //       <img src={image} alt="crypto" />
    //       <h1>{name}</h1>
    //       <p className="coin-symbol">{symbol}</p>
    //     </div>
    //     <div className="coin-data">
    //       <p className="coin-price">${price}</p>
    // <p className="coin-volume">${volume.toLocaleString()}</p>
    // {priceChange < 0 ? (
    //   <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
    // ) : (
    //   <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
    // )}
    //       <p className="coin-marketcap">
    //         Mkt Cap: ${marketcap.toLocaleString()}
    //       </p>
    //       <ProgressBar
    //         striped
    //         variant="info"
    //         className="markcap-progress"
    //         now={circulating_supply}
    //         max={total_supply}
    //       />
    //     </div>
    //   </div>
    // </div>
    <Table>
      {/* <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Price change</th>
            <th>Market Cap</th>
            <th>Circulating Supply</th>
          </tr>
        </thead> */}
      <tbody>
        <tr className="crypto-row">
          <td className="crypto-marketcap">{marketCapRank}</td>
          <td>
            <img className="crypto-img" src={image} alt="crypto" />
          </td>
          <td className="crypto-name">{name}</td>
          <td className="crypto-symbol">{symbol}</td>
          <td className="crypto-price">${price}</td>
          <td className="coin-volume">${volume.toLocaleString()}</td>
          {priceChange < 0 ? (
            <td className="coin-percent red">{priceChange.toFixed(2)}%</td>
          ) : (
            <td className="coin-percent green">{priceChange.toFixed(2)}%</td>
          )}
          <td className="coin-marketcap">${marketcap.toLocaleString()}</td>
          <td>
            <ProgressBar
              animated
              striped
              variant="warning"
              className="markcap-progress"
              now={circulating_supply}
              max={total_supply}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Coin;
