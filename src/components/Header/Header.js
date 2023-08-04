import React, { useState, useEffect } from 'react';
import HeaderCss from '../../css/Header.css'


import SearchBar from './SearchBar';
import TrendingSearches from './TrendingSearches';



  const Header = () => {
    const [count, setCount] = useState(0);
    const [currentTheme, setCurrentTheme] = useState({}); // Inicializa currentTheme con un objeto vacío
  
    const changeCount = () => {
      setCount(count + 1);
    };
  
    const headerThemes = [
      {
        headerBackgroundColor: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
        searchBarFontColor: 'white',
        searchBarFont:'Handjet',
        
      },
      {
        headerBackgroundColor: 'linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
        searchBarFontColor: 'white',
        searchBarFont:'Satisfy'
      },
      {
        headerBackgroundColor: 'linear-gradient(to top, #50cc7f 0%, #f5d100 100%)',
        searchBarFontColor: 'white',
        searchBarFont:'Tektur'
      },
      {
        headerBackgroundColor: '',
        searchBarFontColor: '',
        searchBarFont:''
      }

    ];
  
    const changeTheme = (themes) => {
      changeCount();
      const theme = themes[count % themes.length];
      setCurrentTheme(theme);
    };


    const headerStyles = {
      backgroundImage: currentTheme.headerBackgroundColor,
      opacity: 1,
      height: '100vh',
      transition: 'opacity 0.5s ease',
      zIndex:-1 // 
    };

  return (
    <div style={headerStyles}>
          <header className="s-header" >

       
        <div className="change-theme">
        
          <button type="text" onClick={() => changeTheme(headerThemes)}> Change Theme</button>
       
        </div>
        <SearchBar searchBarFontColor={currentTheme.searchBarFontColor} searchBarFont={currentTheme.searchBarFont}/>
        <TrendingSearches />
      </header>
    <div/>
    </div>
  )
}


export default Header;
