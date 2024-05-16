import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [text, setText] = useState ("");

  useEffect(
    () =>{
      fetchData()
    }, []
  )
  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quote.textContent = data.content;
      cite.textContent = data.author;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }
  const fetchPokemon = () => {
    const searchInput = document
      .getElementById("search-input")
      .value.toLowerCase();
    displayPokemon.style.display = "none";
    const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const pokemons = data;
        pokemonTypes.textContent = "";
        if (
          searchInput === pokemons.name ||
          searchInput === pokemons.id.toString()
        ) {
          displayPokemon.style.display = "block";
          pokemonName.textContent =
            pokemons.name.toUpperCase();
          pokemonId.textContent = `#${pokemons.id}`;
          pokemonWeight.textContent = `Weight:${pokemons.weight}`;
          pokemonHeight.textContent = `Height:${pokemons.height}`;
          pokemonPhoto.src = pokemons.sprites.front_default;
          const pokemonsTypes = pokemons.types;
          pokemonsTypes.forEach((type) => {
            pokemonTypes.innerHTML += `<span class="types" id="types">${type.type.name}</span>`;
          });
          hp.textContent = `${pokemons.stats[0].base_stat}`;
          attack.textContent = `${pokemons.stats[1].base_stat}`;
          defense.textContent = `${pokemons.stats[2].base_stat}`;
          specialAttack.textContent = `${pokemons.stats[3].base_stat}`;
          specialDefense.textContent = `${pokemons.stats[4].base_stat}`;
          speed.textContent = `${pokemons.stats[5].base_stat}`;
        } else if (
          searchInput !== pokemons.name ||
          searchInput !== pokemons.id.toString()
        ) {
          alert("Pokémon not found");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Pokémon not found");
      });
  };
  const fetchData = async (name)=>{
    const enteredNameOrID = "https://api.quotable.io/random"
    
    
    try {
        const res = await fetch(enteredNameOrID);
        const data = await res.json();
        console.log(data)
        setText(data)
        console.log("sgayddudddyaaud")

        
      } catch (err) {
        console.log("fix your network")
        alert('network issue')
        
        
        
      }
      
}



  return (
    <>
      <div style={{color: "blue"}}>{text.author}</div>
      <div>{text.content}</div>
       
    </>
  )
}

export default App
