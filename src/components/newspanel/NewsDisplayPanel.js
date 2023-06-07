import React from 'react'
import "./NewsDisplayPanel.css"
import NewsDetailCard from '../newscard/NewsDetailCard';
const NewsDisplayPanel = (props) => {
  const totalResults = props.resultCount;
  const articles = props.articles;
  const searchKey = props.searchKey;
  return (
    <div className='news-display-panel'>
      <div className='news-display-header'>
        <h3>Total Result for {searchKey ?? ""}: {totalResults ?? 0} </h3>
      </div>
      <div className='news-display-body'>
        {articles.map((article,index) => {
          return <NewsDetailCard article = {article}/>;
        })}
      </div>
    </div>
  )
}

export default NewsDisplayPanel