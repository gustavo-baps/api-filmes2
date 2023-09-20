import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding:0;
        background-color: #0D1326;
    }
`;


export const CustomCarousel = styled(Slider)`
  width: 95%;
  margin: 0 auto;
`;

export const Header = styled.header`
    background-image: url("https://i.ibb.co/BKf0CJz/output-onlinepngtools-2.png");
    box-shadow: 0 5px 12px rgba(0,0,0,.55);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 40vw;
    width: 100%  
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    #dadosFilme {
        margin-top: 4vw;
        margin-left: 3vw;
        font-size: 1.1vw;
        opacity: 60%;
        line-height: 1.5vw;
    }
    #h1Legal {
        margin-top: -3vw;  
        padding: none;
        width: 32vw;
        font-size: 1.7vw;
        margin-left: 3vw;
    }
    #h1Legal h1 {
        text-align: left;
    }
    #descricaoFilme{
        width: 40vw;
        margin-top: -3vw;
        margin-left: 3vw;
        opacity: 80%;
        line-height: 2.5vw;
    }
    #botoes {
        width: 20vw;
        margin-left: 3vw;
        display: flex;
        margin-top: 1vw;
    }
    #botao1 {
        padding: 0.5rem;
        border-radius: 180px;
        width: 7vw;
        height: 2.5vw;
        background-color: #FFC72C;
        box-shadow: 0 5px 12px rgba(0,0,0,.55);
    }
    #botao1 a {
        color: black;
        font-weight: 600;
        margin-top: 1vw;
        margin-left: 1vw;
    }
    #botao2 {
        padding: 0.5rem;
        border-radius: 180px;
        width: 7vw;
        height: 2.5vw;
        background-color: white;
        margin-left: 1vw;
        box-shadow: 0 5px 12px rgba(0,0,0,.55);
    }
    #botao2 a {
        color: black;
        font-weight: 600;
        margin-top: 1vw;
        margin-left: 0.5vw;
    }
    a {
        text-decoration: none;
    }
`;

export const Nav = styled.nav`
    flex-direction: column;
    height: 8vw;
    div {
        margin-top: 2vw;
        height: 0.007vw;
        background-color: #fff;
        width: 100%;
    }
    ul {
        list-style: none;
        display: flex;
        gap: 20px;
        padding: 0;
        margin: 0;
    }
    li {
        font-size: 18px;
        margin-left: 10vw;
    }
    #logo{
        width: 12vw;
        margin-left: -5vw;
        margin-right: 35vw;
        margin-top: -1.9vw;
    }
    #logo img{
        width: 100%;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;

    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`;

export const MovieList = styled.ul`
    padding: 2rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    width: 15vw !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 5vw;
    margin-right: -2vw;
    justify-content: space-evenly;
    img {
        width: 100%;
        border-radius: 0.3rem;
        margin-bottom: 1rem;
    }
    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }
    a {
        transition: all 0.4s;
    }
    a:hover {
        transform: scale(1.05);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 5px;
    color: #212121;
    background-color: #ffffff;
    font-weight: 1000;
    font-size: 12 px;
    cursor: pointer;
    transition: all 250ms;
`;
