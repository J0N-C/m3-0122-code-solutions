import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pokemonImgs = [
  {
    id: 1,
    name: 'Bulbasaur',
    url: 'images/001.png'
  },
  {
    id: 4,
    name: 'Charmander',
    url: 'images/004.png'
  },
  {
    id: 7,
    name: 'Squirtle',
    url: 'images/007.png'
  },
  {
    id: 25,
    name: 'Pikachu',
    url: 'images/025.png'
  },
  {
    id: 39,
    name: 'Jigglypuff',
    url: 'images/039.png'
  }
];

ReactDOM.render(
  <Carousel images={pokemonImgs}/>,
  document.getElementById('root')
);
