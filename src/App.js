import React, { Fragment } from 'react';
import './App.css';
import Misc from './components/Misc';
import output from './json/pl_pl-palac-art.json';
import Cinema from './components/Cinema';
import Showtimes from './components/Showtimes';

function App() {
  return (
    <Fragment>
      <h1 className='header'>Viewer</h1>
      <Misc output={output} />
      <Cinema output={output} />
      <Showtimes output={output} />
    </Fragment>
  );
}

export default App;
