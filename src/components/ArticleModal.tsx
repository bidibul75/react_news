// src/components/ArticleModal.tsx
import React from 'react';
import { Article } from '../types/Article';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{article.title}</h2>
        <img src={article.imageUrl} alt={article.title} width={500}/>
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default ArticleModal;
