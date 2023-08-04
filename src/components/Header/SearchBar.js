import React from 'react';
import MenuItem from './MenuItem';

const SearchBar = ({searchBarFontColor, searchBarFont}) => {

    const spanStyle = {
      color: searchBarFontColor,
      fontFamily: searchBarFont,
      transition: 'opacity 0.8s ease'
      
    };
    
    
  return (
    <div className="history-search" >
      <h1>
        <span style={spanStyle}>M</span>
        <span style={spanStyle}>a</span>
        <span style={spanStyle}>r</span>
        <span style={spanStyle}>t</span>
        <span style={spanStyle}>i</span>
      </h1>
      <div className="example" action="action_page.php">
       
      <input type="text" placeholder="Search about me... click the item" name="search" autoComplete="off" />
            <button type="button"><i className="fa fa-search"/></button>
            {/* Agregamos el contenedor para el menú desplegable */}
            <div className="dropdown-content">
              <ul>
             <MenuItem name='about'/>
             <MenuItem name='contact'/>
             <MenuItem name='projects'/>
             <MenuItem name='resume'/>
              </ul>
            </div>  
            </div> 
          </div>
     
  );
};

export default SearchBar;