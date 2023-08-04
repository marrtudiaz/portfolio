import React from 'react';
import footerCss from '../../css/Footer.css';

const Footer = () => {
  const handleDownloadCV = () => {
    
    const cvLink = '/pdfs/cv-martina-diaz.pdf';

    const link = document.createElement('a');
    link.href = cvLink;
    link.setAttribute('download', 'mi_cv.pdf'); 
    document.body.appendChild(link);

   
    link.click();

    document.body.removeChild(link);
  };
  
    return (
      <>
   
      <div className="footer">
        <div className='footer-i'>
      <i className='bx bxl-github' ></i>
      <i className='bx bxl-linkedin-square'></i> 
      </div>
      <div className="download">
        <button onClick={handleDownloadCV}> Download CV</button>
        </div>
      </div>
    
      </>
    );
  };
  
  export default Footer;