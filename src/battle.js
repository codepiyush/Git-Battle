import React, { Component } from 'react';
import Batch from './batch';
import BattleCard from './battlecard';
//import BattleCard from './battlecard';

class Battle extends Component {
    constructor() {
        super();
        this.state = {
            user1: {},
            user2: {},
            gotuser1: false,
            gotuser2: false,
            battled: false,
            winner: ""
        }
        this.getuserjson = this.getuserjson.bind(this);
        this.handlecross = this.handlecross.bind(this);
        this.handleBattle = this.handleBattle.bind(this);
    }

    getuserjson(e) {
        let label = e.target.name;
        let username = document.getElementById(label).value;
        fetch("https://api.github.com/users/" + username)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if(data.message === 'Not Found') {
                    alert("Username not found");
                }
                else {
                    this.setState(() => {
                        return (
                            {
                                [label]: data,
                                ["got" + label]: true
                            }
                        )
                    })
                }
                //console.log(this.state.user1, this.state.user2);
            })
    }

    
    batchrender(userno) {
        if (userno === 1) {
            if (this.state.gotuser1 === true) {
                return (
                    <div>
                    <Batch user={this.state.user1} handleClick={this.handlecross} userno="1" />
                    {this.state.battled === true ? <BattleCard user={this.state.user1} winner={this.state.winner} id="1"/> : ""}
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <input type="text" placeholder="Enter GitHub Username" id="user1" className="input" />
                        <button id="submit1" name="user1" className="sub" onClick={this.getuserjson}>Submit</button>
                    </div>
                )
            }
        }
        else if (userno === 2) {
            if (this.state.gotuser2 === true) {
                return (
                   <div>
                    <Batch user={this.state.user2} handleClick={this.handlecross} userno="2"/>
                    {this.state.battled === true ? <BattleCard user={this.state.user2} winner={this.state.winner} id="2"/> : ""}
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <input type="text" placeholder="Enter GitHub Username" id="user2" className="input" />
                        <button id="submit2" name="user2" className="sub" onClick={this.getuserjson}>Submit</button>
                    </div>

                )
            }
        }
    }


    handlecross(key) {
        if(key === '1') {
            this.setState(() => {
                return (
                    {
                        gotuser1: false,
                        user1: {},
                        battled: false
                    }
                )
            })
        }
        else if(key === '2') {
            this.setState(() => {
                return (
                    {
                        gotuser2: false,
                        user2: {},
                        battled: false
                    }
                )
            })
        }
    }

    handleBattle() {
        if(this.state.gotuser1 === true && this.state.gotuser2 === true){
            if(this.state.user1.public_repos>this.state.user2.public_repos) {
                this.setState(() => {
                    return (
                        {
                            winner: "1",
                            battled: true
                        }
                    )
                })
            }
            else {
                this.setState(() => {
                    return (
                        {
                            winner: "2",
                            battled: true
                        }
                    )
                })
            }
        }
    }
    render() {
        return (
            <div>
                <div id="forms">
                    {this.batchrender(1)}
                    {this.batchrender(2)} 
                </div>
                <button name="battle" id="battleButton" onClick={this.handleBattle}>Battle</button>
            </div>
        )
    }
}
export default Battle;