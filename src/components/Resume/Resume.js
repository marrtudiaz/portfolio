import React, { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'
import Resumecss from '../../css/Resume.css';

const Resume = () => {
  {

    const [showProgressBar, setShowProgressBar] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setShowProgressBar(true);
        } else {
          setShowProgressBar(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

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
        <div className="aboutMe">
          <h5>My Skills</h5>
         
          <div className="progressBar">

            {showProgressBar && <ProgressBar color={'rgba(255, 0, 0, 0.675)'} percent={'80%'} progress={'80'} type={'Javascript'} />}
            {showProgressBar && <ProgressBar color={' rgba(0, 0, 255, 0.675)'} percent={'70%'} progress={'70'} type={'CSS'} />}
            {showProgressBar && <ProgressBar color={'rgba(255, 204, 0, 0.675)'} percent={'60%'} progress={'60'} type={'React.js'} />}
            {showProgressBar && <ProgressBar color={'rgba(0, 128, 0, 0.675'} percent={'40%'} progress={'40'} type={'Node.js'} />}
            {showProgressBar && <ProgressBar color={' rgba(0, 0, 255, 0.675)'} percent={'70%'} progress={'70'} type={'PostgreSQL'} />}
          </div>
        </div>
      </>

    )
  }
}

export default Resume;