// src/App.tsx
import React from 'react';
import useArticles from './hooks/useArticles';
import ArticleList from './components/ArticleList';

const App: React.FC = () => {
  const articles = useArticles();

  return (
    <div className="app">
      <h1>News Site</h1>
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;
