import { Component } from 'react';


class Nombreyapellido extends Component {
    
    render() { 
        return (<div>
            <h1>{ this.props.apellido }, { this.props.nombre }</h1>
        </div>);
    }
}

export default Nombreyapellido;