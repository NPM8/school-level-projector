import React, {Component} from 'react';

class JSONUpdater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            object: this.props.object,
            columne: this.props.columne,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }

    componentWillReceiveProps(nProps) {
        if (nProps.object !== this.state.object) {
            this.setState({
                object: nProps.object,
            })
        }
    }

    handleUpdate(e) {
        this.props.stateUpdate(JSON.parse(document.getElementById('ala').value))
    }

    handleChange(e) {
        let tmpOne = e.target.value.replace(/\s+/g,"");
        console.log(e.target.value, tmpOne);
        try {
            let tmp = JSON.parse(tmpOne);
            this.setState({
                object: tmp,
            })
        } catch (e) {
            console.log(e);
        }

    }
    //value={JSON.stringify(this.state.object, null, 5)}
    handleCopy(e) {

    }

    componentDidMount() {
        document.getElementById('ala').value = JSON.stringify(this.state.object, null, 5)
    }

    componentDidUpdate() {
        document.getElementById('ala').value = JSON.stringify(this.state.object, null, 5)
    }

    render() {
        return (<div className="json-handler" style={{
            gridColumn: this.columne
        }}>
            <textarea id="ala" rows="4" cols="50" onInput={this.handleChange}></textarea>
            <button onClick={this.handleUpdate}>Aktualizuj</button>
            <button onClick={this.handleCopy}>Skopiuj</button>
        </div>)
    }
}

export default JSONUpdater;