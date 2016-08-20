import {createStore} from 'redux';
import reducer from '../reducers/numReducer';

export default function ReduxStore () {
	const store = createStore( reducer );
	return store;
}
