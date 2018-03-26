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
            },
            type: 'normal',
        };
        this.handleObjectChange = this.handleObjectChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
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

    handleSizeChange(width, height) {
        this.setState(prevState => {
            prevState.genObject.mapWidth = width;
            prevState.genObject.mapHeight = height;
            console.log(prevState)
            return {object: prevState}
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
                <Controls object={this.state.genObject} type={this.state.type}
                          typeChange={this.handleTypeChange} sizeChange={this.handleSizeChange} columne="first"/>
                <Area object={this.state.genObject} type={this.state.type} stateUpdate={this.handleObjectChange}
                      columne="secend"/>
                <JSONUpdater stateUpdate={this.handleObjectChange} object={this.state.genObject} columne="third"/>
            </div>
        );
    }
}

export default App;
