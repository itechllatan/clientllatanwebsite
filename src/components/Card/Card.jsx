import React from 'react';
import './card.css'; // Archivo para estilos adicionales si es necesario

const Card = ({ frontImg }) => {

  return (
    <div className="col-md-3">
      <div className='Card-container'>
        <div className="card-inner">
          <div className="card-front">
            <img src={frontImg} alt="Front" />
            
          </div>
          {/* <h3>{title}</h3> */}
        </div>
      </div>
    </div>
  );
};

export default Card;