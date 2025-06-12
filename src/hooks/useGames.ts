
import { useState, useEffect } from 'react';
import { Game, GamesData } from '../types/Game';

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/data/games.json');
        if (!response.ok) {
          throw new Error('Failed to fetch games data');
        }
        const data: GamesData = await response.json();
        setGames(data.games);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const searchGames = (query: string) => {
    if (!query.trim()) return games;
    
    return games.filter(game => 
      game.title.toLowerCase().includes(query.toLowerCase()) ||
      game.genre.toLowerCase().includes(query.toLowerCase()) ||
      game.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  return { games, loading, error, searchGames };
};
