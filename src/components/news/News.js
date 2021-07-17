import React, {useState, useEffect} from 'react';
import Article from "./Article";

function News() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('Crypto');

  useEffect (() =>{
    fetch("https://www.reddit.com/r/"+ subreddit +".json").then(res => {
      if (res.status != 200) {
        console.log("ERROR!!");
        return;
      }

      res.json().then(data => {
        if (data != null){
          // console.log(data);
          setArticles(data.data.children);
        }
      });
    })
  }, [subreddit]);

  return (
    <div className="App">
      <header className="App-header">
       {/* <input type="text" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)}></input> */}
      </header>
      <div className="articles">
        {
          (articles != null) ?  articles.map((article, index) => <Article key={index} article={article.data} />) : ''
        }
      </div>
    </div>
  );
}

export default News;
