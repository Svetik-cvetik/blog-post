import React, { useState, useEffect } from 'react';
import ArticleCard from '../ArticleCard';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://api.slingacademy.com/v1/sample-data/blog-posts')
      .then(response => response.json())
      .then(data => {
        console.log (data.blogs)
        setArticles(data.blogs);
      })
  }, []);

  return (
    <div>
      <h2>Articles</h2>
      {articles.map(article => (
        <ArticleCard key={article.id} title={article.title} content={article.content} id={article.id} />
      ))}
    </div>
  );
}

export default ArticlesPage;