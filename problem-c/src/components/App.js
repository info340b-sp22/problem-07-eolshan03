import React, { useState } from 'react'; //import React Component
import GameDataTable from './GameDataTable';
import TeamSelectForm from './TeamSelectForm';

function App(props) {

  //Your work goes here
  const [appTeam, setAppTeam] = useState('');
  const[isCheckedApp, setAppCheck] = useState(false);

  //get sorted list of unique teamNames. reduce array of objects into array of strings, 
  //convert to Set to get uniques, spread back into array, and sort 
  const uniqueTeamNames = [...new Set(props.gameData.reduce((all, current) => {
    return all.concat([current.winner, current.runner_up]);
  }, []))].sort();

  let displayedData = props.gameData.filter((element) => {
    if(appTeam === '') {
      return true;
    } else if(element.winner === appTeam) {
      return true;
    } else if(isCheckedApp === true) {
      if(element.runner_up === appTeam) {
        return true;
      }
    }
  })

  const applyFilter = (teamName, check) => {
    setAppCheck(check);
    setAppTeam(teamName);
  }

  return (
    <div className="container">
      <header className="mb-3">
        <h1>FIFA World Cup Finals</h1>
      </header>
    
      <main>
        <TeamSelectForm applyFilterCallback={applyFilter} teamOptions={uniqueTeamNames} />
        <GameDataTable data={displayedData} />
      </main>

      <footer>
        <small>Data from <a href="https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals">Wikipedia</a>.</small>
      </footer>
    </div>
  );
}

export default App;
