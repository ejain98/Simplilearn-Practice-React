//import logo from './logo.svg';
//import './App.css';
//import ClassProp from './ClassProp.js'
import React from 'react'
import { ClassComp, ClassComp1 } from './Components/ClassComp';
import FunnctionalComp from './Components/FunctionalComp';
//import FunctionProp from './FunctionProp';
import Click from './Components/Click';
import Counter from './Components/Counter';
class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Lets build an App</h3>
        <ClassComp />
        <ClassComp1 />
        <FunnctionalComp />
        <Click />
        <Counter />
      </div>
    );
  }
}


export default App;
