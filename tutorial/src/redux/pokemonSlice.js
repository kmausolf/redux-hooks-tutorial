import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        myPokemon: [
            {
                id: 1,
                name: "Bulbasaur",
                exp: 0
            },
        ]
    },
    reducers: {
        addPokemon: (state, action) => {
            const index = state.myPokemon.findIndex((pokemon) => pokemon.id === action.payload.id);
            if(index === -1) {
                state.myPokemon.push(action.payload);
            }
        },
    }
});

export const { addPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;