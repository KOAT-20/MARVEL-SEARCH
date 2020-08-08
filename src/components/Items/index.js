import React from 'react';

 const ItemsList = ({heroe}) => {
   return (
     <div className='col-lg-3 col-md-4 col-sm-12 mt-4'>
       <div className='card custom_card' style={{backgroundImage: `url(${heroe.thumbnail.path}.${heroe.thumbnail.extension})`}}>
         <div className='card-body'>
           <header className='custom_header'>
             <i className='far fa-star'></i>
           </header>
           <footer className='custom_footer'>{heroe.name}</footer>
         </div>
       </div>
     </div>
   );
}

export default ItemsList;
