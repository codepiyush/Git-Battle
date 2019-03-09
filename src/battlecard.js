import React, {Component} from 'react';

class BattleCard extends Component {
    constructor(props) {
        super();
        this.showwinner = this.showwinner.bind(this);
    }

    showwinner() {
        if(this.props.id === this.props.winner){
            console.log("winer is: " + this.props.winner);
            return (
                <h3>WINNER</h3>
            )
        }
        else {
            return (
                <h3>  </h3>
            )
        }
    }

    render() {
        let {avatar_url, name, login, followers, following, public_repos} = this.props.user;
        console.log(avatar_url, name, login, followers, following, public_repos);
        return (
            <div id="card">
                {this.showwinner()}
                <img src={avatar_url} alt="User Avatar"/>
                <p>Name: {name}</p>
                <p>Username: {login}</p>
                <p>Followers: {followers}</p>
                <p>following: {following}</p>
                <p>Repos: {public_repos}</p>
            </div>
        )
    }
}
export default BattleCard;