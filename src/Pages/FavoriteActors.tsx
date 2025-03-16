import { useContext } from "react";
import { FavoriteContext } from "./FavoritesContext.tsx";
import { Link } from "react-router-dom";
import React from "react";

const FavoriteActors = () => {
  const { favorites } = useContext(FavoriteContext)!;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Favorite Actors</h1>

      {favorites.length === 0 ? (
        <p>No favorite actors yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((actor) => (
            <Link key={actor.id} to={`/actor/${actor.id}`} className="group">
              <div className="relative overflow-hidden rounded-xl bg-gray-800">
                <img
                  src={actor.image}
                  alt={actor.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-0 bg-black/60 w-full py-3 text-center">
                  <h2 className="text-white text-lg font-semibold">{actor.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteActors;
