import React from 'react';
import Bg from '../../../images/bgPatternCard.svg';
import './CardHeader.css';

function CardHeader() {
   return (
      <React.Fragment>
         <div className='card-header-container'>
            <img src={Bg} alt='Patter Bg' />
         </div>
      </React.Fragment>
   );
}

export default CardHeader;
