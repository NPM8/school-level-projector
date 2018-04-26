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
            type: 'WALL',
        };
        this.handleObjectChange = this.handleObjectChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.genBefor = this.genBefor.bind(this);
    }

    genBefor() {
        this.setState(prevState => {
            prevState.genObject.items.forEach((value, index) => {
                console.log("genBefor", value);
                if(prevState.genObject.items[index-1]) {
                    if(!prevState.genObject.items[index-1].outWall)
                    {
                        return;
                    }
                    switch (prevState.genObject.items[index-1].outWall) {
                        case 1:
                        case 2:
                        case 3:
                            value.inWall = prevState.genObject.items[index-1].outWall + 3;
                            break;
                        case 4:
                        case 5:
                        case 6:
                            value.inWall = 1+ (prevState.genObject.items[index-1].outWall - 4);
                            break;
                        default:
                            delete value.inWall;
                            break;
                    }
                }
            })
            return {
                genObject: prevState.genObject,
            }
        })

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
        }, this.genBefor)
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
