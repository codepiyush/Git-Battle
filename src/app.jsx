import React, { Component } from 'react';
import Navbar from './navbar';
import Battle from "./battle"
import "./index.css";

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="battle">
                    <Navbar value='1'/>
                    <Battle/>
                </div>
                
                
            </React.Fragment>
        )
    }
}
export default App;