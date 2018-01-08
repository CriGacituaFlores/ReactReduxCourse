import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
//react-redux
//Provider: engloba el componente principal para que los demas componentes hijos tengan acceso al store
import { Provider } from 'react-redux';

//Es una funcion que engloba una expresion y hace que se ejecucion se retrase
import ReduxThunk from 'redux-thunk'

//const state = { cantidad: 2 };

const reducerNumero = (state = 2, action) => {
    var nuevoEstado = Object.assign({}, state)
    if (action.type === "AUM") {
        console.log("dentro del reducer aumentar");
        nuevoEstado = state + 1;
        return nuevoEstado;
    } else if (action.type === "DIS") {
        nuevoEstado = state - 1;
        return nuevoEstado;
    }
    return state;
}

const reducerID = (state=1, action) => {
    var nuevoEstado = Object.assign({}, state);
    if(action.type === "ADD") {
        nuevoEstado = state + 1;
        return nuevoEstado;
    }
    return state;
}

const reducerTareas = (state = [], action) => {
    var nuevoEstado = Object.assign({}, state);
    if (action.type === "ADD") {
        console.log(nuevoEstado);
        nuevoEstado = state.concat([{ tarea: action.tarea, id: action.id }]);
        console.log(nuevoEstado);
        return nuevoEstado;
    }
    return state;
}

//CombineReducer todo un objeto JS con los demas
// reducers como valores
const reducer = combineReducers({
    numero: reducerNumero,
    tareas: reducerTareas,
    id: reducerID
})

//crear store
const store = createStore(reducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
    //1. Implementar el PROVIDER
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
