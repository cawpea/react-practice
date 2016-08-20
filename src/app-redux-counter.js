import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import CounterStore from './stores/CounterStore.js';
import CounterContainer from './components/CounterContainer';

const store = CounterStore();

ReactDom.render(
	<Provider store={store}>
		<CounterContainer/>
	</Provider>,
	document.getElementById('root')
);