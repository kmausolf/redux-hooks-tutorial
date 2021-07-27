import React from "react";

const Pokemon = (props) => {
    return(
    <>
        <p>{`ID: ${props.pokemon.id}`}</p>
        <p>{`Name: ${props.pokemon.name}`}</p>
        <p>{`EXP: ${props.pokemon.exp}`}</p>
    </>
    )
}

export default Pokemon;