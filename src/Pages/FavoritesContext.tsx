import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define Actor type
type Actor = {
    id: number;
    name: string;
    birthDate: string;
    birthPlace: string;
    nationality: string;
    height: string;
    biography: string;
    image: string;
    coverImage: string;
    awards: {
      name: string;
      year: number;
      category: string;
      film: string;
    }[];
    socialMedia: {
      instagram: string;
      twitter: string;
      imdb: string;
    };
    knownFor: {
      id: number;
      title: string;
      role: string;
      year: number;
      rating: number;
      image: string;
    }[];
    stats: {
      moviesCount: number;
      totalAwards: number;
      avgRating: number;
      yearsActive: string;
    };
    upcomingProjects: {
      title: string;
      role: string;
      status: string;
      expectedRelease: string;
    }[];
};

// Define context structure
interface FavoriteContextType {
  favorites: Actor[];
  toggleFavorite: (actor: Actor) => void;
}

// Create context with default empty values
export const FavoriteContext = createContext<FavoriteContextType | null>(null);

// Provider component
export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Actor[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorite-actors");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage when updated
  useEffect(() => {
    localStorage.setItem("favorite-actors", JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite status
  const toggleFavorite = (actor: Actor) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some((fav) => fav.id === actor.id);
      return isAlreadyFavorite
        ? prevFavorites.filter((fav) => fav.id !== actor.id)
        : [...prevFavorites, actor];
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
