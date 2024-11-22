import { useEffect, useState } from "react";
import styles from "./Explore.module.css";

const MyMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Erro na requisição");
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError("Algo de errado aconteceu!");
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <div className={styles.divAvgYear}>
              <p>Nota: {movie.vote_average}</p>
              <p>{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMovies;
