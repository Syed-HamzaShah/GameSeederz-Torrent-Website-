
import React from 'react';
import { Layout } from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { useGames } from '../hooks/useGames';
import { Skeleton } from '../components/ui/skeleton';

const SystemRequirements: React.FC = () => {
  const { games, loading, error } = useGames();

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-destructive mb-4">Error Loading Data</h2>
            <p className="text-muted-foreground">{error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">System Requirements</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check the minimum and recommended system requirements for all available games
          </p>
        </div>

        {/* Games System Requirements */}
        <div className="space-y-8">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="h-8 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Skeleton className="h-6 w-20" />
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-4 w-full" />
                      ))}
                    </div>
                    <div className="space-y-3">
                      <Skeleton className="h-6 w-24" />
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-4 w-full" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            games.map((game) => (
              <Card key={game.id} className="overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <div className="flex items-center gap-4">
                    <img
                      src={game.icon_link}
                      alt={game.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-2xl">{game.title}</CardTitle>
                      <p className="text-muted-foreground">{game.genre} • {new Date(game.release_date).getFullYear()}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Minimum Requirements */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                        <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                        Minimum Requirements
                      </h3>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-2">
                          <span className="font-medium text-muted-foreground">OS:</span>
                          <span className="col-span-2 text-foreground">{game.system_requirements.minimum.os}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <span className="font-medium text-muted-foreground">Processor:</span>
                          <span className="col-span-2 text-foreground">{game.system_requirements.minimum.processor}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <span className="font-medium text-muted-foreground">Memory:</span>
                          <span className="col-span-2 text-foreground">{game.system_requirements.minimum.memory}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <span className="font-medium text-muted-foreground">Graphics:</span>
                          <span className="col-span-2 text-foreground">{game.system_requirements.minimum.graphics}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <span className="font-medium text-muted-foreground">Storage:</span>
                          <span className="col-span-2 text-foreground">{game.system_requirements.minimum.storage}</span>
                        </div>
                      </div>
                    </div>

                    {/* Separator for mobile */}
                    <Separator className="md:hidden" />

                    {/* Recommended Requirements */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        Recommended Requirements
                      </h3>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-2">
                          <span className="font-medium text-muted-foreground">OS:</span>
                          <span className="col-span-2 text-foreground">{game.system_requirements.recommended.os}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <span className="font-medium text-muted-foreground">Processor:</span>
                          <span className="col-span-2 text-foreground">{game.system_requirements.recommended.processor}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <span className="font-medium text-muted-foreground">Memory:</span>
                          <span className="col-span-2 text-foreground">{game.system_requirements.recommended.memory}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <span className="font-medium text-muted-foreground">Graphics:</span>
                          <span className="col-span-2 text-foreground">{game.system_requirements.recommended.graphics}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <span className="font-medium text-muted-foreground">Storage:</span>
                          <span className="col-span-2 text-foreground">{game.system_requirements.recommended.storage}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SystemRequirements;
