import React, { Component } from 'react';
import Language from './nav2';
import Navbar from './navbar';
import RepoCard from './repocard'

class Top extends Component {
    constructor(){
        super();
        this.state = {
            repos: {},
            isLoading: true, 
        }
        this.fetchData = this.fetchData.bind(this);
        this.renderCards = this.renderCards.bind(this);
    }

    
    componentDidMount(){
        fetch("https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&type=Repositories")
        .then(res => res.json())
        .then(data => {
            this.setState(() => {
                //console.log(data)
                return (
                    {
                        repos:data,
                        isLoading:false
                    }
                )
            })
        })
        
    }

    
    fetchData(language) {
        this.setState(() =>{
            return (
                {
                    repos: {},
                    isLoading: true
                }
            )
        })
        fetch("https://api.github.com/search/repositories?q=stars:>1+language:"+language+"&sort=stars&order=desc&type=Repositories")
        .then(res => res.json())
        .then(data => {
            this.setState(() => {
                return (
                    {
                        repos:data,
                        isLoading:false
                    }
                )
            })
        })
    }

    renderCards() {
       return (
        this.state.repos.items.map((repo) => {
                return (
                    <RepoCard repo={repo} key={repo.id}/>
                )
            })
       )
    }

    render() {
        return (
            <div>
                <div id="topnav">
                    <Navbar value="2" />
                    <Language handleClick={this.fetchData}/>
                </div>
                <div id="cardsec">
                   {this.state.isLoading === true ? <div className="loader">Loading...</div> : this.renderCards()}
                </div>
            </div>
        )
    }
}
export default Top;