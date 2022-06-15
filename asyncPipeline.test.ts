import axios from "axios";
import { asyncPipeline } from "./pipelines";

test('return 5 pokemons', async() => {

    const getPokemonList = async () => {
        const { data } = await axios.get(
            'https://pokeapi.co/api/v2/pokemon?limit=5'
        );
        return data;
    };

    const getPokemonNames = (data: any) => {
        const { results } = data;
        const names = results.map((result: any) => result.name);
        return names;
    };

    const functions = [getPokemonList, getPokemonNames];

    const pokemons = await asyncPipeline(functions);

    expect(pokemons).toHaveLength(5); 
});
