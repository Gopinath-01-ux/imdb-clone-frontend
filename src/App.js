import "./App.css";
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import MovieList from "./Pages/MovieList.tsx";
import MovieDetails from "./Pages/MovieDetails.tsx";
import Toprated from "./Pages/Toprated.jsx";
import Actordetails from "./Pages/Actordetails.tsx";
import FavoriteActors from "./Pages/FavoriteActors.tsx";
import { FavoriteProvider } from "./Pages/FavoritesContext.tsx";
function App() {
  return (
    <FavoriteProvider>
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<MovieList/>}/>
          <Route path="/movie/:id" element={<MovieDetails/>}/>
          <Route path="/actor/:id" element={<Actordetails/>}/>
          <Route path="/top-rated" element={<Toprated/>}/>
          <Route path="/favorite-actor" element={<FavoriteActors />} />
        </Routes>
      </div>
    </BrowserRouter>
    </FavoriteProvider>
  );
}

export default App;
