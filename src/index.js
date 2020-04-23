import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Footer from '../src/components/Footer';
//import Carrusel from './components/Carrusel';
//import Header from '../src/components/Header';
//import Search from '../src/components/Search';
//import VNA from '../src/components/VNA';
//import Login from '../src/components/Login';
//import Login from './container/Login'
//import Registro from './container/Registro'
//import ClaseDigital from '../src/components/ClaseDigital';
import * as serviceWorker from './serviceWorker';


//import App from './container/App';
//ReactDOM.render(< VNA/>,document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Header />, document.getElementById('root'));
//ReactDOM.render(<Footer />, document.getElementById('root'));
//ReactDOM.render(<Search />, document.getElementById('root'));
//ReactDOM.render(<Carrusel />, document.getElementById('root'));
//ReactDOM.render(<Login />, document.getElementById('root'));
//ReactDOM.render(<Registro />, document.getElementById('root'));

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
