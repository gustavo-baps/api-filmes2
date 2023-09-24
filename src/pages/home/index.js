import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn, Header, GlobalStyle, Nav, CustomCarousel } from "./style";
import { Link } from "react-router-dom";


function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState([]);
    const KEY = process.env.REACT_APP_KEY;
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, [KEY]);
    const metade = Math.ceil(movies.length / 2);
    const primeiraMetade = movies.slice(0, metade);
    const segundaMetade = movies.slice(metade);

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
                        <li>Home</li>
                        <li>Filmes</li>
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
            <div id="aaa">
                <div id="emAltaImg">
                    <img src="https://i.ibb.co/WpNFhRt/mercado-em-alta.png"></img>
                </div>
                <h1>Em Alta</h1>
            </div>
                <CustomCarousel {...carouselSettings}>
                    {primeiraMetade.map((movie) => (
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
                <h1>Novidades</h1> 
                <CustomCarousel {...carouselSettings}>
                    {segundaMetade.map((movie) => (
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
