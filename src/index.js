import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //componente
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form'

//mapear todos os reducers da aplicação
const rootReducer = combineReducers({
  //registrando o reducer do REDUX-FORM
  form: formReducer
});

//criando a variavel store (armazenar os dados do state da aplicação)
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
