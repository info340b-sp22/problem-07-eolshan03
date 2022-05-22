import React from 'react';


function PetCard(props) {
  let displayName = props.petData.name;
  const handleClick = (event) => {
    props.adoptCallBack(displayName);
}
  if(props.petData.adopted) {
    displayName = displayName + " (Adopted)";
  }
  return (
    <div className="card" onClick={handleClick}>
            <img className="card-img-top" src={props.petData.img} alt={props.petData.name} />
            <div className="card-body">
            <h3 className="card-title">{displayName}</h3>
              <p className="card-text">{props.petData.sex + " " + props.petData.breed}</p>
            </div>
          </div>
  )
}

function PetList(props) {
    return (
      <div>
      <h2>Dogs for Adoption</h2>
      <div className="card-deck">
        {props.pets.map((arrayItem) =>
        <PetCard adoptCallBack={props.adoptCallBack} petData={arrayItem} />
    )}
      </div>
      </div>
    )
}

export default PetList;
