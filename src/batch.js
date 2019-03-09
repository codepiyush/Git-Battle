import React, {Component} from 'react';

class Batch extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="batch">
                <img src={this.props.user.avatar_url} alt="Github Avatar"/>
                <p style={{color: "white"}}>{this.props.user.name}</p>
                <button name="cross" onClick={() => this.props.handleClick(this.props.userno)}>X</button>
            </div>
        )
    }
}
export default Batch;