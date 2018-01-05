import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//redux
import { createStore } from 'redux';
//react-redux
//Provider: engloba el componente principal para que los demas componentes hijos tengan acceso al store
import { Provider } from 'react-redux';

const state = { cantidad: 2 };

const reducer = (state, action) => {
    return state;
}

//crear store
const store = createStore(reducer, state);

ReactDOM.render(
    //1. Implementar el PROVIDER
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
