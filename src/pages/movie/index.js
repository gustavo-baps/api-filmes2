import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState({});
    const KEY = process.env.REACT_APP_KEY;
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`)
          .then((response) => response.json())
          .then((data) => {
            setMovie(data);
          });
      }, [KEY, id]);
        
    return (
        <div>
            <div className="background-image">
                <img
                src={`${imagePath}${movie.poster_path}`}
                alt={movie.title}
                className="img_movie"
                />
            </div>
            <nav>
                <ul>
                    <div id="logo">
                        <img src="https://i.ibb.co/G7dmjpf/imagem-2023-09-20-155122815-removebg-preview.png"></img>
                    </div>
                        <li>Home</li>
                        <li>Filmes</li>
                        <li>Sobre</li>
                </ul>
                <div></div>
            </nav>
            <div class="filmeDetalhes">
                <div id="imgMovieDiv">
                    <img
                        className="img_movie"
                        src={`${imagePath}${movie.poster_path}`}
                        alt="{movie.title}"
                    />
                </div>
                <div className="container">
                    <h1>{movie.title}</h1>
                    <h3>Data de lançamento: {movie.release_date}</h3>
                        <p className="movie-desc">{movie.overview}</p>
                        <Link to="/">
                            <button className="link_button">Voltar</button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default Movie;
