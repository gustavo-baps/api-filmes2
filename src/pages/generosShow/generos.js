import React from "react";

const ListaGenero = ({generoClick})=>{
    const generos = [
        {id: 28, name: "Ação"},
        {id: 12, name: "Aventura"},
        {id: 16, name: "Animação"},
        {id: 35, name: "Comédia"},
        {id: 18, name: "Drama"},
        {id: 10751, name: "Família"},
        {id: 27, name: "Horror"}  
    ];
    return(
        <div id="divGeneros">
            {generos.map((genero)=>(
                <ul key={genero.id} onClick={()=>generoClick(genero.id, genero.name)}>
                    {genero.name}
                </ul>
            ))}
        </div>
    );
};
export default ListaGenero;