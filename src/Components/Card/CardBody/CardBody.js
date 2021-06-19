import React from 'react';
import VictorPic from '../../../images/image-victor.jpg';
import './CardBody.css';

function CardBody() {
   return (
      <React.Fragment>
         <div className='card-body-container'>
            <img src={VictorPic} alt='Profile of Victor' />
            <div className='text-container'>
               <p className='main-text'>
                  Victor Crest <span>26</span>
               </p>

               <p className='secondary-text'>London</p>
            </div>
         </div>
      </React.Fragment>
   );
}

export default CardBody;
