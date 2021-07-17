import React, { useState, useEffect } from "react";
// import "./App.css";

import axios from "axios";
import Coin from "./components/coin/Coin";
import { NavBar } from "./components/NavBar";

import {
  GlobalStyles,
  ligthTheme,
  darkTheme,
} from "./ressources/styles/globalStyles";
import { Toggle } from "./components/Toggle";
import styled, { ThemeProvider } from "styled-components";
import { useDarkMode } from "./ressources/styles/useDarkMode";

import News from "./components/news/News";

const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? ligthTheme : darkTheme;

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <NavBar />
        <GlobalStyles />
        <Toggle className="toggle" theme={theme} toggleTheme={toggleTheme} />
        <News />
        <div className="coin-app">
          <div className="coin-search">
            <form>
              <label>
                <input
                  type="text"
                  placeholder="Search"
                  className="coin-input"
                  onChange={handleChange}
                />
              </label>
            </form>
          </div>
          <h2>Here</h2>
          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                marketCapRank={coin.market_cap_rank}
                volume={coin.total_volume}
                circulating_supply={coin.circulating_supply}
                total_supply={coin.total_supply}
              />
            );
          })}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
