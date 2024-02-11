import React from 'react';

const ArticleCard = ({ title, content, id }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
      <a className="card-link" href={`/articles/${id}`}>Read more</a>
    </div>
  );
}

export default ArticleCard;