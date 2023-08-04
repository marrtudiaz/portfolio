

// Card.js
import React, { useState } from 'react';

const Card = ({ srcFront, srcBack, isFlipped,onClick,titulo,about,project}) => {
 

const [text,setText]=useState(false);

const handleButtonClick = () => {
  setText(true);
};

const handleButtonClose =()=>{
  setText(false);
}

  return (
<>
    <div className="single-card">
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="flip-card-inner">
      <h5>{titulo}</h5>
      <div className="container">
      <div className="info" style={{alignItems: 'center'}}>
        <img className="front" src={srcFront} style={{ width: 300, height: 400,  bordeRadius: 10}}/>
        <img className="back" src={srcBack}  style={{ width: 300, height: 400}} /> 
        
        </div>
     
      </div>
      
    </div>
   
    </div>
    
    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              Click to see the repo
            </a>
<p className={text ? 'textOn' : 'textOff'}style={{fontSize:17}} >{about} </p>

<button onClick={text ? handleButtonClose : handleButtonClick }> {text ? 'See less': 'See more'}</button>
</div>
    </>
  );
};

export default Card;
