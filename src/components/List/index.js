import React from 'react';
import ItemsList from '../Items';

const List = (props) => {
  const heroesItems = props.heroes.map((heroe) => {
    return <ItemsList key={heroe.id} heroe={heroe} />
  });

  return (
    <div className='row'>
      {heroesItems}
    </div>
  );
}

export default List;
