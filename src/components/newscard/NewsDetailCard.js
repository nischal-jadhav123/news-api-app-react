import React from "react";
import "./NewsDetailCard.css";
const NewsDetailCard = ({ article }) => {
  const { title, content, url, urlToImage } = article;
  return (
    <div className="card">
      <img src={urlToImage} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more"
        >
          Read More...
        </a>
      </div>
    </div>
  );
};

export default NewsDetailCard;
