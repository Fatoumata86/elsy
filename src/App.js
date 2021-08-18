import React from "react";
import Box from "./components/Box"
import "./styles/global.css"

const tempMin = -20;
const tempMax = 40;
const heartMin  = 80;
const heartMax  = 180;
const stepsMin  = 0;
const stepsMax  = 50000;

export class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
       water: 0,
       heart: 120,
       temperature: -10,
       steps : 3000      
    }
  }
  onHeartChange = (e) => {
    this.setState({heart: e.target.value})
  }
  onTempChange = (e) => {
    this.setState({temperature: e.target.value})
  }
  onStepsChange = (e) => {
    this.setState({steps: e.target.value})
  }
  render() {   
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Box Water */}
          <Box icon="local_drink" color="#3A85FF" value="1.5" unit="L" />
          {/* Box Steps */}
          <Box icon="directions_walk" color="black" value={this.state.steps} unit="steps" min={stepsMin} max={stepsMax} onChange={this.onStepsChange} />
          {/* Box Heart */}
          <Box icon="favorite" color="red" value={this.state.heart} unit="bpm" min={heartMin} max={heartMax} onChange={this.onHeartChange} />
          {/* Box Temperature */}
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°C" min={tempMin} max={tempMax} onChange={this.onTempChange} />
        </div>
      </div>
    );
  }
}

export default App;