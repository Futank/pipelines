<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
          

<h1>Pipelines</h1>

<h2>
    Create pipelines in  
    <i class="devicon-javascript-plain colored"></i>
    <i class="devicon-typescript-plain colored"></i>
</h2>


<br/>
<br/>
<br/>



<h2>Installation</h2>

```bash
    npm i @futank/pipelines 
        
        or
    
    yarn add @futank/pipelines
```

<br/>

<h2>Start Using</h2>
for projects that doesn't need async functions use <code>pipeline</code>

```js
    import { pipeline } from '@futank/pipelines'

    const f1 = (num) => num + 2;
    const f2 = (num) => num * 4;
    const f3 = (num) => num / 2;

    const functions = [f1, f2, f3];
    const options = {
        firstArgument: 2
    }

    const pipelineReturn = pipeline(functions, options);

    console.log(pipelineReturn) // 8
```

Case you need async functions use <code>asyncPipeline</code>
```js
    import { asyncPipeline } from '@futank/pipelines'
    import axios from 'axios'

    const getPokemonList = async () => {
        const { data } = await axios.get(
            'https://pokeapi.co/api/v2/pokemon?limit=5'
        );
        return data;
    };

    const getPokemonNames = (data) => {
        const { results } = data;
        const names = results.map((result) => result.name);
        return names;
    };

    const functions = [getPokemonList, getPokemonNames];

    const pokemons = await asyncPipeline(functions);

    console.log(pokemons); // [ 'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon' ]

```

<br/>

<h2>Options</h2>
<table>
    <thead>
        <th>option</th>
        <th>function</th>
        <th>type</th>
    </thead>
    <tbody>
        <tr>
            <td>
                logErrors
            </td>
            <td>
                show errors on terminal
            </td>
            <td>
                boolean | undefined
            </td>
        </tr>
        <tr>
            <td>
                logActions
            </td>
            <td>
                show return of each function on terminal
            </td>
            <td>
                boolean | undefined
            </td>
        </tr>
        <tr>
            <td>
                firstArgument
            </td>
            <td>
                the argument of the first function in the pipeline
            </td>
            <td>
                any
            </td>
        </tr>
    </tbody>
</table>