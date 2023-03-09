import { SearchBarContainer, BotonSearch, StyledInput } from "./SearchBComponents";
import { useState } from "react";


export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");


   function handleChange(evento){
      setId(evento.target.value);
   };

   return (
      <SearchBarContainer>
         <StyledInput 
         type='search' 
         value={id}
          onChange={handleChange} />
      
      <BotonSearch 
      onClick={()=>{onSearch(id)}}>Agregar</BotonSearch>
      </SearchBarContainer>
   );
}
