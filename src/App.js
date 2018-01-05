import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//permite acceder al estado como la posibilidad de ejecutar acciones (dispatch) a nuestros componentes (ACTIONS y ACTION CREATOR)
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.information}
          <br/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

//Ingresa como props a nuestro Component tanto el STATE como los DISPATCH

//internamente hace una susbscripcion y un get state
//por lo que constantemente en caso de un cambio en el STATE se actualiza
//o se ejecuta nuevamente
const mapStateToProps = (state) => {
  //retorna un objeto javascript
  return {
    information: state.cantidad
  }
}

//
const mapDispatchToProps = {
  aumentar: () => {
    return { type: "AUM" }
  },
  disminuir: () => {
    return { type: "DIS" }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
