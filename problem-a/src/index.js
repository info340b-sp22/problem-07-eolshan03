import React from 'react';
import ReactDOM from 'react-dom/client';

//render the App component here!
import { App } from './components/App';
import senators from './data/senators.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
let appInst = <React.StrictMode>
    <App senatorsList={senators}/>
</React.StrictMode>;
root.render(appInst);
