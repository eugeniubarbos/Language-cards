import React from 'react';
import CardItem from '../CardItem/CardItem';
import './CardList.css';
import { languages }  from '../../data/data';

const CardList = () => {
  return (
    <div className='CardList'>
      <h1> Languages</h1>
      <div className='cards'>
        { languages.map(lang => <CardItem lang={ lang } key={ lang.name} />) }
      </div>
    </div>
  )
}

export default CardList