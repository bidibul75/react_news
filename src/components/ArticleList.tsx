// src/components/ArticleList.tsx
import React, { useState } from 'react';
import { Article } from '../types/Article';
import ArticleCard from './ArticleCard';
import ArticleModal from './ArticleModal';

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
      <div className="article-list">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} onClick={() => handleArticleClick(article)} />
        ))}
      </div>
      <ArticleModal article={selectedArticle} onClose={handleCloseModal} />
    </div>
  );
};

export default ArticleList;
