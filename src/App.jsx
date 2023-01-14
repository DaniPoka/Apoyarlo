import './App.css';
import { Component } from 'react';
import Nombreyapellido from './components/nombre';
import Edad from './components/edad';
import Color from './components/cabello';


class App extends Component {    
  render() {        
      return (            
        <>
        <Nombreyapellido  apellido= "Doe"   nombre= "Jane"   />
        <Edad edad= { 43 }/>
        <Color color='Black' />

        <Nombreyapellido  apellido= "Smith"   nombre= "John"   />
        <Edad edad= { 88 }/>
        <Color color='Brown' />

        <Nombreyapellido  apellido= "Fillmore"   nombre= "Millard"   />
        <Edad edad= { 50 }/>
        <Color color='Brown' />

        <Nombreyapellido  apellido= "Smith"   nombre= "Maria"   />
        <Edad edad= { 62 }/>
        <Color color='Brown' />
        </>
      );    
  }
}
export default App;
