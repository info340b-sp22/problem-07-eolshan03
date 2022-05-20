import React from 'react';


function PetCard(props) {
  const handleClick = (event) => {
    props.adoptCallBack(props.petData.name);
}
  let displayName = "";
  if(props.adopted == true) {
    displayName = props.petData.name + " (Adopted)";
  } else {
    displayName = props.petData.name;
  }
  return (
    <div className="card" onClick={handleClick}>
            <img className="card-img-top" src="img/069b8257-f9db-4034-908f-12b8cea76693.jpg" alt={props.petData.name} />
            <div className="card-body">
            <h3 className="card-title">{displayName}</h3>
              <p className="card-text">{props.petData.sex + " " + props.petData.breed}</p>
            </div>
          </div>
  )
}

export function PetList(props) {
    <h2>Dogs for Adoption</h2>
    props.pets.map((arrayItem) => {
        <PetCard adoptCallBack={props.adoptCallback} petData={arrayItem} />
    })
}
