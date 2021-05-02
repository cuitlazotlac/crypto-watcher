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
    <Table className="tables-crypto">
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
