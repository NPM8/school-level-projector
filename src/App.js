import React, { Component } from 'react';
import {JSONUpdater, Area } from "./components";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genObject: {
                mapWidth: 2,
                mapHeight: 3,
                items: [],
                type: 'normal',
            },
        };
        this.handleObjectChange = this.handleObjectChange.bind(this);
    }

    handleObjectChange(obj) {
        this.setState((prevState) => {
            console.log(obj);
            return {genObject: (obj == null) ? {mapWidth: prevState.genObject.mapWidth, mapHeight: prevState.genObject.mapHeight, items: [] } : obj,}
        })
    }
  render() {
        console.log(this.state.genObject);
    return (
      <div className="App">
          <Area object={this.state.genObject} type={this.state.type} columne="secend"/>
        <JSONUpdater stateUpdate={this.handleObjectChange} object={this.state.genObject} columne="third" />
      </div>
    );
  }
}

export default App;