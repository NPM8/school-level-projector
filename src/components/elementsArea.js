import React, {Component} from 'react';
import Hex from '../img/hexa.svg';
import Arrow from '../img/arrow.svg';

class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertys: this.props.propertys,
            inner: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let tmp = {
            id: this.state.propertys.id,
            x: this.state.propertys.x,
            z: this.state.propertys.z,
            type: this.props.clickType,
            outWall: (this.state.propertys.out == null || this.state.propertys.out == 6) ? 1 : this.state.propertys.out + 1,
        };
        if(this.state.propertys.in) tmp.inWall = this.state.propertys.in;
        this.props.stateUpdate(tmp);
    }

    genIner() {
        let tmp = "";
        if (this.state.propertys.out) {
            tmp = <div style={{
                transform: `rotate(${60 * (this.state.propertys.out - 1)}deg)`,
                    textAlign: 'center',
                backgroundImage: `url(${Arrow})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 10%',
                backgroundSize: '30px',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'columne',
            }}>
                <div style={{width: '20px', alignSelf: 'center'}}>{this.state.propertys.out}</div>
            </div>;
        }
        this.setState({
            inner: tmp
        })
    }

    componentWillMount() {
        this.genIner();
    }

    componentWillReceiveProps(nProps) {
        console.log(nProps);
        this.setState({
            propertys: nProps.propertys,
        }, this.genIner)
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
                {this.state.inner}
            </div>
        );
    }
}

export default Element;