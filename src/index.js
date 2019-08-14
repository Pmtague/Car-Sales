import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { carReducer } from './store/reducers';

import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';



export const store = createStore(carReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
	<App />
</Provider>, 
rootElement);
