import './App.css'  
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
//import characters from './data.js'
import { useState } from 'react'

function App () {

  
  
  const [characters, setCharacters] = useState([{
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 }]);

  function onSearch(id){
    const key = 'fc680417fad2.0f0b17f9fbd87e12ab40';
    fetch(`https://be-a-rym.up.railway.app/api/character/${id}?key=${key}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name && !characters.find((char) => char.id === data.id)) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id) => {
      setCharacters(characters.filter(char=> char.id!== id))
 }

  return (
    <div className="App" >
      <Nav onSearch={onSearch} ></Nav>
      
      <div className="CardsDiv">
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
      <hr />
    </div>
  )
}

export default App
