
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { useGames } from '../hooks/useGames';

const GameDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { games, loading } = useGames();
  
  const game = games.find(g => g.id === id);

  const handleDownload = () => {
    if (game) {
      window.open(game.download_link, '_blank');
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-1/4"></div>
            <div className="h-64 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!game) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Game Not Found</h2>
            <p className="text-muted-foreground mb-6">The game you're looking for doesn't exist.</p>
            <Link to="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Games
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Game Header */}
            <div>
              <div className="flex items-start gap-6 mb-6">
                <img
                  src={game.icon_link}
                  alt={game.title}
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-foreground mb-2">{game.title}</h1>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge>{game.genre}</Badge>
                    <span className="text-muted-foreground">
                      Released: {new Date(game.release_date).toLocaleDateString()}
                    </span>
                  </div>
                  <Button onClick={handleDownload} size="lg" className="bg-primary hover:bg-primary/90">
                    Download Game
                  </Button>
                </div>
              </div>
            </div>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Game</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{game.description}</p>
              </CardContent>
            </Card>

            {/* Screenshots */}
            <Card>
              <CardHeader>
                <CardTitle>Screenshots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {game.screenshots_links.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot}
                      alt={`${game.title} screenshot ${index + 1}`}
                      className="w-full rounded-lg object-cover aspect-video hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>System Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Minimum Requirements */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Minimum</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">OS:</span> {game.system_requirements.minimum.os}
                    </div>
                    <div>
                      <span className="font-medium">Processor:</span> {game.system_requirements.minimum.processor}
                    </div>
                    <div>
                      <span className="font-medium">Memory:</span> {game.system_requirements.minimum.memory}
                    </div>
                    <div>
                      <span className="font-medium">Graphics:</span> {game.system_requirements.minimum.graphics}
                    </div>
                    <div>
                      <span className="font-medium">Storage:</span> {game.system_requirements.minimum.storage}
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Recommended Requirements */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Recommended</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">OS:</span> {game.system_requirements.recommended.os}
                    </div>
                    <div>
                      <span className="font-medium">Processor:</span> {game.system_requirements.recommended.processor}
                    </div>
                    <div>
                      <span className="font-medium">Memory:</span> {game.system_requirements.recommended.memory}
                    </div>
                    <div>
                      <span className="font-medium">Graphics:</span> {game.system_requirements.recommended.graphics}
                    </div>
                    <div>
                      <span className="font-medium">Storage:</span> {game.system_requirements.recommended.storage}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Info */}
            <Card>
              <CardHeader>
                <CardTitle>Download Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  This download uses BitTorrent protocol. Make sure you have a torrent client installed.
                </p>
                <Button onClick={handleDownload} className="w-full">
                  Download Torrent
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GameDetail;
