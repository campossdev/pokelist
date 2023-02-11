
const pokemonName = document.querySelector('.name');
const pokemonNumber = document.querySelector('.number');
const pokemonImage = document.querySelector('.img_pokemon');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search')

const fetchPokemon = async (pokemon) =>{
const apiResponse = await fetch(`https://pokeapi.co/api/v2/
pokemon/${pokemon.toLowerCase()}`);

if (apiResponse.status === 200) {
   const data = await apiResponse.json();
   return data;
}
}


const renderPokemon = async (pokemon) =>{
   
   pokemonName.innerHTML = "Loading...";
   pokemonNumber.innerHTML = "";
   const data = await fetchPokemon(pokemon);

   if(data){
   pokemonImage.style.display = "block";
   pokemonName.innerHTML = data.name;
   pokemonNumber.innerHTML = data.id;
   pokemonImage.src = data['sprites']['versions']['generation-v']
   ['black-white']['animated']['front_default'];
   input.value = "";
   }else{
      pokemonImage.style.display = "none";
      pokemonName.innerHTML = "Not Found";
      pokemonNumber.innerHTML = "";
   }
}

form.addEventListener('submit', (event) =>{
   event.preventDefault();
   renderPokemon(input.value);
   
});