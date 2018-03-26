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
        this.handleSizeChange = this.handleSizeChange.bind(this);
    }

    buttonsGen() {
        let tmpArray = [];
        tmpArray = this.state.buttonTypes.map(value => {
            if(value == this.state.type) {
                return (<button className={'active typeButton'} onClick={this.props.typeChange} value={value} >{value}</button>);
            } else {
                return (
                    <button className={'typeButton'} onClick={this.props.typeChange} value={value}>{value}</button>);
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
        if (nProps.type !== this.state.type) {
            this.setState({
                type: nProps.type,
            })
        }
    }

    handleSizeChange() {
        if ((document.getElementById(this.state.idWidth).value != this.state.object.mapWidth || document.getElementById(this.state.idHeight).value != this.state.object.mapHeight) && (document.getElementById(this.state.idWidth).value != null || document.getElementById(this.state.idHeight).value != null))
            this.props.sizeChange(document.getElementById(this.state.idWidth).value, document.getElementById(this.state.idHeight).value);
    }

    componentDidMount() {
        document.getElementById(this.state.idWidth).value = this.state.object.mapWidth;
        document.getElementById(this.state.idHeight).value = this.state.object.mapHeight;
    }

    componentDidUpdate() {
        document.getElementById(this.state.idWidth).value = this.state.object.mapWidth;
        document.getElementById(this.state.idHeight).value = this.state.object.mapHeight;
    }

    render() {
        return (<div style={{
            gridColumn: this.props.columne
        }}>
            <input type="text" id={this.state.idWidth}/>
            <input type="text" id={this.state.idHeight}/>
            <button onClick={this.handleSizeChange}> Update</button>
            <div className="divider"/>
            <div className="typeHandler">
                {this.buttonsGen()}
            </div>
        </div>);
    }
}

export default Controls;