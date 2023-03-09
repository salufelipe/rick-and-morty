import SearchBar from "../SearchBar/SearchBar";
import { NavSearch } from "./NavStyles";

export default function Nav({onSearch}){

    return(
        
        <NavSearch>
            <SearchBar
          onSearch={onSearch}
        />
         </NavSearch>





    )
};