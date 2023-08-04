import React, { useState, useEffect } from 'react';

const ProgressBar = ({color,progress,type,percent}) => {
  const [width, setWidth] = useState(1);

  useEffect(() => {
    let id;
    if (width < progress) {
      id = setInterval(() => {
        setWidth((prevWidth) => {
          if (prevWidth >= 100) {
            clearInterval(id);
            return 100;
          } else {
            return prevWidth + 1;
          }
        });
      }, 70);
    }

    return () => {
      clearInterval(id); // Limpia el intervalo cuando el componente se desmonte
    };
  }, [width]);

  return (
    <>
      
    <div className="progressBar">

    <h4>{type}</h4>
      <div className="myProgress">
        
        <div className="myBar" style={{ width: `${width}%`, backgroundColor: color}}> </div>
        <p>{percent}</p>
      </div>
      
    </div>
   </>
  );
};

export default ProgressBar;