
import AboutCss from '../../css/About.css'

import React, { useState, useEffect,  useRef} from 'react';
import Img from '../../images/img.jpg';
const About = () => {

   
      const [showText, setShowText] = useState(false);
      const [animation, setAnimation] = useState('');
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 20) {
            setShowText(true);
            setAnimation('fadeIn');
          } else {
            setShowText(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return (
        <>
          <div className="about">
          <img src={Img} style={{ width: 250, height: 400,borderRadius: '5%',
          border: '1px solid #ccc',boxShadow:2}} /> 
            <div className="about-text">
           
<p className={showText ? 'animatedText' : ''}>{showText && "Hello, everyone! I'm Martina, a dedicated and ambitious software development student. My passion for programming drives me to achieve my goals and make a meaningful impact in this dynamic field. Today, I'm thrilled to share my journey as I work towards landing my first job in the IT industry."}</p>
           
            
            </div>
               
            </div>
        </>

    );
};

export default About;