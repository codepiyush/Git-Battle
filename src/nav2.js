import React from 'react';

class Language extends React.Component {
    render() {
        return (
            <div id="language">
                <button name="all" onClick = {() => this.props.handleClick("all")} >All</button>
                <button name="javascript" onClick = {() => this.props.handleClick("javascript")}>Javascript</button>
                <button name="ruby" onClick = {() => this.props.handleClick("ruby")}>Ruby</button>
                <button name="pyhton" onClick = {() => this.props.handleClick("python")}>Python</button>
                <button name="cpp" onClick = {() => this.props.handleClick("cpp")}>C++</button>
                <button name="c#" onClick = {() => this.props.handleClick("c#")}>C#</button>
            </div>
        )
    }
}
export default Language;