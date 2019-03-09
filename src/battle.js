import React, {Component} from 'react';

class Battle extends Component {
    constructor() {
        super();
        this.state= {
            user1: {},
            user2: {}
        }
        this.getuserjson = this.getuserjson.bind(this);
    }

    getuserjson(e){
        let label=e.target.name;
        let username=document.getElementById(label).value;
        fetch("https://api.github.com/users/"+username)
        .then(res => res.json())
        .then(data => {
            this.setState({[label]:data})
            console.log(this.state.user1);
        })
        
    }

    render() {
        return (
            <div>
                <div id="forms">
                    <div>
                        <input type="text" placeholder="Enter GitHub Username" id="user1" className="input"/>
                        <button id="submit1" name="user1" className="sub" onClick={this.getuserjson}>Submit</button>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter GitHub Username" id="user2" className="input"/>
                        <button id="submit2" name="user2" className="sub">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Battle;