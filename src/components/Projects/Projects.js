
import Card from './Card';
import ProjectsCss from '../../css/Projects.css';
import ImgHangMan from '../../images/hangman.png'
import LogoHtmlCssJs from '../../images/htmlCssJs.png';
import LogoHtmlCssJsApi from '../../images/htmlCssJsApp.png';
import ImgTp1Web from '../../images/tp1Web.png';
import ImgMemoryGame from '../../images/memory.png';
import ImgGuessGame from '../../images/adivinar-juego.png';
import imgLogoReact from '../../images/react.png';
import ImgLogoPhp from '../../images/php.png';
import ImgCirco from '../../images/circo.png';

import React, { useState } from 'react';


const Projects = () => {
  // Usa el estado para cada tarjeta individual
  const [isFlipped1, setFlipped1] = useState(false);
  const [isFlipped2, setFlipped2] = useState(false);
  const [isFlipped3, setFlipped3] = useState(false);
  const [isFlipped4, setFlipped4] = useState(false);
  const [isFlipped5, setFlipped5] = useState(false);

  const links = [
    {
      title: 'Hangman Game',
      repoLink: 'https://github.com/marrtudiaz/hangman'
    },
    {
      title: 'Emoji Match',
      repoLink: 'https://github.com/marrtudiaz/memory-game'
    },
    {
      title: 'Fashion Web Page',
      repoLink: 'https://github.com/marrtudiaz/tp-web1'
    },
    {
      title: 'Circus Web Page',
      repoLink: 'https://github.com/marrtudiaz/tp-especial'
    },
   
    {
      title: 'Guess Game',
      repoLink: 'https://github.com/marrtudiaz/guess-game'
    },

    {
      title: 'My repo',
      repoLink: 'https://github.com/marrtudiaz'
    }
              
               
  ];
  
  return (
    <>
      <div className="projects-container">
        <div className="projectsText">
          <h4>My projects</h4>
          <p>Click to uncover the project!  <a href={links[5].repoLink} target="_blank" rel="noopener noreferrer">
              My github repositories 
            </a> </p>
           
          <div className="projects">
         
            <Card onClick={() => setFlipped1(!isFlipped1)} srcFront={ImgHangMan} srcBack={LogoHtmlCssJsApi} isFlipped={isFlipped1} titulo={'Hangman Game'}
              about='This is a classic Hangman game. I used an API that returns random words.' project={links[0]}/>
            <Card onClick={() => setFlipped2(!isFlipped2)} srcFront={ImgMemoryGame} srcBack={imgLogoReact} isFlipped={isFlipped2}  titulo={'Emoji Match'}
            about='It is an Emoji Match Game using React. -Components,hooks,classes,functions' project={links[1]}/> 
            <Card onClick={() => setFlipped3(!isFlipped3)} srcFront={ImgTp1Web} srcBack={LogoHtmlCssJs} isFlipped={isFlipped3}  titulo={'Fashion Web page'}
             about='This Web Page was made for a college project, about a clothing store. -API REST,JS,CSS,HTML-' project={links[2]} />
            <Card onClick={() => setFlipped4(!isFlipped4)} srcFront={ImgCirco} srcBack={ImgLogoPhp} isFlipped={isFlipped4} titulo={'Circus Web page'}
            about='This Web Page was made for a college project, about a circus with Login (access token). I used php to do an MVC pattern and MySQL to store the data.' project={links[3]} />
            <Card onClick={() => setFlipped5(!isFlipped5)} srcFront={ImgGuessGame} srcBack={LogoHtmlCssJsApi} isFlipped={isFlipped5}  titulo={'Guess Game'}
            about='This is a guess game. I used an API that change the order of the letters in a word and the player has to guess the whole phrase in a given time.' project={links[4]}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
