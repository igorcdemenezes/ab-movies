import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../view/layouts/Layout";
import Home from "../../view/pages/home/home";
import Movie from "../../view/pages/movie/Movie";
import Explore from "../../view/pages/explore/Explore";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/my-movies" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
