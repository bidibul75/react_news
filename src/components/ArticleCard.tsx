// src/components/ArticleCard.tsx
import React from 'react';
import { Article } from '../types/Article';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <div className="article-card" onClick={onClick}>
      <img src={article.imageUrl} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    </div>
  );
};

export default ArticleCard;
