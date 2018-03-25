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

    componentWillReceiveProps(nProps) {
        console.log(nProps)
        this.setState({
            object: nProps.object,
            type: nProps.type,
        }, this.genObjects);
    }

    handleStateUpdate(props) {
        props.forEach(value => {
            if (this.state.elements.length > 0) {
                let tmpTest = this.state.elements.findIndex(value2 => {
                    if (value2.id === value.id)
                        return value2;
                    else
                        return false;
                });
                if (tmpTest == -1) {
                    this.setState((prevState) => {
                        prevState.elements.push(value);
                        return {
                            elements: prevState.elements,
                        };
                    });
                } else {
                    this.setState((prevState) => {
                        prevState.elements[tmpTest] = value;
                        return {
                            elements: prevState.elements,
                        };
                    });
                }
            }
        });
    }

    genObjects() {
        console.log(this.state.object);
        let tmpElems = [];
        if (this.state.object.items.length != 0) {

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