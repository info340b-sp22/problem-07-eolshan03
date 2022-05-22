import React, { useState } from 'react'; //import React Component

import _ from 'lodash'; //import external library!

export default function GameDataTable(props) {

  //Your work goes here
  const [sortByCriteria, setCol] = useState(null);
  const [isAscending, setRev] = useState(null);
  const handleClick = (event) => {
    if(sortByCriteria !== event.currentTarget.name) {
      setCol(event.currentTarget.name);
      setRev(1);
    } else if(isAscending === 1) {
      setRev(2);
    } else {
      setCol(null);
      setRev(null);
    }
}

let sortedArr = _.sortBy(props.data, sortByCriteria);
if(sortByCriteria !== null && isAscending !== 1) {
  sortedArr = _.reverse(sortedArr);
}

let yr = false;
let win = false;
let score = false;
let run = false;
let ascend1 = false;
let ascend2 = false;
let ascend3 = false;
let ascend4 = false;
if(sortByCriteria === "year") {
  yr = true;
  if(isAscending === 1) {
    ascend1 = true;
  }
} else if(sortByCriteria === "winner") {
  win = true;
  if(isAscending === 1) {
    ascend2 = true;
  }
} else if(sortByCriteria === "score") {
  score = true;
  if(isAscending === 1) {
    ascend3 = true;
  }
} else {
  run = true;
  if(isAscending === 1) {
    ascend4 = true;
  }
}

  //convert data into rows
  const rows = sortedArr.map((match) => {
    return <GameDataRow key={match.year} game={match} />
})

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              Year
              <SortButton ascending={ascend1} active={yr} onClick={handleClick} name="year" />
            </th>
            <th className="text-end">
              Winner
              <SortButton ascending={ascend2} active={win} onClick={handleClick} name="winner" />
            </th>
            <th className="text-center">
              Score
              <SortButton ascending={ascend3} active={score} onClick={handleClick} name="score" />
            </th>
            <th>
              Runner-Up
              <SortButton ascending={ascend4} active={run} onClick={handleClick} name="runner_up" />
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

//Component for managing display logic of sort button
//Props: 
//  `active` [boolean] if icon should be highlighted,
//  `ascending` [boolean] if icon should be in ascending order (flipped)
//  `onClick` [function] click handler (passthrough)
function SortButton(props) {
  let iconClasses = ""
  if (props.active) { iconClasses += ` active` }
  if (props.ascending) { iconClasses += ` flip` };

  return (
    <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
      <span className={"material-icons" + iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
    </button>
  );
}

function GameDataRow({ game }) { //game = props.game
  return (
    <tr>
      <td>{game.year}</td>
      <td className="text-end">{game.winner} {game.winner_flag}</td>
      <td className="text-center">{game.score}</td>
      <td>{game.runner_up_flag}&nbsp;&nbsp;{game.runner_up}</td>
    </tr>
  );
}
