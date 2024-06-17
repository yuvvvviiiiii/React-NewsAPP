import { useEffect, useState } from "react";
import NewsItems from './NewsItems'; // Ensure NewsItems is correctly imported

const NewsRoom = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=9b95865e97084c5aa3627a69a0457846`;
    // fetching data using newsapi.
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]); // Set articles to an empty array if data.articles is undefined
        }
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        setArticles([]); // Set articles to an empty array in case of an error
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center fs-7">Latest <span className="text-danger fs-9">News</span></h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (   //maping each news article with particular index.
          <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))
      ) : (
        <p>No news articles available.</p>
      )}
    </div>
  );
};

export default NewsRoom;
