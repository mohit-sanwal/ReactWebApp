import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import {Provider} from 'react-redux';
import {
  BrowserRouter
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from './routes'
import configureStore from './redux/store.js';
const store = configureStore();






ReactDOM.render(
<Provider store={store} history={createBrowserHistory} > <BrowserRouter> <Routes /> </BrowserRouter> </Provider> , document.getElementById('app'));
