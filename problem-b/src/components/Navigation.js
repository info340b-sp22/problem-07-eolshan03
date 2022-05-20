import React from 'react';

export function AboutNav() {
    return (
        <nav id="aboutLinks">
          <h2>About</h2>
          <ul className="list-unstyled">
            <li><a href="#/">How to Adopt</a></li>
            <li><a href="#/">Volunteering</a></li>
            <li><a href="#/">Events</a></li>
            <li><a href="#/">Donate</a></li>
            <li><a href="#/">About Us</a></li>
          </ul>
        </nav>
    )
}

export function BreedNav(props) {
    <nav id="breedLinks">
          <h2>Pick a Breed</h2>
          <ul className="list-unstyled">
        {props.breeds.map((arrayItem) => {
        <li key={arrayItem}><a href="">{arrayItem}</a></li>
    })}
    </ul>            
    </nav>
}
