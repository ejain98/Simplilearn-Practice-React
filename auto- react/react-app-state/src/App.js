//import logo from './logo.svg';
import './App.css';
import React from 'react'
import NewComp from './Components/NewComp';

// import ClassProp from './ClassProp.js'
// import FunctionProp from './FunctionProp';

class App extends React.Component {
  styles = {
    fontStyle: "Bold",
    color: "teal"
  }
  render() {

    return (
      <div class="App">

        <h1 style={this.styles}>Welcome</h1>
        <NewComp />
      </div>
    )
  }
}


export default App;
