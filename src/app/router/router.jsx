import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../view/layouts/Layout";
import Home from "../../view/pages/home/home";
import Movie from "../../view/pages/movie/Movie";
import MyMovies from "../../view/pages/my-movies/MyMovies";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/my-movies" element={<MyMovies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
