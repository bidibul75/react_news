// src/hooks/useArticles.ts
import { useState, useEffect } from 'react';
import { Article } from '../types/Article';

const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Simuler la récupération des articles
    const fetchedArticles: Article[] = [
      {
        id: '1',
        title: 'Météo : il fait beau !',
        description: 'Après la pluie, le beau temps !',
        imageUrl: './public/images/beauTemps.jpg',
        content: 'Après une grosse pluie, il s\'est mis à faire beau. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: '2',
        title: 'Bourse : une hausse des valeurs françaises !',
        description: 'Le CAC40 à 8000 points.',
        imageUrl: './public/images/bourse.jpg',
        content: 'Tout va bien à Paris ! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: '3',
        title: 'L\'inflation se stabilise à 2%',
        description: 'L\'inflation ralentit.',
        imageUrl: './public/images/inflation.jpg',
        content: 'L\'inflation ralentit pour s\'établir à 2% ce mois-ci. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      // Ajoutez d'autres articles ici
    ];
    setArticles(fetchedArticles);
  }, []);

  return articles;
};

export default useArticles;
