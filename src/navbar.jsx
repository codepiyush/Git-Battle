import React, {Component} from 'react';

class Navbar extends Component {

    constructor(props) {
        super();
    }
    text() {
        if(this.props.value === '1'){
            return <p id="navtext">Git battle</p>
        }
        else {
            return <p id="navtext">The Top 10</p>
        }
    }
    render() {
        return (
            <div id="title">
                {this.text()} 
                <hr/> 
            </div>
        )
    }
}
export default Navbar;