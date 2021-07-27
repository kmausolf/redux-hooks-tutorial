import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlice";

export default configureStore({
    reducer: {
        pokemon: pokemonSlice,
    },
});