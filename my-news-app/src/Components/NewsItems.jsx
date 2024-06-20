import { useState, useEffect } from "react";
import image from "../assets/news image.jpg";

const NewsItems = ({ title, description, src, url }) => {
  // useState to determine the status of saved news articles.
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || []; //accessing the saved aritcles

    const articleExists = savedArticles.some(article => article.url === url);   //.some() method is used to check if there is any saved article that has the same url as the current article

    // seting the status of save news/article
    if (articleExists) {
      setIsSaved(true);
    }
  }, [url]);

  const saveArticle = () => {
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || []; //Used setArticles Twice to ensure the refference.
    //creating a new article object and error handling in case of no src to image found.
    const newArticle = { title, description, src: src || image, url };  
    // saving the updated list to local storage with newArticle
    localStorage.setItem('savedArticles', JSON.stringify([...savedArticles, newArticle]));
    // new/articles save status
    setIsSaved(true);
  };

  return (
    // card content
    <div
      className="card bg-light text-dark mb-3 d-inline-block my-3 mx-3 px-2 py-2 shadow p-3 mb-5 bg-body-tertiary rounded"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "325px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "Click on Read More to...."}
        </p>
        <a href={url} className="btn btn-warning"> Read More </a>
        <button className="btn btn-info mx-2" onClick={saveArticle} disabled={isSaved}>
          {isSaved ? "Added to favourites" : "Add to favourites"}
        </button>
      </div>
    </div>
  );
};

export default NewsItems;
