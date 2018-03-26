import React, {Component} from 'react';
import '../style/Controls.css';

class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            object: this.props.object,
            idWidth: "987_Width",
            idHeight: "987_Height",
            buttonTypes: ["normal", "test"]
        }
    }

    buttonsGen() {
        let tmpArray = [];
        let tmpArray = this.state.buttonTypes.map(value => {
            if(value == this.state.type) {
                return (<button className={'active typeButton'} onClick={this.props.typeChange} value={value} >{value}</button>);
            } else {
                return (<button className={'typeButton'} value={value}>{value}</button>);
            }
        });
        return tmpArray;
    }

    componentWillReceiveProps(nProps) {
        if(nProps.object !== this.state.object) {
            this.setState({
                object: nProps.object,
            })
        }
    }

    componentDidMount() {
        document.getElementById(this.state.idWidth).value = this.state.object.x;
        document.getElementById(this.state.idHeight).value = this.state.object.z;
    }

    componentDidUpdate() {
        document.getElementById(this.state.idWidth).value = this.state.object.mapWidth;
        document.getElementById(this.state.idHeight).value = this.state.object.mapHeight;
    }

    render() {
        return (<div style={{
            gridColumn: this.props.columne
        }}>
            <input type="text" id={this.state.idWidth} onChange={this.}/>
            <input type="text" id={this.state.idHeight}/>
            <div className="divider"/>
            <div className="typeHandler">
                {this.buttonsGen()}
            </div>
        </div>);
    }
}

export default Controls;