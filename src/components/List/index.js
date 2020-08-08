import React from 'react';
import ItemsList from '../Items';

const List = (props) => {
  const heroesItems = props.characters.map((character) => {
    return <ItemsList key={character.id} heroe={character} />
  });

  return (
    <div className='row'>
      {heroesItems}
    </div>
  );
}

export default List;
