import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPokemon } from "./pokemonSlice";
import Pokemon from "./pokemon";

const charmander = {
    id: 4,
    name: "Charmander",
    exp: 0
}

const MainScreen = () => {
    const pokemon = useSelector((state) => state.pokemon.myPokemon);
    const dispatch = useDispatch();

    return(
        <div>
            {pokemon.map((pokemon) => {
                return <Pokemon key={pokemon.id} pokemon={pokemon} />
            })}
            <button onClick={() => dispatch(addPokemon(charmander))}>Charmander</button>
        </div>
    )
}

export default MainScreen;