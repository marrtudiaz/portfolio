import React, { Component } from 'react'
import ContactCss from '../../css/Contact.css';


export default class contact extends Component {

  render() {  
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


<div className="contact">
  <section  className="contact-section">
      <div className="contact-details">
        <h4>Contact Details</h4>
        <p>
        <i className='bx bx-current-location'></i>  Tandil,Argentina.
        </p>
        <p>
        <i className='bx bxs-envelope' ></i> Email: martuudiaz28@gmail.com
        </p>
        <p>
        <i className='bx bxl-github' ></i> marrtudiaz
        </p>
        <p>
        <i className='bx bxl-linkedin-square'></i> Martina Diaz
        </p>
        </div>
        <div className="download-cv">
        <button onClick={handleDownloadCV}> Download CV</button>
        </div>
  </section>
  </div>
 
</>

    )
  }
}