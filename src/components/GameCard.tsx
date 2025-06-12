
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Game } from '../types/Game';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(game.download_link, '_blank');
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      <Link to={`/game/${game.id}`} className="block">
        <CardHeader className="p-4">
          <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-muted">
            <img
              src={game.icon_link}
              alt={game.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {game.title}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {game.genre}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="px-4 pb-4">
          <p className="text-muted-foreground text-sm line-clamp-3">
            {game.description}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Released: {new Date(game.release_date).toLocaleDateString()}
          </p>
        </CardContent>
      </Link>
      
      <CardFooter className="px-4 pb-4">
        <Button 
          onClick={handleDownload}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          size="sm"
        >
          Download Game
        </Button>
      </CardFooter>
    </Card>
  );
};
