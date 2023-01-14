import { Component } from 'react';


class Color extends Component {
    
    render() { 
        return (<div>
            <p>Hair Color: { this.props.color }</p>
        </div>);
    }
}

export default Color;