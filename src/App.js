import React, {Component} from 'react';
import {JSONUpdater, Area, Controls} from "./components";
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
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleObjectChange(obj) {
        this.setState((prevState) => {
            console.log(obj);
            return {
                genObject: (obj == null) ? {
                    mapWidth: prevState.genObject.mapWidth,
                    mapHeight: prevState.genObject.mapHeight,
                    items: []
                } : obj,
            }
        })
    }

    handleTypeChange(e) {
        this.setState({
            type: e.target.value,
        })
    }

    render() {
        console.log(this.state.genObject);
        return (
            <div className="App">
                <Controls obeject={this.state.genObject} type={this.state.type}
                          typeChange={this.handleTypeChange}  columne="first"/>
                <Area object={this.state.genObject} type={this.state.type} columne="secend"/>
                <JSONUpdater stateUpdate={this.handleObjectChange} object={this.state.genObject} columne="third"/>
            </div>
        );
    }
}

export default App;
