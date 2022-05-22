import React from 'react';
import { useState } from 'react';
import _ from 'lodash';
import { AboutNav } from './Navigation';
import { BreedNav } from './Navigation';
import PetList  from './PetList';

function App(props) {
  const [pets, setAdopt] = useState(props.pets);
  const adoptPet = (name) => {
    let petsCopy = pets.map((arrayItem) => {
      if(arrayItem.name === name) {
        arrayItem.adopted = true;
      }
      setAdopt(petsCopy);
    })}
let reducedObj = _.groupBy(props.pets, 'breed');
let reducedArr = Object.keys(reducedObj);
  return (
  <div>
    <header className="jumbotron jumbotron-fluid py-4">
    <div className="container">
      <h1>Adopt a Pet</h1>
    </div>
  </header>

  <main className="container">
    <div className="row">
      <div id="navs" className="col-3">
      </div> 
        <BreedNav breeds={reducedArr} />
        <AboutNav />
      <div id="petList" className="col-9">
        <PetList adoptCallback={adoptPet} pets={pets}/>
      </div> 
    </div>
  </main>

  <footer className="container">
    <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
  </footer>
  </div>
  );
}



export default App;
