import React, {Component} from 'react';
import Element from './elementsArea';

class Area extends Component {
    constructor(props) {
        super(props);
        this.state = {
            object: this.props.object,
            elements: [],
            type: this.props.type,
        };
        this.handleStateUpdate = this.handleStateUpdate.bind(this);
    }

    genBefor() {

    }

    componentWillReceiveProps(nProps) {
        this.setState({
            object: nProps.object,
        }, this.genObjects);
        if (this.state.type !== nProps.type) {
            this.setState({
                type: nProps.type,
            })
        }
    }

    handleStateUpdate(props) {
        if (this.state.object.items.length > 0) {
            this.isNeseseryToCreateInWall(1,0,0);
            let tmpTest = this.state.object.items.findIndex(value2 => {
                if (value2.id === props.id)
                        return value2;
                    else
                        return false;
                });
                if (tmpTest == -1) {
                    this.setState((prevState) => {
                        prevState.object.items.push(props);
                        return {
                            object: prevState.object,
                        };
                    }, this.props.stateUpdate(this.state.object));
                } else {
                    this.setState((prevState) => {
                        prevState.object.items[tmpTest] = props;
                        return {
                            object: prevState.object,
                        };
                    }, this.props.stateUpdate(this.state.object));
                }
        } else {
            this.setState(prevState => {
                prevState.object.items.push(props);
                return {
                    object: prevState.object,
                }
            }, this.props.stateUpdate(this.state.object));
            }
    }

    genObjects() {
        console.log(this.state.object);
        let tmpElems = [];
        if (this.state.object.items.length != 0) {
            for (var i = 0; i < this.state.object.mapHeight; i++) {
                for (var j = 0; j < this.state.object.mapWidth; j++) {
                    let tmpTest = this.state.object.items.findIndex(value2 => {
                        if (value2.id === `d${i}_${j}`)
                            return value2;
                        else
                            return false;
                    });
                    console.log('tmpTest', tmpTest);
                    if (tmpTest == -1) {
                        tmpElems.push((<Element propertys={{
                            top: `${(j % 2 === 1) ? i * 100 : (i * 100) + 50}px`,
                            left: `${j * 100}px`,
                            id: `d${i}_${j}`,
                            x: i,
                            z: j,
                        }} stateUpdate={this.handleStateUpdate} clickType={this.state.type}/>))
                    } else if (this.state.object.items[tmpTest].outWall != null) {
                        tmpElems.push((<Element propertys={{
                            top: `${(j % 2 === 1) ? i * 100 : (i * 100) + 50}px`,
                            left: `${j * 100}px`,
                            id: `d${i}_${j}`,
                            x: i,
                            z: j,
                            out: this.state.object.items[tmpTest].outWall,
                        }} stateUpdate={this.handleStateUpdate} clickType={this.state.type}/>))
                    } else {
                        tmpElems.push((<Element propertys={{
                            top: `${(j % 2 === 1) ? i * 100 : (i * 100) + 50}px`,
                            left: `${j * 100}px`,
                            id: `d${i}_${j}`,
                            x: i,
                            z: j,
                        }} stateUpdate={this.handleStateUpdate} clickType={this.state.type}/>))
                    }
                }
            }
        } else {
            for (var i = 0; i < this.state.object.mapHeight; i++) {
                for (var j = 0; j < this.state.object.mapWidth; j++) {
                    console.log(`d${i}_${j}`);
                    tmpElems.push((<Element propertys={{
                        top: `${(j % 2 === 1) ? i * 100 : (i * 100) + 50}px`,
                        left: `${j * 100}px`,
                        id: `d${i}_${j}`,
                        x: i,
                        z: j,
                    }} stateUpdate={this.handleStateUpdate} clickType={this.state.type}/>))
                }
            }
        }
        this.setState({
            elements: tmpElems,
        })
    }

    componentWillMount() {
        this.genObjects()
    }

    render() {
        return (
            <div style={{
                gridColumn: this.props.columne,
                position: 'relative',
            }}>{this.state.elements}</div>
        );
    }
}

export default Area;