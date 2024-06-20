import { useEffect, useState } from "react";
import NewsItems from './NewsItems'; // Ensure NewsItems is correctly imported
import Pagination from "./Pagination";

const NewsRoom = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const[articlesPerPage] = useState(12);

  useEffect(() => {
    if(category === 'saved') {
      // Saving data using local storage api.
      const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
      setArticles(savedArticles);
    } else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${currentPage}&pageSize=${articlesPerPage}&apiKey=9b95865e97084c5aa3627a69a0457846`;
    // fetching data using newsapi.

    const options = {
      headers: {
        'upgrade' : 'HTTP/2.0'
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        if (data.articles) {
          setArticles(data.articles);
          setTotalPages(Math.ceil(data.totalResults / articlesPerPage));
        } 
        // error handling
        else {
          setArticles([]); // Set articles to an empty array if data.articles is undefined
        }
      })
      //error handling
      .catch(error => {
        console.error('Error fetching articles:', error);
        setArticles([]); // Set articles to an empty array in case of an error
      });
    }
  }, [category, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="news-room">
      <div className="news-items">
      <h2 className="text-center fs-7">Latest <span className="text-danger fs-9">News</span></h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (   //maping each news article with particular index.
          <NewsItems key={index} title={news.title} description={news.description} src={news.src || news.urlToImage} url={news.url} />
        ))
      ) : (
        <p>No news articles available.</p>
      )}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </div>
  );
};

export default NewsRoom;
