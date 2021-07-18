import React, { useState, useEffect } from "react";
import Article from "./Article";

function News() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("Crypto");

  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + ".json").then((res) => {
      if (res.status != 200) {
        console.log("ERROR!!");
        return;
      }

      res.json().then((data) => {
        if (data != null) {
          // console.log(data);
          setArticles(data.data.children);
        }
      });
    });
  }, [subreddit]);

  return (
    <div>
      <div className="articles">
        <tr>
          {articles != null
            ? articles.map((article, index) => (
                <td>
                  <Article key={index} article={article.data} />
                </td>
              ))
            : ""}
        </tr>
      </div>
    </div>
  );
}

export default News;
