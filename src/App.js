import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//permite acceder al estado como la posibilidad de ejecutar acciones (dispatch) a nuestros componentes (ACTIONS y ACTION CREATOR)
import { connect } from 'react-redux';

class App extends Component {
    constructor (props) {
      super(props);
      this.agregarTarea = this.agregarTarea.bind(this);
    }

    agregarTarea = (event) => {
      if(event.which === 13) {
        console.log(event.target.value)
        this.props.agregar(event.target.value, this.props.id)
      }
    }
  render() {
    const elementosTareas = this.props.tareas.map((tarea) => {
      return <h2 key={tarea.id}>{tarea.tarea}</h2>
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {this.props.information}
          <br/>
          <button onClick={this.props.aumentar}>Aumentar</button>
          <br/>
          <button onClick={this.props.disminuir}>Disminuir</button>
          <br/>
          <input onKeyPress={this.agregarTarea}/>
          <br/>
          {elementosTareas}
          <br/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
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
    information: state.numero,
    tareas: state.tareas,
    id: state.id
  }
}

//Es un objeto, que asume que las funciones internas son ACTION CREATOR
//y que al ingresarlas a nuestro Component las engloba en DISPATCH
//para que de esta forma puedan ser llamadas como DISPATCH
//const mapDispatchToProps = {
//  aumentar: () => {
//    return { type: "AUM" }
//  },
//  disminuir: () => {
//    return { type: "DIS" }
//  }
//}

//De esta manera se pueden ejectuar acciones async
//Puede ser tambien una funcion que tiene disponible
//el dispatch y por lo tanto podemos ejecutarlo dentro
// de nuestras funciones
const mapDispatchToProps = (dispatch) => {
  return {
    aumentar: () => {
      dispatch({
        type: "AUM"
      })
    },
    disminuir: () => {
      dispatch({
        type: "DIS"
      })
    },
    agregar: (tarea, id) => {
      dispatch({
        type: "ADD",
        tarea,
        id
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
