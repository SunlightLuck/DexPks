import './Searchbox.css';
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

const SearchBox=() => {
    return (
        <div className="search">
            {/* <FaSearch size={18} style={{marginRight:"-30px",marginTop:"10px",zIndex:"5"}}/> */}
            <input type="text" style={{paddingLeft:"15px"}} placeholder="Find by name, symbol, contract or token" className="searchTerm" id="input_text"/>
        </div>
    );
  }

  export default SearchBox;