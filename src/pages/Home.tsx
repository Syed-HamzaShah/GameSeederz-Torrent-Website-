
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { GameGrid } from '../components/GameGrid';
import { useGames } from '../hooks/useGames';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search } from 'lucide-react';

const Home: React.FC = () => {
  const { games, loading, error, searchGames } = useGames();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [filteredGames, setFilteredGames] = useState(games);

  useEffect(() => {
    const query = searchParams.get('search') || '';
    setSearchQuery(query);
    setFilteredGames(searchGames(query));
  }, [searchParams, games, searchGames]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ search: searchQuery.trim() });
    } else {
      setSearchParams({});
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchParams({});
  };

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-destructive mb-4">Error Loading Games</h2>
            <p className="text-muted-foreground">{error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Welcome to <span className="text-primary">GameSeeders</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download the latest games instantly. Fast torrents, verified files, and an amazing gaming experience.
          </p>
          
          {/* Search Section */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit">Search</Button>
            </div>
          </form>

          {searchQuery && (
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-muted-foreground">
                Showing results for: <strong>"{searchQuery}"</strong>
              </span>
              <Button variant="ghost" size="sm" onClick={clearSearch}>
                Clear
              </Button>
            </div>
          )}
        </div>

        {/* Games Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {searchQuery ? 'Search Results' : 'Latest Games'}
            </h2>
            <span className="text-muted-foreground">
              {loading ? 'Loading...' : `${filteredGames.length} games available`}
            </span>
          </div>
          
          <GameGrid games={filteredGames} loading={loading} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
