
import React from 'react'; //import React library

/* Your code goes here */

import { SenatorTable } from './SenatorTable';

export function App(props) {
    return <div className="container">
        <h1>US Senators (Jan 2022)</h1>
        <SenatorTable senatorsList={props.senatorsList}/>
    </div>
}


