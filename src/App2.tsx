// src/App2.tsx
import React, {useState, useReducer, useEffect} from 'react';
import useArticles from './hooks/useArticles';
import ArticleList from './components/ArticleList';
import SearchBar from './components/SearchBar';
import {Article} from './types/Article';
//import logo from '../public/images/logo.png';
import { themeReducer } from './reducer';
import { Theme, ThemeAction } from './types/Theme'; 
import './App2.css';

const App: React.FC = () => {
  const [theme, dispatch] = useReducer(themeReducer, 'light');
  const allArticles = useArticles();
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(allArticles);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      dispatch({ type: 'SET_THEME', payload: savedTheme as Theme });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  
  useEffect(() => {
    setFilteredArticles(allArticles);
  }, [allArticles]);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const handleSearch = (query: string) => {
    const filtered = allArticles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredArticles(filtered);
  };
handleSearch;

  return (
    <div className="app">
      <button onClick={toggleTheme}>
        Sombre/clair
      </button>     
      <div className="logo">Le journal</div>
      <h1></h1>
      <SearchBar onSearch={handleSearch} />
 
      <ArticleList articles={filteredArticles} />
    </div>
  );
};

export default App;
