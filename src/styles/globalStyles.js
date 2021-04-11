import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        text: ${({ theme }) => theme.text};
        transition: all .5s linear;
    }
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #1a1a1c;
  color: #fff;
}

.coin-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  color: #fff;
}

.coin-search {
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.coin-text {
  margin-bottom: 32px;
  text-align: center;
}

.coin-input {
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 4px;
  border: none;
  background-image: linear-gradient(
    -225deg,
    #ac32e4 0%,
    #7918f2 48%,
    #4801ff 100%
  );

  color: #e2e2e2;
}

.coin-input::placeholder {
  color: #e2e2e2;
}
`;

export const ligthTheme = {
  body: "#fff",
  text: "#121212",
};

export const darkTheme = {
  body: "#121212",
  text: "#fff",
};
