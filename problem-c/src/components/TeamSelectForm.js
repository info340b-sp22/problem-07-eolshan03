import React, { useState } from 'react'; //import React Component

export default function TeamSelectForm(props) {

  //Your work goes here
  const [team, setTeam] = useState('');
  const[isChecked, setCheck] = useState(false);
  const handleTeam = (event) => {
    setTeam(event.target.value);
}

const handleCheck = (event) => {
  setCheck(event.target.checked);
}

const handleBtnClick = (event) => {
  props.applyFilterCallback(team, isChecked);
}

  const optionElems = props.teamOptions.map((teamName) => {
    return <option key={teamName} value={teamName}>{teamName}</option>
}) 

  return (
    <div className="row align-items-center mb-3">
      <div className="col-auto">
        <select onChange={handleTeam} id="teamSelect" className="form-select">
          <option value={team}>Show all teams</option>
          {optionElems}
        </select>
      </div>
      <div className="col-auto">
        <div className="form-check">
          <input onChange={handleCheck} id="runnerupCheckbox" type="checkbox" className="form-check-input" checked={isChecked} />
          <label htmlFor="runnerupCheckbox" className="form-check-label">Include runner-up</label>
        </div>
      </div>
      <div className="col-auto">
        <button onClick={handleBtnClick} id="submitButton" type="submit" className="btn btn-warning">Apply Filter</button>
      </div>
    </div>
  );
}