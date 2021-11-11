import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    // body {
    //     background: ${({ theme }) => theme.body};
    //     text: ${({ theme }) => theme.text};
    //     transition: all .5s linear;
    // }
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Rajdhani', sans-serif;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all .5s linear;
  font-size: 19px;
}

.app-title {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: center;
}

.coin-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  color: #fff;
}

label {
  position: relative;
}

toggle{
  width: 23px;
  height: 23px;
}

label:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E") center / contain no-repeat;
}

.coin-search {
  position: absolute;
  top: 2rem;
  right: 10rem;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: blue;
}

.coin-input {
  padding: 10px 40px;
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-image: linear-gradient(
    -225deg,
    ${({ theme }) => theme.searchBar_color} 0%,
    ${({ theme }) => theme.searchBar_color} 48%,
    ${({ theme }) => theme.searchBar_color} 100%
  );
  color: ${({ theme }) => theme.searchBar_text};
}

.coin-input::placeholder {
  color: #e2e2e2;
}

.logo {
  fill: ${({ theme }) => theme.text};
}
.logo:hover {
  fill: orange;
}

header[role="banner"] {
    #logo-main {
      display: block;
      margin: 20px auto;
    }
  }
  
  #navbar-primary.navbar-default {
    background: transparent;
    border: none;
    .navbar-nav { 
      width: 100%;
      text-align: center;
      > li {
        display: inline-block;
        float: none;
        > a {
          padding-left: 30px;
          padding-right: 30px;
          }
      }
    }
  }

`;

export const ligthTheme = {
  body: "#EEF3FF",
  text: "#121212",
  searchBar_color: "#D1D5DA",
  searchBar_text: "#FFFFFF",
};

export const darkTheme = {
  body: "#162955",
  text: "#ACB4BB",
  searchBar_color: "#ACB4BB",
  searchBar_text: "#A6B1C2",
};
