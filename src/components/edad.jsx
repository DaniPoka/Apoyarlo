import { Component } from 'react';


class Edad extends Component {
    
    render() { 
        return (<div>
            <p>Age: { this.props.edad }</p>
        </div>);
    }
}

export default Edad;