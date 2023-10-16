import { useEffect, useState } from "react";
import ListaGenero from "../generosShow/generos";
import { Container, Movie, MovieList, Btn, Header, GlobalStyle, Nav, CustomCarousel } from "./style";
import { Link } from "react-router-dom";


function Home() {   
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [genreMovies, setGenreMovies] = useState([]);
    const [allMovies, setAllMovies] = useState([]);

    const generoClick = (generoId, generoName) => {
        setSelectedGenre({ id: generoId, name: generoName });
        fetchMoviesByGenre(generoId);
    };
    const fetchMoviesByGenre = (generoId) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${generoId}&language=pt-BR`)
          .then((response) => response.json())
          .then((data) => {
            setGenreMovies(data.results);
          });
      };

    const KEY = process.env.REACT_APP_KEY;
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setPopularMovies(data.results);
            });
    }, [KEY]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setTopRatedMovies(data.results);
            });
    }, [KEY]);
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}`)
          .then((response) => response.json())
          .then((data) => {
            setAllMovies(data.results);
          });
      }, [KEY]);
    const [termo, setTermo] = useState("");
    const [resultado, setResultado] = useState([]);

    const handleSearch = (event) => {
        const termo = event.target.value;
        setTermo(termo);
    
        if (termo === "") {
            setResultado([]);
        } else {
            const allMoviesCombined = [
                ...allMovies,
                ...topRatedMovies,
                ...genreMovies,
            ];
    
            const filmesPesquisados = allMoviesCombined.filter((movie) =>
                movie.title.toLowerCase().includes(termo.toLowerCase())
            );
            setResultado(filmesPesquisados);
        }
    };
    
    

    /*const metade = Math.ceil(movies.length / 2);
    const primeiraMetade = movies.slice(0, metade);
    const segundaMetade = movies.slice(metade);*/

    const carouselSettings = {
        infinite: true,
        slidesToShow: 4, 
        slidesToScroll: 1,
    };

    return (
    <>
        <GlobalStyle/>
        <Container>
            <Header>
                <Nav>
                    <ul>
                    <div id="logo">
                        <img src="https://i.ibb.co/G7dmjpf/imagem-2023-09-20-155122815-removebg-preview.png"></img>
                    </div>
                    <Link to = {'/'}>
                        <li>Home</li>
                    </Link>
                        <li><a href="#aaa">Filmes</a></li>
                        <li>Sobre</li>
                    </ul>
                    <div></div>
                </Nav>
                <div id="dadosFilme">
                    <p>Duração: 2h 22min</p>
                    <p>IMDb: 6,7/10 ⭐</p>
                </div>
                <div id="h1Legal">
                    <h1>Indiana Jones e a Relíquia do Destino</h1>
                </div>
                <div id="descricaoFilme">
                    <p>Encontrando-se em uma nova era, aproximando-se da aposentadoria, Indy luta para se encaixar em um mundo que parece tê-lo superado...</p>
                </div>
                <div id="botoes">
                    <div id="botao1"><a href="https://www.youtube.com/watch?v=WzV-a6pK1zA">Trailer</a></div>
                    <Link to={`/335977`}>
                        <div id="botao2"><a>Detalhes</a></div> 
                    </Link>
                </div>
            </Header>
            <ListaGenero generoClick={generoClick}/>
            {selectedGenre && (
                <>
                <h1>{selectedGenre.name}</h1>
                <CustomCarousel {...carouselSettings}>
                    {genreMovies.map((movie) => (
                    <Movie key={movie.id}>
                        <img src={`${imagePath}${movie.poster_path}`} alt="{movie.title}" />
                        <Link to={`/${movie.id}`}>
                        <Btn>Ver mais</Btn>
                        </Link>
                    </Movie>
                    ))}
                </CustomCarousel>
                </>
            )}
            <h2 id="h2Pesquisa">Pesquisar</h2>
                <input id="inputPesquisa"
                    type="text"
                    placeholder="Pesquisar filmes"
                    value={termo}
                    onChange={handleSearch}
                />
                <div>
                {resultado.length > 0 && (
                    <div id="resultsPai">
                        <h1>Resultados da Pesquisa</h1>
                        <div id="resultados">
                        {resultado.map((movie) => (
                                <Movie key={movie.id}>
                                    <img
                                        src={`${imagePath}${movie.poster_path}`}
                                        alt="{movie.title}"
                                    />
                            
                                    <Link to={`/${movie.id}`}>
                                        <Btn>Ver mais</Btn>
                                    </Link>
                                </Movie>
                        ))}
                        </div>
                    </div>
                )}
                </div>
            <div id="aaa">
                <div id="emAltaImg">
                    <img src="https://i.ibb.co/WpNFhRt/mercado-em-alta.png"></img>
                </div>
                <h1>Populares</h1>
            </div>
                <CustomCarousel {...carouselSettings}>
                    {popularMovies.map((movie) => (
                        <Movie key={movie.id}>
                            <img
                                src={`${imagePath}${movie.poster_path}`}
                                alt="{movie.title}"
                            />
                            <Link to={`/${movie.id}`}>
                                <Btn>Ver mais</Btn>
                            </Link>
                        </Movie>
                    ))}
                </CustomCarousel>
                <h1>Os Melhores</h1> 
                <CustomCarousel {...carouselSettings}>
                    {topRatedMovies.map((movie) => (
                        <Movie key={movie.id}>
                            <img
                                src={`${imagePath}${movie.poster_path}`}
                                alt="{movie.title}"
                            />
                            
                            <Link to={`/${movie.id}`}>
                                <Btn>Ver mais</Btn>
                            </Link>
                        </Movie>
                    ))}
                </CustomCarousel>
                
        </Container>
    </>
    );
}

export default Home;
