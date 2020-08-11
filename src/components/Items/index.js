import React from 'react';

 const ItemsList = ({heroe}) => {
   return (
     <>
       <div className='col-lg-3 col-md-4 col-sm-12 mt-4'>
         <div className='card custom_card'
           style={{backgroundImage: `url(${heroe.thumbnail.path}.${heroe.thumbnail.extension})`}}
           data-toggle='modal'
          data-target='#staticBackdrop'
           >
           <div className='card-body'>
             <header className='custom_header'>
               <i className='far fa-star'></i>
             </header>
             <footer className='custom_footer'>{heroe.name}</footer>
           </div>
         </div>
       </div>

       <div
          className='modal fade'
          id='staticBackdrop'
          data-backdrop='static'
          data-keyboard='false'
          tabIndex='-1'
          aria-labelledby='staticBackdropLabel'
          aria-hidden='true'
          >
          <div className='modal-dialog modal-lg modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='staticBackdropLabel'>{heroe.name}</h5>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
               {heroe.comics.items.map((comic) => {
                  return (
                    <ul className='list-group list-group-flush'>
                      <div className='row mt-3'>
                        <div className='col-lg-4'>
                          <img src={`${heroe.thumbnail.path}.${heroe.thumbnail.extension}`} className='img-fluid' />
                        </div>
                        <div className='col'>
                          <li className='list-group-item list-group-item-action'> {comic.name}</li>
                          <div className='mt-2'>{heroe.description}</div>
                        </div>
                      </div>
                    </ul>
                  )
                })}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
     </>
   );
}

export default ItemsList;
