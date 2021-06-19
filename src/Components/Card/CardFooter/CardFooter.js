import React from 'react';
import './CardFooter.css';

function CardFooter() {
   return (
      <React.Fragment>
         <div className='card-footer-container'>
            <div className='card-footer-list'>
               <div className='list-item'>
                  <p>80K</p>
                  <p>Followers</p>
               </div>
               <div className='list-item'>
                  <p>803K</p>
                  <p>Likes</p>
               </div>
               <div className='list-item'>
                  <p>1.4K</p>
                  <p>Photos</p>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
}

export default CardFooter;
