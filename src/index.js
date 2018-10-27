
import React from 'react';
import ReactDOM from 'react-dom';

import Location from './components/location';

import './index.css';
// import * as serviceWorker from './serviceWorker';

// import dotenv from 'dotenv';
// dotenv.config()

const App = () => (
  <div className="app">
    <h1>big red barn tells you weather</h1>
    <Location/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
