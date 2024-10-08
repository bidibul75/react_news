// src/components/ArticleModal.tsx
import React, { useEffect } from 'react';
import { Article } from '../types/Article';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;
  
  let theme2=localStorage.getItem('theme');
 
  var modal_theme, close_button;

   if (theme2 == "light"){
    modal_theme = "modal_back_light";
    close_button = "close_button_light"
   } else {
    modal_theme = "modal_back_dark";
    close_button = "close_button_dark"
  }

  return (
    <div className="modal-overlay">
      <div className={modal_theme}>
        <button className={close_button} onClick={onClose}>
          &times;
        </button>
        <h2>{article.title}</h2>
        <img src={article.imageUrl} alt={article.title} className="modal-image"/>
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default ArticleModal;
