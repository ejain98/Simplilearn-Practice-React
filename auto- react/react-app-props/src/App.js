//import logo from './logo.svg';
//import './App.css';
import ClassProp from './ClassProp.js'
import React from 'react'
import FunctionProp from './FunctionProp';

class App extends React.Component {
  render() {
    return (
      <div>
        < ClassProp name="Ekta Jain" place="Badhni kalan"><p>Child Component</p></ClassProp>
        < ClassProp name="Jasmine Buttar" place="Chakk Kisana" ><button>Click me</button></ClassProp>
        < ClassProp name="Arti Bala" place="Dharamkot" />
        < ClassProp name="Naveeta Rajput" place="Firozepur" />
        <FunctionProp name="Manpreet" place="Moga" />

      </div>
    )
  }
}


export default App;
