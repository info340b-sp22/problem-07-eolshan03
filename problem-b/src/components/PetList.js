import React from 'react';


function PetCard(props) {
  let displayName = props.pets.name;
  const handleClick = (event) => {
    props.adoptCallback(props.pets.name);
}
  if(props.pets.adopted) {
    displayName = props.pets.name + " (Adopted)";
  }
  return (
    <div className="card" onClick={handleClick}>
            <img className="card-img-top" src={props.pets.img} alt={props.pets.name} />
            <div className="card-body">
            <h3 className="card-title">{displayName}</h3>
              <p className="card-text">{props.pets.sex + " " + props.pets.breed}</p>
            </div>
          </div>
  )
}

function PetList(props) {
  let pets = props.pets;
    return (
      <div>
      <h2>Dogs for Adoption</h2>
      <div className="card-deck">
        {props.pets.map((arrayItem) =>
        <PetCard adoptCallback={props.adoptCallback} pets={arrayItem} key={arrayItem.name} />
    )}
      </div>
      </div>
    )
}

export default PetList;
