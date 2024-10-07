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
        title: 'Méteo : il fait beau !',
        description: 'Après la pluie, le beau temps !',
        imageUrl: './public/images/beauTemps.jpg',
        content: 'Après une grosse pluie, il s\'est mis à faire beau.',
      },
      {
        id: '2',
        title: 'Bourse : une hausse des valeurs françaises !',
        description: 'Le CAC40 à 8000 points.',
        imageUrl: './public/images/bourse.jpg',
        content: 'Tout va bien à Paris !',
      },
      {
        id: '3',
        title: 'L\'inflation se stabilise à 2%',
        description: 'L\'inflation ralentit.',
        imageUrl: './public/images/inflation.jpg',
        content: 'L\'inflation ralentit pour s\'établir à 2% ce mois-ci.',
      },
      // Ajoutez d'autres articles ici
    ];
    setArticles(fetchedArticles);
  }, []);

  return articles;
};

export default useArticles;
