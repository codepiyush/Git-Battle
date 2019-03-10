import React from 'react';

class RepoCard extends React.Component {
    
    render() {
        let {forks_count, open_issues_count, stargazers_count, name} = this.props.repo;
        return (
            <div id="card">
                <img src={this.props.repo.owner.avatar_url} alt="User Avatar"/>
                <h3>{name}</h3>
                <p>Owner: {this.props.repo.owner.login}</p>
                <p>Star: {stargazers_count}</p>
                <p>Forks: {forks_count}</p>
                <p>Issues: {open_issues_count}</p>
            </div>
        )
    }
}
export default RepoCard;