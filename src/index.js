import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import  {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App'
import reducers from './reducer/index'


ReactDOM.render(
 <Provider store = {createStore(reducers)}>
    <App/>
 </Provider>   
, document.getElementById('root'))
