import axios from 'axios';
import { asyncPipeline } from './pipelines';


const getPokemonList = async () => {
	const { data } = await axios.get(
		'https://pokeapi.co/api/v2/pokemon?limit=10'
	);
	return data;
};

const getPokemonNames = (data: any) => {
	const { results } = data;
	const names = results.map((result: any) => result.name);
	return names;
};
const countBLetters = (names: string[]) => {
	const bLetters = names.map(
		(name: string) =>
			Array.from(name.toLowerCase()).filter(
				(letter: string) => letter == 'b'
			).length
	);
	return bLetters;
};


(async () => {
	const functions = [
		getPokemonList,
		getPokemonNames,
		countBLetters
	]

	const options = {
		logErrors:false,
		logActions:false,
	}


	const data = await asyncPipeline(functions, options);

	console.log('data --> ', data);
})();
