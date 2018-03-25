import React, {Component} from 'react';
import Hex from '../img/hexa.svg';

class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertys: this.props.propertys,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let tmp = {
            id: this.state.propertys.id,
            x: this.state.propertys.x,
            z: this.state.propertys.z,
            type: this.props.clickType,
        };
        if(this.state.propertys.out) tmp.outWall = this.state.propertys.out;
        if(this.state.propertys.in) tmp.inWall = this.state.propertys.in;
        this.props.stateUpdate(tmp)
    }

    genIner() {
        if (this.state.propertys.out) {
            return (
                <div style={{
                    transform: `rotate(${60 * this.state.propertys.out}deg)`,
                    textAlign: 'center',
                }}>{this.state.propertys.out}</div>
            );
        }
    }

    componentWillReceiveProps(nProps) {
        this.setState({
            propertys: nProps.propertys,
        })
    }

    render() {
        return (
            <div id={this.state.propertys.id} style={{
                position: 'absolute',
                top: this.state.propertys.top,
                left: this.state.propertys.left,
                backgroundImage: `url(${Hex})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                width: '100px',
                height: '100px',
            }} onClick={this.handleClick}>
                {this.genIner()}
            </div>
        );
    }
}

export default Element;