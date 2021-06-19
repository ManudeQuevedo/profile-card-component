import React from 'react';
import CardHeader from './CardHeader/CardHeader';
import CardBody from './CardBody/CardBody';
import CardFooter from './CardFooter/CardFooter';
import './Card.css';

function Card() {
   return (
      <React.Fragment>
         <div className='card-container'>
            <CardHeader />
            <CardBody />
            <CardFooter />
         </div>
      </React.Fragment>
   );
}

export default Card;
