
export interface SystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface Game {
  id: string;
  name: string;
  title: string;
  description: string;
  download_link: string;
  icon_link: string;
  system_requirements: {
    minimum: SystemRequirements;
    recommended: SystemRequirements;
  };
  screenshots_links: string[];
  genre: string;
  release_date: string;
}

export interface GamesData {
  games: Game[];
}
